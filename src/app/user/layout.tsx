import Navbar from "@/components/layouts/navbar";
import { Context } from "../_context";
import Footer from "@/components/layouts/footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="min-h-screen">
      <Context>
        <Navbar></Navbar>
        <div className="min-h-screen">{children}</div>
        <Footer></Footer>
      </Context>
    </div>
  );
}
