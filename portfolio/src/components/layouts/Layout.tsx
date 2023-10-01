import ThemeContextWrapper from "../ThemeContextWrapper";
import Footer from "./Footer";
import Header from "./Header";
import LangageMenu from "./LangageMenu";
import ScrollToTop from "./ScrollToTop";
import ThemeSwitch from "./ThemeSwitch";


type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <ThemeContextWrapper>
                <Header />
                <main className="flex flex-col gap-32">{children}</main>
                <Footer />
                <LangageMenu />
                <ScrollToTop />
                <ThemeSwitch />
            </ThemeContextWrapper>
        </>
    );
};

export default Layout;