import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
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
                    <meta
                        name="Cybersoft Elearning"
                        content="Cybersoft Elearning | Đào tạo chuyên gia lập trình"
                    />
                    <meta
                        name="description"
                        content="Đào tạo lập trình theo dự án thực tế, lập trình Front End, lập trình Back end, FrontEnd, BackEnd, Java Web chuyên sâu, ReactJS, Angular, NodeJS, Spring MVC"
                    ></meta>
                    <meta property="og:locale" content="vi_VN"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta
                        property="og:title"
                        content="Trang chủ - CyberSoft Elearning - Đào tạo Chuyên Gia Lập Trình"
                    ></meta>
                    <meta
                        property="og:description"
                        content="Đào tạo lập trình theo dự án thực tế, lập trình Front End, lập trình Back end, FrontEnd, BackEnd, Java Web chuyên sâu, ReactJS, Angular, NodeJS, Spring MVC"
                    ></meta>
                    <meta
                        property="og:url"
                        content="https://elearning-cybersoft.vercel.app/"
                    ></meta>
                    <meta
                        property="og:site_name"
                        content="CyberSoft Elearning - Đào tạo Chuyên Gia Lập Trình"
                    ></meta>
                    <meta
                        name="twitter:card"
                        content="summary_large_image"
                    ></meta>
                    <meta
                        name="twitter:description"
                        content="Đào tạo lập trình theo dự án thực tế, lập trình Front End, lập trình Back end, FrontEnd, BackEnd, Java Web chuyên sâu, ReactJS, Angular, NodeJS, Spring MVC"
                    ></meta>
                    <meta
                        name="twitter:title"
                        content="Trang chủ - CyberSoft Elearning - Đào tạo Chuyên Gia Lập Trình"
                    ></meta>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    />
                    <link rel="shortcut icon" href="/images/icon.png" />
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
