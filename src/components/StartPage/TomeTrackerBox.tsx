import { Space } from "antd";

const TomeTrackerBox = () => {
    const listItems = [
        { text: "Find your next read," },
        { text: "Track your progress reading your favorite books," },
        { text: "Get personalized recommendations," },
        { text: "Join a community of readers," },
    ];

    return (
        <div className="TomeTrackerBox h-72 rounded bg-gradient-to-b from-secondary w-full md:w-2/3 mx-auto relative flex justify-between items-start">
            <img
                src="/img/tomes.png"
                alt=""
                className="w-40 md:w-1/3 absolute -top-10"
            />
            <img
                src="/img/stars.png"
                className="object-contain hidden md:flex top-0 right-4 h-32 absolute"
                alt=""
            />
            <div className="CTA ml-auto md:mr-20 text-left p-8 lg:pe-16 relative">
                <Space direction="vertical">
                    <h1 className="heading text-4xl mb-1 text-pop text-end lg:text-start">
                        TomeTracker
                    </h1>
                    <ul className="flex flex-col gap-4 mt-2">
                        {listItems.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 200 200"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <path
                                        fill="rgba(255, 212, 248, 1)"
                                        d="M100 0c3.395 53.76 46.24 96.605 100 100-53.76 3.395-96.605 46.24-100 100-3.395-53.76-46.24-96.605-100-100C53.76 96.605 96.605 53.76 100 0Z"
                                    ></path>
                                </svg>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </Space>
            </div>
        </div>
    );
};

export default TomeTrackerBox;
