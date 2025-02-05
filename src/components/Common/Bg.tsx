import CloudinaryImage from "../Atoms/CloudinaryImg";
import "./Bg.css";

const Bg = () => {
    return (
        <div className="clipBackground absolute bg-clip-border h-fit md:h-2/3 w-full">
            <CloudinaryImage publicId={"shelfbg-21"} className="md:w-auto opacity-80" />
        </div>
    );
};

export default Bg;
