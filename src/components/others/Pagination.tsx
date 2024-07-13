"use client";

import Image from "next/image";
import { useState } from "react";

export default function Pagination({ resource, setPaginate }: any) {
  return (
    <div className="flex items-center place-content-end ">
      {[...(Array(resource.total_pages).keys() as any)]
        .map((x) => x + 1)
        .map((page, key) => (
          <button
            key={key}
            onClick={() => setPaginate(page)}
            className="px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100"
          >
            {page}
          </button>
        ))}
    </div>
  );
}
