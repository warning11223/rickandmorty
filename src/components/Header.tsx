import styled, {type DefaultTheme} from 'styled-components';
import logo from '../img/logo.webp';
import lightMoon from '../img/light-moon.svg';
import darkMoon from '../img/dark-moon.svg';
import useWindowWidth from '../hooks/useWindowWidth';
import ToggleNav from './ToggleNav';
import {Link} from "react-router-dom";

type Props = {
    theme: string;
    toggleTheme: () => void;
}

export default function Header({theme, toggleTheme}: Props) {
    const windowWidth = useWindowWidth();
    return (
        <HeaderTag>
            <Link to="/">
                <img src={logo} alt="Rick and Morty logo"/>
            </Link>

            <DivFlex>
                <button onClick={toggleTheme}>
                    <img src={theme === 'dark' ? darkMoon : lightMoon} alt="Theme"/>
                </button>

                {windowWidth! < 830 ? (
                        <ToggleNav theme={theme as unknown as DefaultTheme}/>
                    ) :
                    null
                }
            </DivFlex>
        </HeaderTag>
    );
}

const HeaderTag = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem 3rem;
    background-color: var(--bg);
    z-index: 98;
    box-shadow: var(--shadow);

    img {
        width: 10rem;
    }

    button {
        img {
            width: 1.5rem;
        }
    }

    @media screen and (max-width: 830px) {
        padding: 1rem;
    }
`;

const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;