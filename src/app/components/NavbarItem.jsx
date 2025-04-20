"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const isActive = genre === param;

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`m-4 font-semibold p-2 transition-colors duration-200 ${
          isActive
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 text-amber-600"
            : "hover:text-amber-600"
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
