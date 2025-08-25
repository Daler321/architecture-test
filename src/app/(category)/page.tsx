"use client";

import ArticlesList from "@/components/articles-list";
import styles from "./category.module.css";
import { getHomeArticles } from "@/lib/query";
import { useQuery } from "@apollo/client/react";
import ArticlesListSkeleton from "@/components/articles-list-skeleton";

export default function Home() {
  const { data, loading } = useQuery(getHomeArticles);

  if (loading) {
    return (
      <div className={styles.articlesListContainer}>
        <ArticlesListSkeleton />
      </div>
    );
  }

  return (
    <div className={styles.articlesListContainer}>
      <ArticlesList articles={data?.articles || []} />
    </div>
  );
}
