import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const cld = new Cloudinary({ cloud: { cloudName: "dw0coaeg0" } });

interface CloudinaryImageProps {
  publicId: string;
  width?: number;   
  height?: number;  
  className?: string;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({ publicId, width, height, className }) => {
  const img = cld.image(publicId).format("auto").quality("auto");

  if (width && height) {
    img.resize(auto().gravity(autoGravity()).width(width).height(height));
  }

  return <AdvancedImage cldImg={img} className={className} />;
};

export default CloudinaryImage;
