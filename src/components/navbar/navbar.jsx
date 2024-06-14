import "./navbarmedia.scss"

import pic from "../photo/name/akkennaname.png"

const Navbar = () => {


    return (
        <div id="Navbar" className="flex justify-between px-20 py-4 w-full">
            <div className="titlename flex justify-center items-center font-medium">
                {/* <h2>Akkenna</h2> */}
                <img src={pic} alt="" className=" w-26 h-4" />
            </div>
            <div className=" navbarlist ">
                <ul class="flex gap-9 h-8 text-center  ">
                    <div className="flex justify-center items-center font-medium">
                    <li>About Us</li>

                    </div>
                    <div className="flex justify-center items-center font-medium">
                        <li >Services</li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="h-5   mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <div className="flex justify-center items-center font-medium">
                        <li>Developers</li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="h-5  mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="flex justify-center items-center font-medium">
                        <li>Animation</li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="h-5  mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="flex justify-center items-center font-medium">
                        <li>Products</li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="h-5  mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="flex justify-center items-center font-medium">
                    <li >Blogs</li>

                    </div>
                    <div className=" flex justify-center items-center font-medium">
                    <li>Portfolio</li>

                    </div>
                    <li className=" bg-[#00005B] text-white w-28 py-1 " style={{ borderRadius: "25px 0px 25px 26px / 25px 0px 25px 25px " }}>Creers</li>
                    {/* <div>
                    <button className="NavConBtn bg-[#00005B] text-white  rounded w-20  text-center">Creers</button>

                    </div> */}

                </ul>

            </div>
        </div>
    )
}

export default Navbar;