import Document, { Html, Head, Main, NextScript } from "next/document";
import site from "@/config/site";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="icon" href={site.assets.favicon} type="image/png" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/default.min.css"
          ></link>
        </Head>
        <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
