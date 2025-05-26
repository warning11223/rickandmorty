import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import BackBtn from './BackBtn';

type Props = {
    count: number;
    pages: number;
}

export default function FirstSection({count, pages}: Props) {
    const location = useLocation();
    return (
        <section>
            {location.pathname === '/' ? (
                <p>Have been found {count} results, with {pages} pages.</p>
            ) : (
                <DivFlex>
                    <BackBtn/>
                </DivFlex>
            )}
        </section>
    );
}

const DivFlex = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.5rem;
`;