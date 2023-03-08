import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    // <div className="py-4 px-8 flex flex-col min-h-screen">
    //   <Header />
    //   <Outlet />
    // </div>
    <>
      <div className="flex flex-col mt-4 mx-4">
        <Header />
      </div>
      <div className="mt-4 border-t"></div>
      <div className="py-4 px-8 flex flex-col min-h-screen max-w-4xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
