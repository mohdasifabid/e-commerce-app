import { DiscountBar } from "./discountBar";
import { Navbar } from "./navbar";

const layoutChildrenStyle: any = { top: "144px", position: "relative" };
export const Layout = ({ children }: any) => {
  return (
    <div className="w-full bg-white">
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center bg-white p-4" style={layoutChildrenStyle}>{children}</div>
    </div>
  );
};
