import { useEffect } from 'react';

export const usePageTitle = (page: string, additionalText?: string) => {
    useEffect(() => {
        document.title = `RH Store ${additionalText ? `- ${additionalText}` : ''}`;
    }, [additionalText]);
};
