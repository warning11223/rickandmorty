import useLocalStorage from "./hooks/useLocalStorage.ts";
import {type RefObject, useRef, useState} from "react";
import usePageQuery from "./hooks/usePageQuery.ts";
import {Route, Routes, useLocation} from "react-router-dom";
import useWindowWidth from "./hooks/useWindowWidth.ts";
import {type DefaultTheme, ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyle, lightTheme} from "./theme";
import Header from "./components/Header";
import {DivContainer, DivSidebar, MainTag, SectionCards} from "./theme/styledTags";
import Sidebar from "./components/Sidebar";
import FirstSection from "./components/FirstSection";
import Card from "./views/Card";
import ErrorMessage from './components/ErrorMessage.tsx';
import Location from "./views/Location";
import Episode from "./views/Episode";
import Character from "./views/Character";
import Pagination from "./components/Pagination";
import ScrollToTop from "./components/ScrollTop";

function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark'),
        isDarkTheme = theme === 'dark',
        toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

    const [pageNumber, setPageNumber] = useState(0);
    const [resultCount, setResultCount] = useState(0);

    const calcPageNumber = (pages: number, count: number) => {
        setPageNumber(pages);
        setResultCount(count);
    }

    const [pageQuery, handlePageQuery] = usePageQuery();

    const location = useLocation();

    const windowWidth = useWindowWidth();
    const refContainer = useRef<HTMLDivElement>(null);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle/>

            <Header theme={theme} toggleTheme={toggleTheme}/>

            <MainTag>
                {windowWidth! > 830 ? (
                    <DivSidebar>
                        <Sidebar theme={theme as unknown as DefaultTheme}/>
                    </DivSidebar>
                ) : null}

                <DivContainer ref={refContainer}>
                    <FirstSection count={resultCount} pages={pageNumber} />

                    <SectionCards>
                        <Routes>
                            <Route path="/" element={<Card pageQuery={pageQuery} calcPageNumber={calcPageNumber} />} />
                            <Route path="character/:id" element={<Character />} />
                            <Route path="episode/:id" element={<Episode />} />
                            <Route path="location/:id" element={<Location />} />
                            <Route path="/*" element={<ErrorMessage message="Ups.. Page not found!" />} />
                        </Routes>

                        {location.pathname === '/' ?
                            <Pagination
                                pages={pageNumber}
                                pageQuery={pageQuery}
                                handlePageQuery={handlePageQuery}
                            />
                            :
                            null
                        }

                        <ScrollToTop refContainer={refContainer as unknown as RefObject<HTMLDivElement>} />
                    </SectionCards>
                </DivContainer>
            </MainTag>
        </ThemeProvider>
    )
}

export default App
