import { Navbar } from '../components/LandingPageComponents';

// Reusable styles
const heroStyle = "w-full px-2 py-24 text-white flex flex-col items-center justify-center bg-black";
const sectionStyle = "px-2 sm:px-2 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-8";
const boxStyle = "flex flex-col w-full col-span-1 my-2 bg-gray-800 p-6 rounded-lg text-center";
const titleStyle = "text-2xl font-semibold mb-4 w-full text-center";
const subheadingStyle = "text-xl font-semibold mb-2";
const textStyle = "mb-4";
const imageStyle = "w-32 h-32 bg-blue-500 mx-auto";
const missionStyle = "w-full";

export default function Test() {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white">
            <Navbar />

            <section className={heroStyle}>
                <h1 className="text-5xl font-bold mb-6 text-center">Welcome to Our Open Source Platform</h1>
                <p className="text-2xl text-center mb-12">Redefining the Way We Interact with Technology</p>
                <div className="w-64 h-64 bg-blue-500 rounded-full"></div>
            </section>

            <h2 className={titleStyle}>For Developers</h2>
            <div className={sectionStyle}>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Independence</h3>
                    <p className={textStyle}>Contribute and collaborate with developers globally.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Monetization</h3>
                    <p className={textStyle}>Simplify the process of earning from your code.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Experience</h3>
                    <p className={textStyle}>Enjoy an ad-free environment to work on.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Feedback</h3>
                    <p className={textStyle}>Get real-time feedback from users and peers.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Earning</h3>
                    <p className={textStyle}>Profit from your solutions and ideas.</p>
                    <div className={imageStyle}></div>
                </div>
            </div>

            <h2 className={titleStyle}>For Users</h2>
            <div className={sectionStyle}>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Ease of Use</h3>
                    <p className={textStyle}>Our platform is designed with simplicity in mind.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Community-Vetted Apps</h3>
                    <p className={textStyle}>All apps are vetted by our community for safety and quality.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Ad-Free and Privacy-Focused</h3>
                    <p className={textStyle}>Experience ad-free browsing and privacy-focused design.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>All in One Place</h3>
                    <p className={textStyle}>Find all your needs in one place.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>Direct Support</h3>
                    <p className={textStyle}>Get direct support from developers and community.</p>
                    <div className={imageStyle}></div>
                </div>

                <div className={boxStyle}>
                    <h3 className={subheadingStyle}>You're in Control</h3>
                    <p className={textStyle}>Have full control over your digital experience.</p>
                    <div className={imageStyle}></div>
                </div>
            </div>

            <div className={missionStyle}>
                <div className={boxStyle}>
                    <h2 className={titleStyle}>Our Mission</h2>
                    <p className={textStyle}>We're here to create a platform that benefits both developers and users, promoting open-source development and community collaboration.</p>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 py-12">
                <p className="text-lg text-center mb-4">Join us today and experience the difference.</p>
            </div>
        </div>
    );
}
