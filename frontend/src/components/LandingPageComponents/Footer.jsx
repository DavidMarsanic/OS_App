import { Link } from 'react-router-dom';

const footerStyle = "w-full bg-black text-white py-6 flex flex-col items-center justify-center text-center text-sm";

function Footer() {
    return (
        <footer className={footerStyle}>
            <p className="mb-2">© 2023 Our Open Source Platform. All rights reserved.</p>
            <div className="flex space-x-4">
                <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
                <Link to="/contact-us" className="hover:underline">Contact Us</Link>
            </div>
        </footer>
    );
}

export default Footer;
