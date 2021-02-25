import Container from "../Commons/Container";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { NavigationSecondary } from "../Navigation";
import Switcher from "../Switcher";

export function LayoutBlogDetail({ children, frontMatter }) {
  const {
    title,
    slug,
    excerpt,
    coverImage,
    readingTime,
    publishedDate,
    updatedDate,
  } = frontMatter;

  return (
    <Container
      title={`${title} - whydn`}
      description={excerpt}
      image={`https://whydn.dev${coverImage}`}
      date={new Date(publishedDate).toISOString()}
      type="article"
    >
      <Switcher />
      <NavigationSecondary />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="Lee Robinson"
              height={24}
              width={24}
              src="/profile.svg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {"whydn / "}
              {format(parseISO(publishedDate), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {readingTime.text}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="mt-8"></div>
      </article>
    </Container>
  );
}
