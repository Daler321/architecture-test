"use client";

import { usePathname } from "next/navigation";
import styles from "./footer.module.css";

export default function Footer() {
  const pathname = usePathname();

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
    <div className={styles.footerContainer}>
      <h1 className={styles.footerTitle}>
        <a href="/">architecture</a>
        <span>(с) 2025, all rights reserved</span>
      </h1>
      <div className={styles.footerNavContainer}>
        <div className={styles.footerNavItems}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                className={`${styles.footerNavItem} ${
                  isActive ? styles.active : ""
                }`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <div className={styles.verticalLine} />
        <span>+7 (911) 818-34-10</span>
      </div>
    </div>
  );
}
