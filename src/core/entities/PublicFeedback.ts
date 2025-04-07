export interface PublicFeedbackTypes {
    form?: {
        title?: string;
        description?: string;
        // theme: string;
    },
    config?: {
        primaryColor?: string;
        heading?: {
            ideas?: string,
            announcement?: string,
            roadMap?:string,
        };

    }
}