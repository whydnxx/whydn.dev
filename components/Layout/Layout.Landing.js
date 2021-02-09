import { Intro } from "@/components/Intro";
import { Navigation } from "@/components/Navigation";

export function LayoutLanding({ children }) {
  return (
    <>
      <div className="flex flex-row h-screen">
        {/* Side Content */}
        <div className="w-5/12">
          <div className="flex flex-col justify-between mx-auto w-full h-screen px-8 py-20 pl-20">
            <Intro />
            <Navigation />
          </div>
        </div>
        {/* Scrollable Content */}
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            <div className="container">
              <div className="inline-flex flex-col items-center w-full mx-auto py-20">
                {children}
                <div className="mt-10 text-center text-gray-300">
                  <p className="text-sm">
                    Design by &nbsp;
                    <a
                      href="https://dribbble.com/NicolasMzrd?ref=whydn.dev"
                      target="_blank"
                      rel="noopener"
                      className="underline"
                    >
                      Nicolas Meuzard
                    </a>
                    .
                  </p>
                  <p className="text-sm">
                    Powered by &nbsp;
                    <a
                      href="https://nextjs.org?ref=whydn.dev"
                      target="_blank"
                      rel="noopener"
                      className="underline"
                    >
                      Next.js
                    </a>
                    &nbsp;&&nbsp;
                    <a
                      href="http://tailwindcss.com?ref=whydn.dev"
                      target="_blank"
                      rel="noopener"
                      className="underline"
                    >
                      Tailwind.css
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 left-0 z-20 w-full h-16 pointer-events-none bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="fixed bottom-0 left-0 z-20 w-full h-16 pointer-events-none bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
    </>
  );
}
