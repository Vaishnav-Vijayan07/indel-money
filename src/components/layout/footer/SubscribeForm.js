"use client";

import { PlaceholdersAndVanishInput } from "../../ui/placeholders-and-vanish-input";

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = ["Enter Your email address", "Subscribe for latest updates", "Get up-to-date"];

  return <PlaceholdersAndVanishInput type={"email"} placeholders={placeholders} />;
}
