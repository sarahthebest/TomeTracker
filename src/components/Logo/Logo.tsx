const Logo = () => {
    return (
        <div className="logo_wrapper w-24 h-full rounded-e-full pe-2">
            <img
                src="src/assets/logo.png"
                className="h-fit w-16 ms-3  mt-2 hover:invert duration-200"
                alt="Logo image"
            />
        </div>
    );
};

export default Logo;
