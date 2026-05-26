import "server-only";
import { cookies } from "next/headers";

export function getLocationSession() {
  const cookieStore = cookies();
  return {
    stateId: cookieStore.get("stateId")?.value || null,
    stateName: cookieStore.get("stateName")?.value || "Global",
  };
}

export function setLocationSession(stateId, stateName) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 1 week
  const cookieStore = cookies();

  cookieStore.set("stateId", stateId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("stateName", stateName, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires,
    sameSite: "lax",
    path: "/",
  });
}
