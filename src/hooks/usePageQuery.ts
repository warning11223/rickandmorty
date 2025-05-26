import { useState, type ChangeEvent } from 'react';

const usePageQuery = (): [number, (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void] => {
    const [pageQuery, setPageQuery] = useState<number>(1);

    const handlePageQuery = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void =>
        setPageQuery(parseInt(e.target.value));

    return [pageQuery, handlePageQuery];
};

export default usePageQuery;