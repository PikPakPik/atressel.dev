import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Layout;