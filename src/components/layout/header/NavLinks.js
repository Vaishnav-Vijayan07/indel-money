"use client";

import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Animation variants for consistent animations
const animationVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 8,
  },
  slideLeft: {
    opacity: 0,
    x: 100,
  },
  slideRight: {
    opacity: 0,
    x: -100,
  },
  center: {
    opacity: 1,
    x: 0,
  },
};


export const ShiftingDropDown = ({ 
  tabs = DEFAULT_TABS, // Provide default tabs
  className = "flex h-full w-full justify-start md:justify-center" 
}) => {
  // Process tabs to ensure they have IDs
  const processedTabs = tabs.map((tab, idx) => ({ ...tab, id: idx + 1 }));
  
  return (
    <div className={className}>
      <Tabs tabs={processedTabs} />
    </div>
  );
};

const Tabs = ({ tabs }) => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = useCallback((val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  }, [selected]);

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex gap-2"
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={tab}
        />
      ))}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} tabs={tabs} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ tab, selected, handleSetSelected }) => {
  const { id, title, href } = tab;
  const isSelected = selected === id;
  const className = `h-[80px] flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
    isSelected ? "text-black" : "text-neutral"
  }`;

  // Common event handlers
  const handleMouseEnter = () => handleSetSelected(id);

  if (href) {
    return (
      <Link 
        href={href}
        id={`shift-tab-${id}`}
        onMouseEnter={handleMouseEnter}
        className={className}
      >
        <span>{title}</span>
      </Link>
    );
  }
  
  return (
    <button
      id={`shift-tab-${id}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleMouseEnter}
      className={className}
    >
      <span>{title}</span>
    </button>
  );
};

const Content = ({ selected, dir, tabs }) => {
  // Find the selected tab
  const selectedTab = tabs.find(tab => tab.id === selected);
  
  return (
    <motion.div
      id="overlay-content"
      initial={animationVariants.initial}
      animate={animationVariants.animate}
      exit={animationVariants.exit}
      className="absolute z-1 left-0 top-[calc(100%)] w-full rounded-lg"
    >
      <Bridge />
      <Nub selected={selected} />

      {selectedTab?.Component && (
        <motion.div
          className="overflow-hidden absolute z-1 bg-white p-2"
          initial={dir === "l" ? animationVariants.slideLeft : dir === "r" ? animationVariants.slideRight : animationVariants.initial}
          animate={animationVariants.center}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <selectedTab.Component />
        </motion.div>
      )}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[10px] left-0 right-0 h-[10px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  const moveNub = useCallback(() => {
    const hoveredTab = document.getElementById(`shift-tab-${selected}`);
    const overlayContent = document.getElementById("overlay-content");

    if (!hoveredTab || !overlayContent) return;

    const tabRect = hoveredTab.getBoundingClientRect();
    const { left: contentLeft } = overlayContent.getBoundingClientRect();

    const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

    setLeft(tabCenter);
  }, [selected]);

  useEffect(() => {
    moveNub();
    
    // Add resize listener to handle responsive layout changes
    window.addEventListener("resize", moveNub);
    return () => window.removeEventListener("resize", moveNub);
  }, [moveNub]);

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

// Example component implementations
const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Startup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Invoicing
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Reviews
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Tax/VAT
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            More
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <span className="text-xs">Startup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <span className="text-xs">Scaleup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <span className="text-xs">Enterprise</span>
      </a>
    </div>
  );
};


// Default tabs configuration
const DEFAULT_TABS = [
  {
    title: "gold loan",
    Component: Products,
  },
  {
    title: "foreign exchange",
    href: "/foreign-exchange",
  },
  {
    title: "other loan",
    href: "/other-loan",
  },
  {
    title: "careers",
    Component: Products,
  },
  {
    title: "about",
    Component: Pricing,
  },
];