export default function Footer() {
  return (
    <div className="text-center text-gray-300 lg:mt-10">
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
  );
}
