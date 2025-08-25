import { gql, TypedDocumentNode } from "@apollo/client";
import { IArticle, IContent } from "@/types/article";
import { ITag } from "@/types/tag";

type GetVariables = Record<string, never>;

export const getHomeArticles: TypedDocumentNode<
  { articles: IArticle[] },
  GetVariables
> = gql`
  query GetArticles {
    articles {
      Hero {
        background {
          documentId
          url
          previewUrl
          name
          alternativeText
          caption
        }
        description
        title
      }
      documentId
      seo {
        title
        id
        slug
        description
      }
    }
  }
`;

export const getTags: TypedDocumentNode<{ tags: ITag[] }, GetVariables> = gql`
  query GetTags {
    tags {
      documentId
      locale
      system_title
      seo {
        description
        id
        slug
        title
      }
    }
  }
`;

type GetByIdVariables = {
  documentId: string;
};

export const getArticlesByTag: TypedDocumentNode<
  { tag: ITag & { articles: IArticle[] } },
  GetByIdVariables
> = gql`
  query GetArticlesByTag($documentId: ID!) {
    tag(documentId: $documentId) {
      documentId
      locale
      system_title
      seo {
        description
        id
        slug
        title
      }
      articles {
        Hero {
          background {
            documentId
            url
            previewUrl
            name
            alternativeText
            caption
          }
          description
          title
        }
        documentId
        seo {
          description
          title
          id
          slug
        }
      }
    }
  }
`;

export const getArticle: TypedDocumentNode<
  {
    article: IArticle & {
      recommendations: IArticle[];
      tags: ITag[];
      content: IContent[];
    };
  },
  GetByIdVariables
> = gql`
  query Article($documentId: ID!) {
    article(documentId: $documentId) {
      Hero {
        background {
          documentId
          url
          previewUrl
          name
          alternativeText
          caption
        }
        description
        title
      }
      documentId
      seo {
        description
        title
        id
        slug
      }
      content {
        ... on ComponentUiGridText {
          id
          text
          width {
            id
            value
          }
        }
        ... on ComponentUiGridTextUnderImage {
          id
          image {
            documentId
            url
            previewUrl
            name
            alternativeText
            caption
            width
          }
          text
          _width: width {
            value
            id
          }
        }
        ... on ComponentUiGridTextOverImage {
          id
          image {
            documentId
            url
            previewUrl
            name
            alternativeText
            caption
            width
          }
          text
          text_position {
            id
            position
          }
          _width: width {
            id
            value
          }
        }
        ... on ComponentUiGridImage {
          id
          image {
            documentId
            url
            previewUrl
            name
            alternativeText
            caption
            width
          }
          width {
            id
            value
          }
        }
      }
      recommendations {
        Hero {
          background {
            documentId
            url
            previewUrl
            name
            alternativeText
            caption
          }
          description
          title
        }
        documentId
        seo {
          title
          id
          slug
        }
      }
      tags {
        documentId
        locale
        system_title
        seo {
          description
          id
          slug
          title
        }
      }
    }
  }
`;
