import { themes, useTheme } from "../../hooks/themes";

const ThemePicker = () => {
    const { selectedTheme, changeTheme } = useTheme();

    return (
        <div className="themeWrapper">
            <h2>Select new theme</h2>
            <div className="themes">
                {Object.keys(themes).map((themeName) => (
                    <div
                        key={themeName}
                        onClick={() => changeTheme(themeName as 'light' | 'dark' | 'fairy')} 
                        className={`themeCircle ${selectedTheme === themeName ? "selected" : ""}`}
                        style={{ background: themes[themeName as 'light' | 'dark' | 'fairy'].gradient }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ThemePicker;
