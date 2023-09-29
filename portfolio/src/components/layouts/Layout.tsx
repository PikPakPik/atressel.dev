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
            <main className="flex flex-col gap-32">{children}</main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Layout;