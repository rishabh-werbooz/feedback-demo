export interface Organization {
    id: string;
    name: string;
    description?: string;
    account_id: string;
    metadata?: Record<string, any>;
    allowed_url?: string[];
    created_at: string;
    updated_at: string;
  }
  