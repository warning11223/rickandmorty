import styled, {type DefaultTheme} from 'styled-components';
import { NavMobile, SpanSrOnly } from '../theme/styledTags';
import IconClose from '../img/icon-close.svg';
import IconHamburger from '../img/icon-hamburger.svg';
import { useState, useRef } from 'react';
import Sidebar from './Sidebar';

type Props = {
    theme: DefaultTheme;
}

export default function ToggleNav({ theme }: Props) {
    const [expanded, setExpanded] = useState(false),
        handleToggle = () => setExpanded(!expanded);

    const navbarId = "mobile-navbar";
    const refNavbar = useRef<HTMLElement>(null);

    return(
        <>
            <ButtonToggle
                theme={theme}
                aria-controls={navbarId}
                aria-expanded={expanded}
                onClick={handleToggle}
            >
                <SpanSrOnly>Menu</SpanSrOnly>
            </ButtonToggle>

            <NavMobile id={navbarId} ref={refNavbar} data-visible={expanded}>
                <Sidebar theme={theme} />
            </NavMobile>
        </>
    );
}

interface ButtonToggleProps {
   themeMode?: string;
}

const ButtonToggle = styled.button<ButtonToggleProps>`
   display: block;
   background: transparent;
   background-image: url( ${IconHamburger} );
   background-repeat: no-repeat;
   background-position: center;
   width: 1.5rem;
   aspect-ratio: 1;
   z-index: 2000;
   filter: ${props => props.themeMode !== 'dark' ? 'brightness(0)' : null};

   &[aria-expanded="true"] {
      background-image: url( ${IconClose} );
   }
`;
