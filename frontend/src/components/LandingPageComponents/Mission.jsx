import { missionContent } from '../../constants';

const Mission = () => (
    <section className="bg-primary flex items-start">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mt-8">{missionContent.title}</h2>
            <p className="text-lg text-white mt-2">{missionContent.subheading}</p>
            <ul className="text-white mt-2">
                {missionContent.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </section>
);

export default Mission;
