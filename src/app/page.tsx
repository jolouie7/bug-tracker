"use client";

import { useUser } from "@clerk/nextjs";

export default function HomePage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user);

  return (
    <main>Hello {user.primaryEmailAddress?.emailAddress}!!</main>
  );
}