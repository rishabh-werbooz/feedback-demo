export interface Organization {
    id: string;
    name: string;
    title: string;
    description?: string;
    metadata? :any;
    allowed_urls?: string[];
  }
  