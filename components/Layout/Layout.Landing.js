import { Intro } from "@/components/Intro";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import Switcher from "@/components/Switcher";

export function LayoutLanding({ children }) {
  return (
    <>
      <Switcher />
      <div className="flex flex-col md:flex-row md:h-screen">
        {/* Side Content */}
        <div className="w-full md:w-5/12">
          <div className="flex flex-row justify-between mx-auto w-full px-8 py-20 md:h-screen md:pl-20 md:flex-col lg:py-14">
            <Intro />
            <Navigation />
          </div>
        </div>
        {/* Scrollable Content */}
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 md:overflow-y-scroll">
            <div className="container">
              <div className="inline-flex flex-col items-center w-full mx-auto md:py-20 lg:py-14">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 left-0 z-20 w-full h-16 pointer-events-none bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent"></div>
        <div className="fixed bottom-0 left-0 z-20 w-full h-16 pointer-events-none bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>
    </>
  );
}
