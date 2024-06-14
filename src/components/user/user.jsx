


const User = () => {
    return (

        <div>
            <div className=" justify-center lg:flex hidden bg-gradient-to-r from-violet-600 to-violet-900">
                <div className="  ">
                    <div className="">
                        <h1 className="text-3xl font-medium text-center text-white pt-7">Get an Idea? Let’s Talk</h1>
                    </div>
                    <div>
                        <p className="text-sm w-1/2 text-center  mx-auto text-slate-300 pt-2">Do you have a project in mind? Got a story to tell the world? Or just want to say hello? Shoot us an email or use the contact form below. We will revert in no time.</p>

                    </div>

                    <div className="flex justify-center gap-16 mx-auto  pt-8  ">
                        <div className="w-[27%] text-white  ">
                            <div className=" rounded-lg py-1  mb-3  bg-gradient-to-r from-purple-700 to-purple-700">
                                <p className="text-sm p-1 pl-4">Enter your Name</p>
                            </div>
                            <div className=" rounded-lg py-1 mb-3  bg-gradient-to-r from-purple-700 to-purple-700 ">
                                <p className="text-sm p-1 pl-4 ">Enter your Mobile Number</p>
                            </div>
                            <div className=" rounded-lg py-1 mb-3 bg-gradient-to-r from-purple-700 to-purple-700 ">
                                <p className="text-sm p-1 pl-4 ">Enter your Company Name</p>
                            </div>
                        </div>
                        <div className="text-white w-[27%]">
                            <div className=" rounded-lg py-1 flex justify-between mb-3 bg-gradient-to-r from-purple-700 to-purple-700">
                                <p className="text-sm p-1 pl-4">Enter your E-Mail ID</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </div>
                            <div className=" flex justify-between  rounded-lg py-1 mb-3  bg-gradient-to-r from-purple-700 to-purple-700">
                                <p className="text-sm p-1 pl-4" >What service you want from us?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </div>
                            <div className=" rounded-lg py-1 mb-3 bg-gradient-to-r from-purple-700 to-purple-700">
                                <p className="text-sm p-1 pl-4">Select your Budget Range</p>
                            </div>
                        </div>


                    </div>
                    <div className=" rounded-lg py-1 pb-5 w-[60%] ml-[20%]   bg-gradient-to-r from-purple-700 to-purple-700">
                        <p className="text-sm p-3 text-white pl-6">Type your Message</p>
                    </div>
                    <div className="text-center pt-7 pb-8">

                        <button className="bg-white text-black w-28 font-medium rounded-lg text-center p-2 ">EXPLORE US</button>
                    </div>
                </div>
            </div>

            <div className="lg:hidden flex    px-2  ">
                <div className="w-72   rounded-l-lg p-4 " style={{background: "linear-gradient(145deg, #5609B6, #28005A)"}}>
                    <h1 className="text-[22px] font-bold  text-white pl-2">Get an Idea? Let’s Talk</h1>
                    <p className="text-[10px] text-[#D1B5FF] ">Do you have a project in mind? Got a story to  tell the world? Or just want to say hello? Shoot us an email or use the contact form below.
                        We will revert in no time.</p>
                </div>
                <div className="bg-[#9E09B6] rounded-r-lg w-20 ">
                    <div className="w-18  px-7 rounded">

                        <div className=" justify-center flex mt-12 bg-white rounded-full">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default User; 