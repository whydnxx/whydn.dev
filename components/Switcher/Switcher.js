import { useTheme } from "next-themes";
import { useState } from "react";

export default function Switcher() {
  const [isBounce, doBounce] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    doBounce(true);
    setTimeout(() => doBounce(false), 400);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        className="fixed block right-1 md:right-3 lg:right-10 xl:right-14 w-4 animate-swing origin-top cursor-pointer z-20"
        onClick={() => changeTheme()}
      >
        <div
          className={`${
            isBounce ? "h-44" : "h-40"
          } border-dotted border-l-2 border-yellow-600 m-0 p-0 transition-all ease-in-out duration-500`}
        />
        <div className="w-4 h-4 rounded-full m-0 p-0 bg-yellow-600 relative -left-2" />
      </div>
    </>
  );
}
