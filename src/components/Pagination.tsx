import styled from 'styled-components';

type Props = {
    pages: number;
    pageQuery: number;
    handlePageQuery: (e: any) => void;
}

export default function Pagination({ pages, pageQuery, handlePageQuery }: Props) {
    let numbers = Array.from({length: pages}, (_, i) => i + 1);
    const countPag = 6;

    if(numbers.length > countPag) {
        const idx = pageQuery <= 3 ? 0 : pageQuery - 3;
        numbers = numbers.slice(idx, idx + countPag);
    }

    return (
        <DivPagination>

            {pageQuery > countPag - 2 ?
                <button value="1"  onClick={handlePageQuery}>«</button>
                : null
            }

            {numbers.map(numb =>
                <button
                    value={numb}
                    onClick={handlePageQuery}
                    key={numb}
                    className={numb === pageQuery ? 'active' : ""}
                >
                    {numb}
                </button>
            )}


            {pages > countPag && pageQuery < pages - (countPag - 3) ?
                <button value={pages}  onClick={handlePageQuery}>»</button>
                : null
            }

        </DivPagination>
    );
}

const DivPagination = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: .8rem;
   margin-top: 2rem;

   button {
      padding: .4rem .6rem;
      border-radius: 1rem;
      border: var(--border);
      background: var(--bg-2);
      color: var(--txtColor);
      transition: .5s ease;

      &:hover {background: var(--dark-green); }

      &.active {
         background: var(--dark-green);
         color: #fff;
      }
   }
`;