import Link from "next/link";

export function NavigationPrimary() {
  return (
    <nav className="text-gray-500 text-sm font-bold uppercase hidden md:block">
      <ul className="flex flex-col xl:text-lg">
        <li className="my-2">
          <Link href="#projects">
            <a className="inline-flex items-center transition-all ease-in-out duration-200 group hover:text-gray-900 dark:hover:text-white">
              <span className="inline-block w-12 h-px mr-4 -mt-px bg-gray-500 group-hover:w-24 group-hover:bg-gray-900 dark:group-hover:bg-white transition-all duration-300 ease-in-out" />
              Projects
            </a>
          </Link>
        </li>
        <li className="my-2">
          <Link href="/blog">
            <a className="inline-flex items-center transition ease-in-out duration-200 group hover:text-gray-900 dark:hover:text-white">
              <span className="inline-block w-12 h-px mr-4 -mt-px bg-gray-500 group-hover:w-24 group-hover:bg-gray-900 dark:group-hover:bg-white transition-all duration-300 ease-in-out" />
              Blog
            </a>
          </Link>
        </li>
        <li className="my-2">
          <Link href="/about">
            <a className="inline-flex items-center transition ease-in-out duration-200 group hover:text-gray-900 dark:hover:text-white">
              <span className="inline-block w-12 h-px mr-4 -mt-px bg-gray-500 group-hover:w-24 group-hover:bg-gray-900 dark:group-hover:bg-white transition-all duration-300 ease-in-out" />
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
