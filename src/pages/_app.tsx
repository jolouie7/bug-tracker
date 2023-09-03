import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";

import Signin from "./signin";

if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key";
}

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const publicPages = ["/signin", "/signup"];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ChakraProvider>
        {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <Signin />
            </SignedOut>
          </>
        )}
      </ChakraProvider>
    </ClerkProvider>
  );
}
