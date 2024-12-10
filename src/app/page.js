import Banner from "./components/header/Banner";
import Services from "./components/services/Services";
import BlogSection from "./components/blogsection/BlogSection";
import OurTeam from "./components/outteam/OurTeam";
import Support from "./components/support/Support";
import Customers from "./components/customers/Customers";
import dynamic from "next/dynamic";
const DynamicCustomersMessage = dynamic(()=> import("./components/customersmessages/CustomersMessage"
),{ssr:false});

export default function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <BlogSection/>
      <OurTeam/>
      <Support/>
      <DynamicCustomersMessage/>
      <Customers/>
    </div>
  );
}
