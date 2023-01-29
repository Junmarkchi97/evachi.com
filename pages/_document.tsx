import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
