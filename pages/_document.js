import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" content="Hanzi Dict" />
                    <meta
                        name="description"
                        content={`Với mong muốn có thể mang đến một công cụ tiện lợi, giúp các
                    bạn đang theo học tiếng Trung có thể nhớ được Hán tự theo
                    một cách trực quan nhất, dễ hiểu nhất, chúng mình đã mang
                    đến một bộ từ điển "lạ lùng" chưa từng có. Hanzi Dict tập
                    trung vào việc giải thích ý nghĩa của từng Hán tự, xem nó
                    được tượng hình như thế nào, được ghép từ các thành phần ra
                    sao, dùng hình ảnh để minh họa, từ đó giúp bạn học hình dung
                    được hình ảnh tượng trưng, hiểu được ý nghĩa của Hán tự, ghi
                    nhớ một cách tự nhiên mà không cần phải "học vẹt".`}
                    />
                    <meta name="robots" content="noodp,index,follow" />
                    <meta name="revisit-after" content="1 days" />
                    <meta httpEquiv="content-language" content="vi" />
                    <meta property="og:title" content="Hanzi Dict" />
                    <meta
                        property="og:description"
                        content={`Với mong muốn có thể mang đến một công cụ tiện lợi, giúp các
                    bạn đang theo học tiếng Trung có thể nhớ được Hán tự theo
                    một cách trực quan nhất, dễ hiểu nhất, chúng mình đã mang
                    đến một bộ từ điển "lạ lùng" chưa từng có. Hanzi Dict tập
                    trung vào việc giải thích ý nghĩa của từng Hán tự, xem nó
                    được tượng hình như thế nào, được ghép từ các thành phần ra
                    sao, dùng hình ảnh để minh họa, từ đó giúp bạn học hình dung
                    được hình ảnh tượng trưng, hiểu được ý nghĩa của Hán tự, ghi
                    nhớ một cách tự nhiên mà không cần phải "học vẹt".`}
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://tkpm-hanzi-dict.herokuapp.com/"
                    />
                    <meta
                        property="og:image"
                        content="https://tkpm-hanzi-dict.herokuapp.com/images/logocute.png"
                    />

                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    />
                    <link rel="shortcut icon" href="/images/logocute.png" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <script
                        async
                        defer
                        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v13.0"
                        nonce="gk6vyIjk"
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
