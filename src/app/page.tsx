"use client";

import { useEffect, useState } from "react";
import { gql, TypedDocumentNode } from "@apollo/client";
import HomeHeader from "@/components/home-header";
import client from "@/lib/apolloClient";

interface IArticle {
  documentId: string;
  seo: {
    slug: string;
    title: string;
  };
  Hero: {
    description: string;
    id: string;
    title: string;
    background: {
      url: string;
      previewUrl: string;
      name: string;
      caption: string;
      alternativeText: string;
    };
  };
  tags: {
    documentId: string;
    seo: {
      slug: string;
      title: string;
    };
  };
}

interface ITag {
  documentId: string;
  seo: {
    slug: string;
    title: string;
  };
}

export default function Home() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);

  const query: TypedDocumentNode<{
    articles: IArticle[];
    tags: ITag[];
  }> = gql`
    query Query {
      articles {
        documentId
        seo {
          slug
          title
        }
        Hero {
          description
          id
          title
          background {
            url
            previewUrl
            name
            caption
            alternativeText
          }
        }
      }
      tags {
        documentId
        seo {
          slug
          title
        }
      }
    }
  `;

  useEffect(() => {
    // client
    //   .query({
    //     query,
    //   })
    //   .then((res) => {
    //     setArticles(res.data?.articles || []);
    //     setTags(res.data?.tags || []);
    //   });
  }, []);

  return (
    <div>
      <HomeHeader />
      <h1>hello</h1>
    </div>
  );
}
