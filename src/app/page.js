<<<<<<< HEAD
import React from "react";
import HeroBanner from "../components/features/home/HeroBanner";
import DreamsToReality from "../components/features/home/DreamsToReality";
import GoldLoanCalculator from "../components/features/home/GoldLoanCalculator";
import LifeAtIndel from "../components/features/home/LifeAtIndel";
import LatestUpdates from "../components/features/home/LatestUpdates";
import TrustedInvestment from "../components/features/home/TrustedInvestment";
import BranchLocator from "../components/features/home/BranchLocator";
import Innovations from "../components/features/home/Innovations";
=======
import { log } from "console";
import HomeClient from "../pages/HomeClient";
>>>>>>> a1eed89f8abbd5d8dc58130a813add240c013a16

// async function fetchHomeData() {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/home`, {
//       cache: "no-store", // Ensure fresh data
//     });

//     const result = await response.json();

//     if (result.status === "success") {
//       return { data: result.data, error: null };
//     }
//     return { data: null, error: result.message };
//   } catch (error) {
//     return { data: null, error: "Failed to fetch home data" };
//   }
// }

export async function generateMetadata() {
  const { data, error } = await fetchHomeData();

  return {
    title: data?.pageContent?.meta_title || "Blog Post | My Website",
    description: data?.pageContent?.meta_description || data?.pageContent?.description || "Read our latest blog post.",
    keywords: data?.pageContent?.meta_keywords || "blog, post, news",
  };
}

async function fetchHomeData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/home`, {
      cache: "no-store",
      credentials: "include", // Ensures session cookie is sent
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.status === "success") {
      return { data: result.data, error: null };
    }
    return { data: null, error: result.message };
  } catch (error) {
    return { data: null, error: "Failed to fetch home data" };
  }
}

export default async function HomePage() {
  const { data, error } = await fetchHomeData();
  return (
    <HomeClient
      initialData={data}
      serviceBanner={data?.service}
      banner={data?.banner}
      branchLocatorData={data?.branchLocatorData}
      initialError={error}
    />
  );
}
