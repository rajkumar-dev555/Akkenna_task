import pic from "../photo/name/akkennaname.png"
import pic1 from "../photo/name/f.png"
import pic2 from "../photo/name/v.png"
import pic3 from "../photo/name/in.png"

const Footer = () => {
    const icons = [
        {
            image: pic1
        },
        {
            image: pic2
        },
        {
            image: pic3
        }
    ]
    return (
        <div >
            <div className="  bg-gradient-to-b from-indigo-900 from-60% via-purple-800 from-60% to-blue-900   gap-5  pt-5 ">
                <div className=" hidden lg:flex justify-center gap-[6%]  pt-3">
                    <div>
                        <img src={pic} alt="" className=" w-26 h-4" />
                        <p className="text-white font-medium pt-2">Akkenna Technologies Pvt Ltd</p>
                        <p className="text-sm pt-2  text-slate-300">Start your day with the spirit of exercising and <br /> you will get many very important benefits</p>
                        <div className="flex gap-2 pt-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                            </svg>
                            <p className="text-white">+91748555205</p>
                        </div>
                        <div className="flex gap-3 pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p className="text-white">sales@akkenna.com</p>
                        </div>
                        <div className="flex gap-2 pt-3  ">
                            <img src={pic1} alt="" className="h-8" />
                            <img src={pic2} alt="" className="h-8" />
                            <img src={pic3} alt="" className="h-8" />

                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-white font-medium">Address</p>
                            <p className="text-white">USA-New Jersey</p>

                            <p className="text-sm pt-2 text-slate-300">1040D Orchard Street, North <br /> Brunswick, New Jersey 08902</p>

                            <p className="text-white font-medium pt-2 ">India-Coimbatore</p>
                            <p className="text-sm pt-2  text-slate-300">No.37/1, First Floor, Rajeshwari Nager,<br /> Udayampalayam Main Road,<br />
                                Nava India, Coimbatore-641028</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className="text-white font-medium">Services</p>
                            <ul >
                                <li className="pt-2 text-sm  text-slate-300">UI/UX Design</li>
                                <li className="pt-2 text-sm  text-slate-300">Web Development</li>
                                <li className="pt-2 text-sm  text-slate-300">App Development</li>
                                <li className="pt-2 text-sm  text-slate-300">Digital Marketing</li>
                                <li className="pt-2 text-sm  text-slate-300">Blockchain Development</li>


                            </ul>

                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-white font-medium">Dedicated Developers</p>
                            <ul >
                                <li className="pt-2 text-sm text-slate-300">Hire Reactjs Developer</li>
                                <li className="pt-2 text-sm  text-slate-300">Hire Angular Developer</li>
                                <li className="pt-2 text-sm  text-slate-300">Hire Nodejs Developer</li>
                                <li className="pt-2 text-sm  text-slate-300">Hire Flutter Developer</li>
                                <li className="pt-2 text-sm  text-slate-300">Hire PHP Developer</li>


                            </ul>

                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-white font-medium">Company</p>
                            <ul >
                                <li className="pt-2 text-sm text-slate-300">About Us</li>
                                <li className="pt-2 text-sm  text-slate-300">Careers</li>
                                <li className="pt-2 text-sm  text-slate-300">Blogs</li>
                                <li className="pt-2 text-sm  text-slate-300">Services</li>
                                <li className="pt-2 text-sm  text-slate-300"> Contact Us</li>


                            </ul>

                        </div>
                    </div>
                </div>

                <div >

                    <div className=" ">
                        <div className="hidden lg:flex justify-center gap-[15%] bg-[#160033] pt-5 pb-5">
                            <p className="text-white text-sm">© 2024 Akkenna Animation & Technologies Pvt Ltd </p>
                            <p className="text-white text-sm">CIN : U72200TZ2022PTC039323</p>
                            <p className="text-white text-sm">Privacy Policy I Terms of use</p>

                        </div>
                    </div>
                </div>
                



            </div>
        </div>
    )
}

export default Footer;