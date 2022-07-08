import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Montserrat:wght@400;700&display=swap"
            rel="style sheet"
          />
          <link rel="shortcut icon" href="/favicon/favicon_1.ico" />
          <link href="//db.onlinewebfonts.com/c/f88cd11de6d9aa48ddc14cf6181b309c?family=Nasalization" rel="stylesheet" type="text/css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
