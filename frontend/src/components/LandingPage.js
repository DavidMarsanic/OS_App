import styles from '../styles/pages/LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.landingPage}>
            <header className={styles.navBar}>
                <nav>
                    {/* Your navigation bar contents */}
                </nav>
                <div className={styles.heroSection}>
                    <h1>Unlock Your Creative Potential</h1>
                    <p>Join our platform and transform your ideas into reality</p>
                    <button className={styles.ctaButton}>Get Started</button>
                </div>
            </header>

            <section className={styles.aboutUs}>
                <h2>About Us</h2>
                <p>We are a dynamic platform committed to fostering a community where individuals can express their unique talents, learn new skills, and collaborate on innovative projects.</p>
            </section>

            <section className={styles.features}>
                <h2>Platform Features</h2>
                <ul>
                    <li>Ease of use: Intuitive, user-friendly interface.</li>
                    <li>Collaboration: Work seamlessly on any project with your team.</li>
                    <li>Revenue Sharing: Earn money from your contributions to the platform.</li>
                    <li>Support: Extensive resources and community support for your projects.</li>
                </ul>
            </section>

            <section className={styles.testimonials}>
                <h2>Testimonials</h2>
                <div>
                    {/* You can add some testimonials here. It's better if you can get some real testimonials from your users */}
                    <blockquote>
                        <p>"This platform has transformed the way I work and collaborate on my projects"</p>
                        <footer>- Happy User</footer>
                    </blockquote>
                    {/* Repeat for other testimonials */}
                </div>
            </section>

            <section className={styles.joinUs}>
                <h2>Ready to Get Started?</h2>
                <p>Join our platform today and start creating!</p>
                <button className={styles.ctaButton}>Join Now</button>
            </section>

            <footer className={styles.footer}>
                {/* Your footer here */}
            </footer>
        </div>

    );
}

export default LandingPage;
