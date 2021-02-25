import NextLink from "next/link";

export function NavigationSecondary() {
  return (
    <>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 md:mt-0 mx-auto bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-60">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div>
          <span className="text-4xl uppercase">whydn.</span>
        </div>
        <div>
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
          </NextLink>
          <NextLink href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
          </NextLink>
          <NextLink href="/about">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
          </NextLink>
        </div>
      </nav>
    </>
  );
}
