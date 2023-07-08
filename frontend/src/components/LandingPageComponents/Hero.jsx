import { heroContent } from '../../constants';

const Hero = () => (
    <section className="bg-primary flex items-start">
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mt-8">{heroContent.title}</h1>
            <p className="text-lg text-white mt-2">{heroContent.subtitle}</p>
            <p className="text-lg text-white mt-2">{heroContent.description}</p>
            <button className="bg-white text-primary font-semibold py-2 px-4 mt-4 rounded-full">
                {heroContent.buttonText}
            </button>
        </div>
    </section>
);

export default Hero;
