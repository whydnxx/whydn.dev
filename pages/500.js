import Container from "@/components/Commons/Container";
import Switcher from "@/components/Switcher";

export default function CustomNotFound() {
  return (
    <Container title="Opps! Something went wrong - whydn.dev">
      <Switcher />
      <div
        aria-labelledby="pageTitle"
        className="flex items-center justify-center h-screen"
      >
        <div className="p-4 space-y-4">
          <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
            <p className="font-semibold text-red-500 text-9xl dark:text-red-600">
              404
            </p>
            <div className="space-y-2">
              <h1 id="pageTitle" className="flex items-center space-x-2">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-red-500 dark:text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-xl font-medium sm:text-2xl ">
                  Oops! Something went wrong.
                </span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                The page you are looking for is temporarily unavailable.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                <a
                  href="/"
                  className="text-blue-500 hover:underline dark:text-yellow-600"
                >
                  Take me home
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
