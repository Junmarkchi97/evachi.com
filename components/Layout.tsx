import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode | ReactNode[];
};

function Layout({ children }: Props) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
