export type WordPressPage = {
    id: number;
    parent?: number;
    title: {
        rendered: string;
    }
    content: {
        rendered: string;
    }
}