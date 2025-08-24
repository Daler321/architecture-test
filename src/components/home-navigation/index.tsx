"use client";

import Link from "next/link";
import Button from "../ui/button";
import styles from "./home-navigation.module.css";
import buttonStyles from "../ui/button/button.module.css";
import { usePathname } from "next/navigation";

const tags = [
  {
    documentId: "2",
    seo: {
      slug: "architectural-design",
      title: "Architectural Design",
    },
  },
  {
    documentId: "3",
    seo: {
      slug: "residential-interiors",
      title: "Residential Interiors",
    },
  },
  {
    documentId: "4",
    seo: {
      slug: "commercial-interior",
      title: "Commercial Interior",
    },
  },
];

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

  return (
    <div className={styles.homeNavigationContainer}>
      <NavigationItem
        href="/"
        title="All projects"
        isActive={pathname === `/`}
      />
      {tags.map((tag) => (
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
