'use client'
import { ProfileCard } from "@/components/ProfileCard";
import { SteliosRouselakis, YannisRouselakis } from "@/lib/people";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";



export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex flex-col min-h-screen gap-20 px-4 items-center justify-center">
      <ProfileCard person={YannisRouselakis} />
      <ProfileCard person={SteliosRouselakis} />
      <div
        className="fixed bottom-5 right-0 bg-gray-200 dark:bg-gray-800 flex justify-center align-middle rounded-l-2xl shadow-2xl"
      >
        <button
          onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}

          className="js-change-theme focus:outline-none w-12 h-12 p-3">
          <FontAwesomeIcon icon={theme == 'dark' ? faSun : faMoon} className="h-5 w-5" />
        </button>
      </div>
    </main>
  );
}
