"use client";
import { useRouter } from "next/navigation";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import useAuth from "../lib/useAuth";
import { DiscountTab } from "./discountTab";
import loginLogoutHandler from "../lib/loginLogoutHandler";

export const Navbar = (props: any) => {
  const router = useRouter();
  const isLoggedIn = useAuth();
  const authToken = localStorage.getItem("authToken");

  const handleCategoryClick = () => {
    if (authToken) {
      router.push("/categories");
    } else {
      router.push("/login");
    }
  };

  const userInfoString = localStorage.getItem("userInfo") || "";
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  return (
    <div className="fixed top-0 left-0 bg-white z-10 w-full h-18">
      <div className="flex flex-col border-2 w-full gap-4 pl-7 pr-7 ">
        <div className="flex justify-end pt-2">
          <div className="flex gap-7 ">
            <p>Help</p>
            <p>Orders & Returns </p>
            {userInfo?.name && <p>Hi, {userInfo?.name}</p>}
            <button onClick={() => loginLogoutHandler(isLoggedIn, router)}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
        <div className="flex justify-between pb-2">
          <p className="text-2xl font-bold">E-COMMERCE</p>
          <div className="flex gap-6 text-1xl font-bold">
            <button onClick={handleCategoryClick}>Categories</button>
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
      <DiscountTab />
    </div>
  );
};
