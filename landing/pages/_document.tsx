import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177530827-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
          
                gtag('config', 'UA-177530827-1');
              `
            }}
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument