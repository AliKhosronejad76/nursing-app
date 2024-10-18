import Title from "../title/Title";
import MultipleSlider from "../module/MultipleSlider";



const data = [
    {img:"/img/customers/1.jpg"},
    {img:"/img/customers/2.jpg"},
    {img:"/img/customers/3.jpg"},
    {img:"/img/customers/4.jpg"},
    {img:"/img/customers/5.jpg"},
    {img:"/img/customers/6.jpg"},
    {img:"/img/customers/7.jpg"},
    {img:"/img/customers/8.jpg"},
];

export default function Customers(){
    return(
        <section className="px-4 my-20">
            <MultipleSlider data={data}/>
        </section>
    );
}



<Title title="رخی از مشتریان سازمانی"/>