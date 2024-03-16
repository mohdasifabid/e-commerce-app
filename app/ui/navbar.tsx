import { FaSearch, FaShoppingCart } from "react-icons/fa";
export const Navbar = (props: any) => {
  return (
    <div className="flex flex-col border-2 w-screen gap-4 pl-7 pr-7">
      <div className="flex justify-end pt-2">
        <div className="flex gap-7 ">
          <p>Help</p>
          <p>Orders & Returns </p>
          <p>Hi, John</p>
        </div>
      </div>
      <div className="flex justify-between pb-2">
        <p className="text-2xl font-bold">E-COMMERCE</p>
        <div className="flex gap-6 text-1xl font-bold">
          <button>Categories</button>
          <button>Sale</button>
          <button>Clearance</button>
          <button>New Stock</button>
          <button>Trending</button>
        </div>
        <div className="flex gap-4">
          <button>
            <FaSearch className="text-xl " />
          </button>
          <button>
            <FaShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
