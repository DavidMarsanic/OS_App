import { developersContent } from '../../constants';

const Developers = () => (
    <section className="bg-primary flex items-start">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mt-8">{developersContent.title}</h2>
            <ul className="text-lg text-white mt-2">
                {developersContent.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </section>
);

export default Developers;
