import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.heading}>Welcome to Our Open Source Platform</h1>
                <p className={styles.subheading}>A place for developers to contribute to open-source projects and be rewarded</p>
                <Link to="/sign-up" className={styles.ctaButton}>Sign Up</Link>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Contribute to Projects</h2>
                <p className={styles.sectionText}>Find exciting open-source projects to contribute your skills and expertise</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Earn Rewards</h2>
                <p className={styles.sectionText}>Get recognized and rewarded for your valuable contributions</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Join a Thriving Community</h2>
                <p className={styles.sectionText}>Connect with like-minded developers and collaborate on meaningful projects</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionHeading}>How It Works</h2>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <span>1</span>
                        <p>Create an account and explore projects</p>
                    </div>
                    <div className={styles.step}>
                        <span>2</span>
                        <p>Choose a project and make valuable contributions</p>
                    </div>
                    <div className={styles.step}>
                        <span>3</span>
                        <p>Get recognized and earn rewards for your contributions</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionHeading}>What Our Users Say</h2>
                <div className={styles.testimonial}>
                    <p>"This platform has opened up so many opportunities for me to contribute to meaningful projects and grow as a developer." - John Doe</p>
                </div>
                <div className={styles.testimonial}>
                    <p>"I love being part of this community. The support and collaboration are incredible!" - Jane Smith</p>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2023 Your Open Source Platform. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
