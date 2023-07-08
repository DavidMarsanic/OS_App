import { usersContent } from '../../constants';

const Users = () => (
    <section className="bg-primary flex items-start">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mt-8">{usersContent.title}</h2>
            <ul className="text-lg text-white mt-2">
                {usersContent.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </section>
);

export default Users;
