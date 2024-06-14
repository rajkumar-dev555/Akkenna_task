import pic1 from "../photo/automationservies-pic/dollar.png";
import pic2 from "../photo/automationservies-pic/Innovation.png";
import pic3 from "../photo/automationservies-pic/setting.png";
import pic4 from "../photo/automationservies-pic/Devpos.png"

const Automation_servies = () => {

    const automationservies = [
        {
            image: pic1,
            name: "Cost Efficiency",
            content: "We help build and manage a team of world-class developers to bring your vision to life"
        },
        {
            image: pic2,
            name: "Accelerated Innovation",
            content: "We help build and manage a team of world-class developers to bring your vision to life"
        },
        {
            image: pic3,
            name: "Enhanced Control",
            content: "We help build and manage a team of world-class developers to bring your vision to life"
        },
        {
            image: pic4,
            name: "Streamlined DevOps Implementation",
            content: "We help build and manage a team of world-class developers to bring your vision to life"
        },

    ]



    return (
        <div>
            <div className="hidden lg:flex px-60">
                <div className="mt-8  ">

                    <h1 className="font-medium text-3xl text-center">Benefits of Cloud Automation Services</h1>
                    <p className="text-sm text-center font-light">Cloud automation services offer a myriad of advantages for businesses, including</p>

                    <div className="mt-10 flex justify-center gap-5 pb-8">
                        {automationservies.map((data, index) => (
                            <div className="flex flex-col justify-center items-center" key={index} style={{ borderStyle: "solid 1px" }} >
                                <img src={data.image} alt="" className="h-10 bg-center ... outline outline-offset-2 outline-1  rounded-full p-2" />
                                <h6 className="text-slate-950 text-center mt-5 font-semibold">{data.name}</h6>
                                <p className="text-sm w-[16vw] text-center mt-3">{data.content}</p>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className=" pt-5">
                <div></div>
                <div className="lg:hidden ">
                    <h1 className="font-medium text-2xl text-center">Benefits of Cloud Automation Services</h1>

                    <div className="grid grid-cols-2  px-1 pt-4">
                        {automationservies.map((data, index) => (
                            <div className="px-4  py-5 shadow-lg ... rounded-2xl h-24 flex justify-center gap-5" key={index}>
                                <img src={data.image} alt="" className="h-8  outline outline-offset-2 outline-1  rounded-full " />
                                <p className="text-sm font-medium" >{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Automation_servies