import pic1 from "../photo/cloud.png"

import pic2 from "../photo/media/person.png"

const Overview = () => {
    return (
        <div>
            <div className="bg-[#E7E7FF] hidden lg:flex justify-evenly gap-32 mx-16 rounded-2xl relative  ">
                <div>
                    <img src={pic1} alt="" className="h-[55vh] w-[25vw] overflow-y-visible absolute top-[-20px] left-10" />

                </div>

                <div className=" mt-9 float-right px-32 pr-7">
                    <h1 className="font-medium text-3xl ">Cloud Automation Service <br />Overview</h1>
                    <div className=" mt-5 w-[35vw] text-sm">
                        <p className="">The ever-expanding consumer demands and evolving IT landscape necessitate the adoption of automation across organizations of all sizes.
                            We recognize this imperative and offer comprehensive cloud automation services to address the evolving needs of businesses in the digital age.</p>
                        <p className="mt-5 ">
                            Automation plays a pivotal role in streamlining manual tasks, alleviating operational burdens, and enhancing maintenance efficiency.
                            With Akkenna's expertise in automation, organizations can optimize their workflows, reduce manual errors, and improve overall productivity.</p>
                        <div className="flex gap-2  mt-4 font-medium">

                            <h6 className=" ">Learn More </h6>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className=" lg:hidden flex shadow-lg ... p-5 rounded-2xl  pl-3 w-[100%]">
                    <img src={pic2} alt="" />
                    <div className="pl-1">
                        <p>About us</p>
                        <h2 className="font-medium text-2xl">Cloud Automation Service Overview</h2>
                    </div>
                    <div className="w-4 pt-8 pl-4">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Overview;