import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary p-10 flex flex-col relative justify-between">
            <div className="footer_content flex gap-20">
                <div className="about flex flex-col gap-4">
                    <h3 className="heading text-2xl">About</h3>
                    <p>About TomeTracker</p>
                    <p>Contact</p>
                </div>
                <div className="user flex flex-col gap-4">
                    <h3 className="heading text-2xl">User</h3>
                    <p>Register</p>
                    <p>Shelves</p>
                </div>
                <div className="socials flex flex-col gap-4">
                    <h3 className="heading text-2xl">Socials</h3>
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
            </div>
            <img
                src="src/assets/img/logo.png"
                className="h-fit w-56  mx-auto"
                alt="Logo image"
            />
        </footer>
    );
};

export default Footer;
