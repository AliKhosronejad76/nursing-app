import Banner from "./components/header/Banner";
import Services from "./components/services/Services";
import BlogSection from "./components/blogsection/BlogSection";
import OurTeam from "./components/outteam/OurTeam";
import Support from "./components/support/Support";
import CustomersMessage from "./components/customersmessages/CustomersMessage";
import Customers from "./components/customers/Customers";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <BlogSection/>
      <OurTeam/>
      <Support/>
      <CustomersMessage/>
      <Customers/>
    </div>
  );
}
