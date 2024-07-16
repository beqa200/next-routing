import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="border-2 border-red-300">
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
