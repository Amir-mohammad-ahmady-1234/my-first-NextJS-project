"use client";

import React from "react";
import Link from "next/link";

import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path === href ? `${classes.Link} ${classes.active}` : classes.Link
      }
    >
      {children}
    </Link>
  );
}
