export function Projects() {
  return (
    <div className="group">
      <article
        itemScope="itemscope"
        itemType="http://schema.org/CreativeWork"
        className="bg-gray-200 dark:bg-gray-800 my-2 transition-transform ease-in-out duration-300 group-hover:opacity-50 hover:opacity-important hover:transform hover:scale-110"
      >
        <a
          href={`${url}?ref=whydn.dev`}
          target="_blank"
          rel="noopener"
          className="block p-10"
        >
          <p className="text-xs tracking-widest font-light uppercase">
            {language}
          </p>
          <h3
            itemProp="name"
            className="mt-2 text-3xl font-semibold leading-tight"
          >
            {title}
          </h3>
          <p className="mt-4 text-gray-500 dark:text-gray-400">{description}</p>
        </a>
      </article>
    </div>
  );
}
