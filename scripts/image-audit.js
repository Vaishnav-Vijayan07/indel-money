// scripts/image-audit.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function analyzeImages(dir) {
  const images = [];
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
  
  function scanDirectory(directory) {
    const items = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(directory, item.name);
      
      if (item.isDirectory()) {
        scanDirectory(fullPath);
      } else if (allowedExtensions.includes(path.extname(item.name).toLowerCase())) {
        const stats = fs.statSync(fullPath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        
        images.push({
          name: item.name,
          path: fullPath.replace(process.cwd(), ''),
          size: sizeKB + ' KB',
          sizeBytes: stats.size,
          extension: path.extname(item.name),
          isLarge: stats.size > 100 * 1024, // Flag images > 100KB
        });
      }
    }
  }
  
  scanDirectory(dir);
  return images;
}

function generateImageReport() {
  console.log('🔍 Analyzing images...\n');
  
  const publicImages = analyzeImages(path.join(process.cwd(), 'public'));
  const srcImages = analyzeImages(path.join(process.cwd(), 'src'));
  
  const allImages = [...publicImages, ...srcImages];
  
  console.log(`📊 Found ${allImages.length} images\n`);
  
  // Large images report
  const largeImages = allImages.filter(img => img.isLarge);
  if (largeImages.length > 0) {
    console.log('⚠️  Large images (>100KB):');
    largeImages.forEach(img => {
      console.log(`  - ${img.name} (${img.size}) - ${img.path}`);
    });
    console.log();
  }
  
  // Format optimization suggestions
  const nonWebPImages = allImages.filter(img => 
    ['.jpg', '.jpeg', '.png'].includes(img.extension) && 
    !img.name.includes('.webp')
  );
  
  if (nonWebPImages.length > 0) {
    console.log('💡 Consider converting to WebP:');
    nonWebPImages.slice(0, 5).forEach(img => {
      console.log(`  - ${img.name}`);
    });
    if (nonWebPImages.length > 5) {
      console.log(`  ... and ${nonWebPImages.length - 5} more`);
    }
    console.log();
  }
  
  // Summary
  const totalSize = allImages.reduce((sum, img) => sum + img.sizeBytes, 0);
  console.log(`📈 Total image size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📊 Average image size: ${(totalSize / allImages.length / 1024).toFixed(2)} KB`);
}

generateImageReport();

// scripts/performance-budget.js
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

const performanceBudget = {
  'first-contentful-paint': 2000,
  'largest-contentful-paint': 4000,
  'cumulative-layout-shift': 0.1,
  'total-blocking-time': 300,
  'speed-index': 4000,
};

async function runPerformanceAudit(url = 'http://localhost:3000') {
  console.log('🚀 Starting performance audit...\n');
  
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
  });
  
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
  };
  
  try {
    const runnerResult = await lighthouse(url, options);
    const audits = runnerResult.lhr.audits;
    
    console.log('📊 Performance Budget Check:\n');
    
    let passed = 0;
    let total = 0;
    
    for (const [metric, budget] of Object.entries(performanceBudget)) {
      const audit = audits[metric];
      if (audit) {
        const actual = audit.numericValue;
        const status = actual <= budget ? '✅' : '❌';
        const unit = metric === 'cumulative-layout-shift' ? '' : 'ms';
        
        console.log(`${status} ${metric}: ${actual}${unit} (budget: ${budget}${unit})`);
        
        if (actual <= budget) passed++;
        total++;
      }
    }
    
    console.log(`\n🎯 Performance Score: ${passed}/${total} metrics passed`);
    console.log(`📈 Overall Performance Score: ${runnerResult.lhr.categories.performance.score * 100}/100`);
    
    // Opportunities
    const opportunities = Object.values(audits)
      .filter(audit => audit.details && audit.details.type === 'opportunity')
      .sort((a, b) => b.numericValue - a.numericValue)
      .slice(0, 3);
    
    if (opportunities.length > 0) {
      console.log('\n💡 Top Optimization Opportunities:');
      opportunities.forEach(opportunity => {
        console.log(`  - ${opportunity.title}: ${opportunity.displayValue || 'N/A'}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Performance audit failed:', error.message);
  } finally {
    await chrome.kill();
  }
}

// Check if server is running
async function checkServer(url) {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    return false;
  }
}

async function main() {
  const url = process.argv[2] || 'http://localhost:3000';
  
  const isServerRunning = await checkServer(url);
  if (!isServerRunning) {
    console.log('⚠️  Server is not running at', url);
    console.log('Please start your server first: npm run dev or npm run start');
    process.exit(1);
  }
  
  await runPerformanceAudit(url);
}

main().catch(console.error);

// scripts/api-audit.js
async function auditAPI() {
  console.log('🔍 Auditing API endpoints...\n');
  
  const apiEndpoints = [
    '/api/loan-against-property',
    // Add your API endpoints here
  ];
  
  for (const endpoint of apiEndpoints) {
    const startTime = Date.now();
    
    try {
      const response = await fetch(`http://localhost:3000${endpoint}`);
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      const contentLength = response.headers.get('content-length');
      const contentType = response.headers.get('content-type');
      
      console.log(`📊 ${endpoint}:`);
      console.log(`  Status: ${response.status}`);
      console.log(`  Response Time: ${responseTime}ms`);
      console.log(`  Size: ${contentLength ? `${contentLength} bytes` : 'Unknown'}`);
      console.log(`  Type: ${contentType || 'Unknown'}`);
      
      if (responseTime > 1000) {
        console.log(`  ⚠️  Slow response (>1s)`);
      }
      
      console.log();
    } catch (error) {
      console.log(`❌ ${endpoint}: ${error.message}\n`);
    }
  }
}

auditAPI().catch(console.error);