interface IArticle {
  Hero: {
    background: {
      documentId: string;
      url: string;
      previewUrl: string;
      name: string;
      alternativeText: string;
      caption: string;
    };
    description: string;
    title: string;
  };
  documentId: string;
  seo: {
    title: string;
    id: string;
    slug: string;
    description: string;
  };
}

interface IImage {
  documentId: string;
  url: string;
  previewUrl: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
}

interface IWidth {
  id: string;
  value: string;
}

interface ITextPosition {
  id: string;
  position: string;
}

interface IContent {
  id: string;
  text?: string;
  width?: IWidth;
  _width?: IWidth;
  text_position?: ITextPosition;
  image?: IImage;
}

export type { IArticle, IContent };
