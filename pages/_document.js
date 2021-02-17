import Document, { Html, Head, Main, NextScript } from "next/document";
import site from "@/config/site";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="icon" href={site.assets.favicon} type="image/png" />
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
