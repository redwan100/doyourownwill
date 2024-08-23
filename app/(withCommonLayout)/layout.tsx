import { ReactNode } from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
