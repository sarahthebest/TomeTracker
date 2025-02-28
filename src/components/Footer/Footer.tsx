import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary p-10 flex flex-col relative overflow-hidden justify-between">
            <div className="footer_content flex gap-6 mx-auto pb-16 flex-wrap justify-center">
                <p>About TomeTracker</p>
                <p>Contact</p>
                <p>Register</p>
                <p>Shelves</p>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center"
                >
                    <FaGithub size={20} />
                    GitHub
                </a>
            </div>
            <img
                src="/img/logo.png"
                className="h-fit w-56  mx-auto"
                alt="Logo image"
            />
        </footer>
    );
};

export default Footer;
