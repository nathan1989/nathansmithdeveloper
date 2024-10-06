import type { WordPressPage } from "./fetchPages.types";

export const fetchPages = async ({parent}: {parent?: number} = {}): Promise<WordPressPage[]> => {
    const url = new URL(`${import.meta.env.VITE_WP_API}/wp-json/wp/v2/pages`)
    url.searchParams.set('order', 'asc');
    url.searchParams.set('per_page', '100');
    if(parent){
        url.searchParams.set('parent', parent.toString())
    }
    const res = await fetch(url);
    const pages = await res.json();
    return pages
}