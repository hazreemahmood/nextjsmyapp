"use client";

import Image from "next/image";
import { SignOutButton } from "@/components/buttons/authButton";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar(data: any) {
  const session = useSession();
  return (
    <div className="navbar bg-base-300 sticky top-0 z-50">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </a>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li>
            <Link href="/user">Home</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <h3 className="pr-4">{session.data?.user?.name as string}</h3>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={session.data?.user?.image as string} alt="Avatar Tailwind CSS Component"></img>
                {/* <Image
                  src={session.data?.user?.image as string}
                  alt="Avatar Tailwind CSS Component"
                  width={100}
                  height={100}
                /> */}
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <SignOutButton />
          </ul>
        </div>
      </div>
      {/* mobile view */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
