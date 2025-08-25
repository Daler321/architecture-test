"use client";

import ArticlesList from "@/components/articles-list";
import Metadata from "@/components/metadata";
import { useQuery } from "@apollo/client/react";
import { getArticlesByTag } from "@/lib/query";
import ArticlesListSkeleton from "../articles-list-skeleton";

export default function CategoryPage({ tagId }: { tagId: string }) {
  const { data, loading } = useQuery(getArticlesByTag, {
    variables: { documentId: tagId },
  });

  if (loading) {
    return <ArticlesListSkeleton />;
  }

  return (
    <>
      <Metadata
        seoTitle={data?.tag.seo.title || ""}
        seoDescription={data?.tag.seo.description || ""}
      />
      <ArticlesList articles={data?.tag.articles || []} />
    </>
  );
}
