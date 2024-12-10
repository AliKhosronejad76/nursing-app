import ServicesDesc from "./ServicesDesc";
import ServicesOptions from "./ServicesOptions";
import NursingServiceAbout from "./NursingServiceAbout";
import ServicesTitle from "./ServicesTitle";
import ServicesCategory from "./ServicesCategory";


export default function Services(){
    return(
        <section>
            <ServicesDesc />
            <ServicesOptions />
            <NursingServiceAbout />
            <ServicesTitle />
            <ServicesCategory />
        </section>
    );
}