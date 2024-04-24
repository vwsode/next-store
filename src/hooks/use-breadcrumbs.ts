import { useCallback, useEffect } from 'react';
import { usePageTitle } from './use-page-title';

export const useBreadcrumbs = (page: string) => {
    usePageTitle(page);

    const getDefaultTextGenerator = useCallback(() => page, [page]);
    const getTextGenerator = useCallback((param: string) => ({}[param]), []);

    useEffect(() => {
        const lastCrumb = document.querySelector('.last-crumb') as HTMLElement;

        if (lastCrumb) {
            lastCrumb.textContent = page;
        }
    }, [page]);

    return { getTextGenerator, getDefaultTextGenerator };
};
