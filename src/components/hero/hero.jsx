import heropic from "../photo/hero.png"
const Hero = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-200 to-blue-600 ... h-[56vh]  lg:flex  lg:w-[100%] w-[100%] lg:justify-between "
            // style={{
            //     background:`url(${heropic}),linear-gradient(to right, red , yellow)`,
            // }}
            >


                <div className="lg:pl-60 pl-3 ">
                    <h1 className="text-white font-bold text-3xl lg:mt-28 ">Optimize Your Workflow <br /> with Cloud Automation <br /> Services</h1>
                    <p className="text-sm text-white mt-5">Transform Your Cloud Infrastructure with Automated Processes. Explore Our <br />Comprehensive Suite of Cloud Automation Services!</p>
                    <button className="bg-white text-black w-32 rounded h-9 text-center text-sm mt-5 ">Exploer Now</button>
                </div>

                <div>
                    <img src={heropic} alt="" className="h-[50vh] hidden lg:flex  pr-20 mt-11" />
                </div>

                <div className="lg:hidden flex justify-end pr-7 ">
                    <div>
                        <img src={heropic} alt="" className="h-32 w-56 " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;