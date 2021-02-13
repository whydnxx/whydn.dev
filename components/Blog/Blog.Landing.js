import DateFormatter from "@/utils/dateFormatter";
import PropTypes from "prop-types";

export function BlogLanding({ posts }) {
  return (
    <div className="flex flex-wrap justify-between group">
      {posts.map((post) => {
        return (
          <article
            itemScope="itemscope"
            itemType="http://schema.org/CreativeWork"
            className="flex-none my-1 w-full lg:max-w-lg xl:max-w-xl bg-gray-800 transition-all ease-in-out duration-300 group-hover:opacity-50 hover:opacity-important hover:transform hover:scale-110"
          >
            <a href="#" target="_blank" rel="noopener" className="block p-10">
              <p className="text-base font-normal text-gray-400 lg:text-sm">
                {DateFormatter(post.date)}
              </p>
              <h2
                itemProp="name"
                className="text-white mt-2 text-4xl font-semibold leading-tight lg:text-2xl"
              >
                {post.title}
              </h2>
              <p className="mt-4 text-gray-400 lg:text-sm">{post.excerpt}</p>
            </a>
          </article>
        );
      })}
    </div>
  );
}

BlogLanding.propTypes = {
  posts: PropTypes.array.isRequired,
};
