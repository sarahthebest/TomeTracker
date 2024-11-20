import { ReactNode } from "react";
import { FaStar } from "react-icons/fa";
import {
    FaBookBookmark,
    FaMagnifyingGlass,
    FaUserGroup,
} from "react-icons/fa6";
import featureData from "./features.json";

interface Feature {
    id: string;
    name: string;
    description: string;
    icon: string;
}

interface FeatureBoxProps {
    feature: Feature;
    icon?: ReactNode;
}

const iconMap: { [key: string]: ReactNode } = {
    Save: <FaBookBookmark />,
    Discover: <FaMagnifyingGlass />,
    Share: <FaUserGroup />,
    Personalize: <FaStar />,
};

const FeatureBox = ({ feature, icon }: FeatureBoxProps) => {
    return (
        <div
            className="featureBox text-accent flex flex-col gap-2
         border-primary rounded-md bg-bg border w-72 p-4 hover:brightness-110"
        >
            <div className="head heading flex place-items-center justify-between text-2xl flex-wrap">
                {feature.name}
                {icon && <div className="icon">{icon}</div>}
            </div>
            <p className="text-sm">{feature.description}</p>
        </div>
    );
};

const FeaturesList = () => {
    return (
        <div className="featuresList flex flex-row gap-4 rounded place-content-center">
            {featureData.map((feature: Feature) => (
                <FeatureBox
                    key={feature.id}
                    feature={feature}
                    icon={iconMap[feature.icon]}
                />
            ))}
        </div>
    );
};

export default FeaturesList;
