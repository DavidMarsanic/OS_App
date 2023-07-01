import styles from '../styles/pages/LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.landing}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
            </div>

            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Unleash Your Creative Potential</h1>
                <p className={styles.heroText}>
                    We believe that every individual has unique talents. Our platform is built to help you discover and express your creativity. Join us and unlock your potential.
                </p>
                <button className={styles.ctaButtonBig}>Get Started</button>
            </section>

            <div className={styles.sectionBox}>
                <section className={styles.missionSection}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.sectionText}>
                        We strive to break down barriers to creativity. Our mission is to simplify software development, foster community collaboration, provide an excellent user experience, and champion open-source as the industry standard.
                    </p>
                    <button className={styles.ctaButton}>Learn More</button>
                </section>
            </div>

            <div className={styles.sectionBox}>
                <section className={styles.forDevelopersSection}>
                    <h2 className={styles.sectionTitle}>For Developers</h2>
                    <p className={styles.sectionText}>
                        Our mission is to make it radically easier for you to become an independent software developer. Join our community of developers to learn, share, and collaborate on innovative projects.
                    </p>
                    <button className={styles.ctaButton}>Join as a Developer</button>
                </section>
            </div>

            <div className={styles.sectionBox}>
                <section className={styles.forUsersSection}>
                    <h2 className={styles.sectionTitle}>For Users</h2>
                    <p className={styles.sectionText}>
                        Explore a wide variety of applications built by talented developers from around the world. Contribute to projects, share your ideas, and help shape the future of the Internet.
                    </p>
                    <button className={styles.ctaButton}>Join as a User</button>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;
