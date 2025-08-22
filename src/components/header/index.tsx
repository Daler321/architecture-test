"use client";

import { usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {
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
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>architecture</h1>
      <div className={styles.headerNavContainer}>
        <div className={styles.headerNavItems}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                className={`${styles.headerNavItem} ${
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
