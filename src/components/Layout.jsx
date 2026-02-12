import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative flex flex-col font-sans text-gray-100 overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-16 relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
