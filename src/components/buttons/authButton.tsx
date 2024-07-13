"use client";

import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

export function GoogleSignInButton() {
  return (
    <button className="btn" onClick={() => signIn("google")}>
      <Image src="/google.png" alt="Google Logo" width={20} height={20} />
      <span className="ml-1">Continue with Google</span>
    </button>
  );
}

export function SignOutButton() {
  return (
    <button className="btn btn-neutral" onClick={() => signOut()}>
      <span>Sign Out</span>
    </button>
  );
}
