"use client";

import Link from "next/link";
import Button from "../ui/button";
import styles from "./home-navigation.module.css";
import buttonStyles from "../ui/button/button.module.css";
import { usePathname } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { getTags } from "@/lib/query";

const NavigationItem = ({
  href,
  title,
  isActive,
}: {
  href: string;
  title: string;
  isActive: boolean;
}) => {
  return (
    <Link href={href}>
      <Button
        className={`${buttonStyles.inverted} ${
          isActive ? buttonStyles.active : ""
        }`}
      >
        {title}
      </Button>
    </Link>
  );
};

const HomeNavigation = () => {
  const pathname = usePathname();
  const { data } = useQuery(getTags);

  return (
    <div className={styles.homeNavigationContainer}>
      <NavigationItem
        href="/"
        title="All projects"
        isActive={pathname === `/`}
      />
      {data?.tags.map((tag) => (
        <NavigationItem
          href={`/${tag.documentId}`}
          title={tag.seo.title}
          isActive={pathname === `/${tag.documentId}`}
          key={tag.documentId}
        />
      ))}
    </div>
  );
};

export default HomeNavigation;
