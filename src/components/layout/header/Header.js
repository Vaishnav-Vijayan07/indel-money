"use client";
import { useMediaQuery } from "@react-hook/media-query";
import MobHeader from "./MobHeader";
import DeskHeader from "./DeskHeader";

import "./Header.css";

export default function Header() {
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  return <>{isMobile ? <MobHeader /> : <DeskHeader />}</>;
}
