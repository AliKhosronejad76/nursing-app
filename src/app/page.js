import Banner from "./components/header/Banner";
import Services from "./components/services/Services";
import BlogSection from "./components/blogsection/BlogSection";
import OurTeam from "./components/outteam/OurTeam";
import Support from "./components/support/Support";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <BlogSection/>
      <OurTeam/>
      <Support/>
    </div>
  );
}
