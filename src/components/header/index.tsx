"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contacts",
      href: "/contacts",
    },
  ];

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>
        <Link href="/">architecture</Link>
      </h1>
      <div className={styles.headerNavContainer}>
        <div className={styles.headerNavItems}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                className={`${styles.headerNavItem} ${
                  isActive ? styles.active : ""
                }`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className={styles.verticalLine} />
        <span>
          <a href="tel:+79118183410">+7 (911) 818-34-10</a>
        </span>
      </div>
      <div
        className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
