import PropTypes from "prop-types";

export function Projects(props) {
  const { isLoading, data } = props;

  if (isLoading) {
    return <h1>Loading ..</h1>;
  }

  return (
    <div className="group">
      {data.viewer.pinnedItems.nodes.map((data, index) => {
        return (
          <article
            key={index}
            itemScope="itemscope"
            itemType="http://schema.org/CreativeWork"
            className="bg-gray-200 dark:bg-gray-800 my-2 transition-transform ease-in-out duration-300 group-hover:opacity-50 hover:opacity-important hover:transform hover:scale-110"
          >
            <a
              href={`${data.url}?ref=whydn.dev`}
              target="_blank"
              rel="noopener"
              className="block p-10"
            >
              <p className="text-xs tracking-widest font-light uppercase">
                {data.primaryLanguage.name}
              </p>
              <h3
                itemProp="name"
                className="mt-2 text-3xl font-semibold leading-tight"
              >
                {data.name}
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                {data.description}
              </p>
            </a>
          </article>
        );
      })}
    </div>
  );
}

Projects.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
};
