import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <div className="w-full sm:max-w-[70%] mx-auto px-4 flex-grow">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
