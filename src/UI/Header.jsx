import Search from "./Search";
import Logo from "./Logo";
import AddBooks from "../pages/AddBooks";

function Header() {
  return (
    <div className="flex border-b-2 items-center justify-between py-4 bg-primary w-full">
      <Logo className="w-1/5" />
      <Search className="w-3/5" />
      <AddBooks className=" w-1/5 flex justify-end" />
    </div>
  );
}

export default Header;
