export default function Title({ title }){
    return(
        <div className=" yekanbakhFat flex justify-evenly items-center my-16 text-gray-700 px-4 lg:px-20">
            <div className="w-[35%] h-[2px] bg-gray-400"></div>
            <h6 className="text-2xl g:text-xl text-center">{ title }</h6>
            <div className="w-[35%] h-[2px] bg-gray-400"></div>

        </div>
    );
}