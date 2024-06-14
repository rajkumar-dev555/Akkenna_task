import pic from "../photo/image.png"


const Startnow = () => {
    return (
        <div>

            <div className=" mt-10 hidden lg:flex justify-center h-40  rounded-sm  " >
                <div className="  lg:w-[75%] rounded-2xl flex justify-center gap-28 py-10 lg:py-16" style={{ backgroundImage: `url(${pic})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className="lg:flex gap-24">
                        <div>

                            <h3 className="text-white ">Stay Ahead of the Curve: Implement Cloud <br /> Automation Strategies.</h3>
                        </div>
                        <div className="">

                            <button className="bg-[#A158FF] text-white w-24 h-9 rounded">StartNow</button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="lg:hidden flex  ">
                <div className="w-[135%]  h-32 " style={{ backgroundImage: `url(${pic})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className="text-center pt-3">

                    <h3 className="text-white text-center pt-5 font-medium ">Stay Ahead of the Curve: Implement Cloud <br /> Automation Strategies.</h3>
                    </div>
                    <div className=" pt-7 flex justify-center" >

                    <button className="bg-[#A158FF] text-white  h-9 rounded w-36">Start Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Startnow;   