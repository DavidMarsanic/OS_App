import { signUpContent } from '../../constants';

const SignUp = () => (
    <section className="bg-primary flex items-start">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mt-8">{signUpContent.title}</h2>
            <p className="text-lg text-white mt-2">{signUpContent.description}</p>
            <button className="bg-white text-primary font-semibold py-2 px-4 mt-4 rounded-full">
                {signUpContent.buttonText}
            </button>
        </div>
    </section>
);

export default SignUp;
