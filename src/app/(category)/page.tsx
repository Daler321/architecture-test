"use client";

import { useEffect, useState } from "react";
import { gql, TypedDocumentNode } from "@apollo/client";
import client from "@/lib/apolloClient";

import ArticlesList from "@/components/articles-list";
import styles from "./category.module.css";

const articles = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Importance of Sustainable Design in Architectural Projects",
    description:
      "In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.",
  },
];

// interface IArticle {
//   documentId: string;
//   seo: {
//     slug: string;
//     title: string;
//   };
//   Hero: {
//     description: string;
//     id: string;
//     title: string;
//     background: {
//       url: string;
//       previewUrl: string;
//       name: string;
//       caption: string;
//       alternativeText: string;
//     };
//   };
//   tags: {
//     documentId: string;
//     seo: {
//       slug: string;
//       title: string;
//     };
//   };
// }

// interface ITag {
//   documentId: string;
//   seo: {
//     slug: string;
//     title: string;
//   };
// }

export default function Home() {
  // const [articles, setArticles] = useState<IArticle[]>([]);
  // const [tags, setTags] = useState<ITag[]>([]);

  // const query: TypedDocumentNode<{
  //   articles: IArticle[];
  //   tags: ITag[];
  // }> = gql`
  //   query Query {
  //     articles {
  //       documentId
  //       seo {
  //         slug
  //         title
  //       }
  //       Hero {
  //         description
  //         id
  //         title
  //         background {
  //           url
  //           previewUrl
  //           name
  //           caption
  //           alternativeText
  //         }
  //       }
  //     }
  //     tags {
  //       documentId
  //       seo {
  //         slug
  //         title
  //       }
  //     }
  //   }
  // `;

  // useEffect(() => {
  // client
  //   .query({
  //     query,
  //   })
  //   .then((res) => {
  //     setArticles(res.data?.articles || []);
  //     setTags(res.data?.tags || []);
  //   });
  // }, []);

  return (
    <div className={styles.articlesListContainer}>
      <ArticlesList articles={articles} />
    </div>
  );
}
