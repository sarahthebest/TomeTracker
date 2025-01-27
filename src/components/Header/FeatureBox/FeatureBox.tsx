import { ReactNode } from "react";
import {
    FaBookBookmark,
    FaMagnifyingGlass,
    FaUserGroup,
} from "react-icons/fa6";
import { PiNotebookDuotone } from "react-icons/pi";
import featureData from "./features.json";
import { Flex } from "antd";

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
    Note: <PiNotebookDuotone />,
};

const FeatureBox = ({ feature, icon }: FeatureBoxProps) => {
    return (
        <div
            className="featureBox text-pop flex flex-col gap-2 flex-1
         border-primary rounded-md bg-secondary border p-4 hover:brightness-110"
        >
            <div className="head heading flex place-items-center justify-between text-2xl flex-wrap">
                {feature.name}
                {icon && <div className="icon text-active">{icon}</div>}
            </div>
            <p className="text-sm">{feature.description}</p>
        </div>
    );
};

const FeaturesList = () => {
    return (
        <Flex className="featuresList flex flex-col lg:flex-row gap-4 rounded md:w-2/3 mx-auto">
            {featureData.map((feature: Feature) => (
                <FeatureBox
                    key={feature.id}
                    feature={feature}
                    icon={iconMap[feature.icon]}
                />
            ))}
        </Flex>
    );
};

export default FeaturesList;
