export interface Organization {
    id: string;
    name: string;
    description?: string;
    metadata? :any;
    allowed_urls?: string[];
  }
  