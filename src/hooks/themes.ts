import { useEffect, useState } from "react";

type ThemeName = 'light' | 'dark' | 'fairy';

interface Theme {
    "--primary": string;
    "--secondary": string;
    "--bg": string;
    "--accent": string;
    "--border": string;
    "--text": string;
    "gradient": string;
}

export const themes: Record<ThemeName, Theme> = {
    light: {
        "--primary": "#2E236C",
        "--secondary": "#c7bdff",
        "--bg": "#17153B",
        "--accent": "#710bff",
        "--border": "rgba(254, 253, 255, 0.495)",
        "--text": "#f4e8fa",
        "gradient": "linear-gradient(to top right, #F2E2D2, #BCC1BA, #9FB7B9)",
    },
    dark: {
        "--primary": "#252422",
        "--secondary": "#FFFCF2",
        "--bg": "#FF922E",
        "--accent": "#403D39",
        "--border": "rgba(255, 255, 255, 0.495)",
        "--text": "#121212",
        "gradient": "linear-gradient(to top right, #252422, #403D39,  #FFFCF2)",
    },
    fairy: {
        "--primary": "#e5eec5",
        "--secondary": "#a2d870",
        "--bg": "#295128",
        "--accent": "#db8b97",
        "--border": "rgba(255, 255, 255, 0.495)",
        "--text": "#121212",
        "gradient": "linear-gradient(to top right, #295128, #e5eec5, #db8b97)",
    },
};

export const useTheme = () => {
    const [selectedTheme, setSelectedTheme] = useState<ThemeName>("light");

    const applyTheme = (themeName: ThemeName) => {
        const theme = themes[themeName as ThemeName];
        if (theme) {
            Object.keys(theme).forEach((key) => {
                document.documentElement.style.setProperty(key, theme[key]);
            });
        }
    };

    useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") as ThemeName) || "light";
        setSelectedTheme(savedTheme);
        applyTheme(savedTheme); 
    }, []);

    const changeTheme = (themeName: ThemeName) => {
        setSelectedTheme(themeName);
        localStorage.setItem("theme", themeName);
        applyTheme(themeName); 
    };

    return { selectedTheme, changeTheme };
};
