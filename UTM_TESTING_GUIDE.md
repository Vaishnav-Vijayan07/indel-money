# UTM Parameter Tracking - Testing Guide

## Server Status
✅ Development server is running at: **http://localhost:3000**

## Test Scenarios

### Test 1: Default Values (No UTM Parameters)
**URL to test:**
```
http://localhost:3000/ncd-issue
```

**Expected Results:**
- Debug panel should show:
  - Campaign: `NCD 6`
  - Source: `Direct`
  - Medium: `Direct`
  - Referral URL: `http://localhost:3000/ncd-issue`

**Browser Console Should Show:**
```
UTM Parameters Captured: {
  campaign: "NCD 6",
  source: "Direct",
  medium: "Direct",
  referralUrl: "http://localhost:3000/ncd-issue"
}
```

---

### Test 2: Google Ads Campaign
**URL to test:**
```
http://localhost:3000/ncd-issue?utm_source=google&utm_medium=cpc&utm_campaign=ncd6_launch
```

**Expected Results:**
- Debug panel should show:
  - Campaign: `ncd6_launch`
  - Source: `google`
  - Medium: `cpc`
  - Referral URL: Full URL with all parameters

**Browser Console Should Show:**
```
UTM Parameters Captured: {
  campaign: "ncd6_launch",
  source: "google",
  medium: "cpc",
  referralUrl: "http://localhost:3000/ncd-issue?utm_source=google&utm_medium=cpc&utm_campaign=ncd6_launch"
}
```

---

### Test 3: Facebook Campaign
**URL to test:**
```
http://localhost:3000/ncd-issue?utm_source=facebook&utm_medium=social&utm_campaign=ncd6_social
```

**Expected Results:**
- Debug panel should show:
  - Campaign: `ncd6_social`
  - Source: `facebook`
  - Medium: `social`

---

### Test 4: Email Campaign
**URL to test:**
```
http://localhost:3000/ncd-issue?utm_source=newsletter&utm_medium=email&utm_campaign=ncd6_email_blast
```

**Expected Results:**
- Debug panel should show:
  - Campaign: `ncd6_email_blast`
  - Source: `newsletter`
  - Medium: `email`

---

### Test 5: Partial UTM Parameters
**URL to test:**
```
http://localhost:3000/ncd-issue?utm_source=linkedin
```

**Expected Results:**
- Debug panel should show:
  - Campaign: `NCD 6` (default)
  - Source: `linkedin` (captured)
  - Medium: `Direct` (default)

---

### Test 6: Form Submission Test
**Steps:**
1. Visit: `http://localhost:3000/ncd-issue?utm_source=test&utm_medium=manual&utm_campaign=testing`
2. Open Browser Console (F12)
3. Fill out the form:
   - Name: Test User
   - Mobile: 1234567890
   - Email: test@example.com
   - State: Select any state
   - Check the privacy checkbox
4. Click Submit

**Expected Console Output:**
```
UTM Parameters Captured: {
  campaign: "testing",
  source: "test",
  medium: "manual",
  referralUrl: "..."
}

Zoho Form Submission Data: {
  campaign: "testing",
  source: "test",
  medium: "manual",
  referralUrl: "..."
}
```

---

## How to Test

### Step 1: Open Browser
Open Chrome, Firefox, or Safari

### Step 2: Open Developer Console
- **Windows/Linux:** Press `F12` or `Ctrl + Shift + I`
- **Mac:** Press `Cmd + Option + I`

### Step 3: Navigate to Console Tab
Click on the "Console" tab in the developer tools

### Step 4: Test Each URL
Copy and paste each test URL into your browser's address bar

### Step 5: Verify Results
- Check the yellow debug panel on the form
- Check the console logs
- Try submitting the form and verify the submission logs

---

## Debug Panel

The form now includes a **yellow debug panel** at the top (visible in development mode) that shows:
- ✅ Current UTM parameters being tracked
- ✅ Real-time updates when URL changes
- ✅ Instructions to check console logs

**Note:** This debug panel will **only appear in development mode** and will be hidden in production.

---

## Troubleshooting

### If UTM parameters are not showing:
1. Make sure the URL includes the `?` before parameters
2. Multiple parameters should be separated by `&`
3. Parameter names must be exact: `utm_source`, `utm_medium`, `utm_campaign`
4. Clear browser cache and reload the page

### If console logs are not appearing:
1. Make sure Console tab is open in Developer Tools
2. Check that console logs aren't filtered (should show "All levels")
3. Try a hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)

---

## Production Deployment

### Before deploying to production:

1. **Optional:** Disable debug logging by changing line 6 in NcdForm.js:
   ```javascript
   // Change from:
   const utmParams = useUtmTracker(true);

   // To:
   const utmParams = useUtmTracker(false);
   ```

2. **Optional:** Remove console.log from submitToZoho function (lines 165-171)

3. The yellow debug panel will **automatically hide** in production (it only shows when `NODE_ENV === "development"`)

---

## Files Modified

1. ✅ `/src/hooks/useUtmTracker.js` - UTM capture logic
2. ✅ `/src/components/features/ncd-issues/NcdForm.js` - Form with UTM integration
3. ✅ Debug panel added for testing

---

## Next Steps

1. Test all scenarios above
2. Verify UTM data is being submitted to Zoho correctly
3. Confirm with marketing team that data is appearing in Zoho CRM
4. Deploy to production
