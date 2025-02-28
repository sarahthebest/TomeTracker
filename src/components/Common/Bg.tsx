import CloudinaryImage from "../Atoms/CloudinaryImg";
import "./Bg.css";

const Bg = () => {
    return (
        <div className="clipBackground overflow-hidden absolute bg-clip-border h-fit md:h-2/3 w-full">
            <CloudinaryImage
                publicId={"image-from-rawpixel-id-13261794-jpeg_mqkivi"}
                className="w-full opacity-80 object-center"
            />
        </div>
    );
};

export default Bg;
