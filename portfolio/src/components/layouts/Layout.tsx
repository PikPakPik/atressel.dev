import ThemeContextWrapper from "../ThemeContextWrapper";
import ActionBar from "./ActionBar";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <ThemeContextWrapper>
                <SpeedInsights />
                <Header />
                <main className="flex flex-col gap-32">{children}</main>
                <Footer />
                <ScrollToTop />
                <ActionBar />
            </ThemeContextWrapper>
        </>
    );
};

export default Layout;