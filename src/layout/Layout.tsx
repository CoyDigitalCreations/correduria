import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Header />
            <main className="grow w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;