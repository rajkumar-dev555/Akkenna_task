import pic1 from "../photo/technology/expertise.png";
import pic2 from "../photo/technology/Comprehensive.png";
import pic3 from "../photo/technology/record.png";
import pic4 from "../photo/technology/setting.png"


const Akkenna_Technology = () => {

    const Technology = [
        {
            image: pic1,
            style: {
                backgroundColor: "#F3F0FF"
            },
            number: "01",
            style:{
                  color: "#8B40E5"
            },

            name: "Expertise"
        },
        {
            image: pic2,
            style: {
                backgroundColor: "#5800FF"
            },
            number: "02",
            style:{
                   color:"#FD346E"
            },
            name: "Comprehensive  Solutions"
        },
        {
            image: pic3,
            style: {
                backgroundColor: "#FF885A"
            },
            number: "03",
            style:{
                  color:"#FF885A",
            },
            name: "Proven Track Record"
        },
        {
            image: pic4,
            style: {
                backgroundColor: "#F3F0FF"
            },
            number: "04",
            style:{
                  Color: "#5800FF"
            },
            name: "Customized Approach"
        },

    ]



    return (
        <div>

            <div className=" bg-white ">

                <div className="  bg-white ">
                    <h1 className="font-medium  text-center  hidden  lg:flex justify-center text-3xl">Why Choose Akkenna Animations and <br /> Technology </h1>
                    <p className="text-sm  mt-5 text-center mx-auto hidden lg:flex justify-center">Begin your generative AI journey with a comprehensive consultation from a <br />
                        leading generative AI development company. </p>
                </div>

                <div className="hidden  lg:flex  justify-center items-center gap-3 pt-9 ">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    {Technology.map((data, index) => (
                        <div className=" shadow-lg ... rounded h-32 w-52  " key={index}>
                            <img src={data.image} alt="" className="h-9 bg-right-top ml-40 " style={data.style} />
                            <h1 className="mt-3 text-3xl ml-16 font-bold " style={data.style}  >{data.number}</h1>
                            <p className="font-semibold pt-4 pl-3" >{data.name}</p>
                        </div>
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <div className=" hidden lg:flex justify-center gap-20 mx-auto pt-4 pl-12 ">

                    <h1 className="text-2xl font-semibold text-[#5800FF] ">Expertise</h1>


                    <p className="w-1/2">Our team comprises experienced professionals with extensive knowledge and expertise in cloud automation services, ensuring reliable and efficient solutions tailored to your specific needs.</p>

                </div>

            </div>


            <div className="lg:hidden ">
                <div className="">
                    <h3 className="text-lg font-semibold text-center">Why Choose Akkenna Animations and Technology</h3>

                    <div className="flex gap-2 pt-4">
                        <div className="shadow-xl ... p-3 rounded-2xl flex gap-4 justify-center w-[50%]">
                            <h3 className="text-3xl text-[#8B40E5] font-medium">01</h3>
                            <h1>Expertise</h1>
                        </div>
                        <div className="shadow-xl ... p-3 rounded-2xl flex  justify-center gap-4 w-[50%]">
                            <h3 className="text-[#5800FF] text-3xl font-medium">02</h3>
                            <h1>Comprehension Solution</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Akkenna_Technology;