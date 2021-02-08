import PropTypes from "prop-types";

export function Projects(props) {
  return (
    <div className="group">
      <article
        itemScope="itemscope"
        itemType="http://schema.org/CreativeWork"
        className="bg-gray-800 my-2 transition-all ease-in-out duration-300 group-hover:opacity-50 hover:opacity-important hover:transform hover:scale-110"
      >
        <a href="#" target="_blank" rel="noopener" className="block p-10">
          <p className="text-xs text-white tracking-widest font-light uppercase">
            JavaScript
          </p>
          <h3
            itemProp="name"
            className="text-white mt-2 text-3xl font-semibold leading-tight"
          >
            Browserstore.js
          </h3>
          <p className="mt-4 text-gray-400">
            Persist data into various browser-based storage systems.
          </p>
        </a>
      </article>
      <article
        itemScope="itemscope"
        itemType="http://schema.org/CreativeWork"
        className="bg-gray-800 my-2 transition-all ease-in-out duration-300 group-hover:opacity-50 hover:opacity-important hover:transform hover:scale-110"
      >
        <a href="#" target="_blank" rel="noopener" className="block p-10">
          <p className="text-xs text-white tracking-widest font-light uppercase">
            JavaScript
          </p>
          <h3
            itemProp="name"
            className="text-white mt-2 text-3xl font-semibold leading-tight"
          >
            Browserstore.js
          </h3>
          <p className="mt-4 text-gray-400">
            Persist data into various browser-based storage systems.
          </p>
        </a>
      </article>
    </div>
  );
}

Projects.propTypes = {
  data: PropTypes.array,
};
