import { useUser } from "@clerk/nextjs";

export default function Home() {
  // Use the useUser hook to get the Clerk.user object
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user);

  return (
    <>
      <main>Hello {user.primaryEmailAddress?.emailAddress}!!</main>
    </>
  );
}
