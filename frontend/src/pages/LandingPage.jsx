import styles from '../style';
import {
    Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero,
} from '../components/LandingPageComponents';

const LandingPage = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}></div>
            <Hero />
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
                <Billing />
            </div>
        </div>
    </div >
);

export default LandingPage;
