import Footer from "@/components/Footer";
import Switcher from "@/components/Switcher";
import Container from "@/components/Commons/Container";

export function LayoutBlog({ children }) {
  return (
    <Container>
      <Switcher />
      <article
        className="container flex min-h-screen mx-auto max-w-screen-md
       bg-red-500"
      >
        <div className="my-2">
          <h1>
            Everything I Know About Style Guides, Design Systems, and Component
            Libraries
          </h1>
        </div>
      </article>
      <div className="my-5">
        <Footer />
      </div>
    </Container>
  );
}
