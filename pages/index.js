import { BlogLanding } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { LayoutLanding } from "@/components/Layout";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <LayoutLanding>
      <div className="w-3/4" id="projects">
        <Projects />
      </div>
      <div className="mt-12 w-3/4" id="blog">
        <BlogLanding />
      </div>
      <div className="mt-14 w-3/4" id="contact">
        <Contact />
      </div>
    </LayoutLanding>
  );
}
