import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import pic1 from "../photo/blogs/ai.png"
import pic2 from "../photo/blogs/devpos.png"
import pic3 from "../photo/blogs/tools.png"

const Blogs = () => {


    const blogs = [
        {
            image: pic1,
            naame: "Cloud Automation: What It Is, Use Cases and Benefits",
            content: "Combining artificial intelligence(AI) and cloud computing is an that is reshaping industries. ",
            date: "Dec 28, 2022",
            view: "1,526 views"
        },
        {
            image: pic2,
            naame: "Cloud Automation Solutions: Understanding The Basics",
            style: {
                textColor: "blue"
            },
            content: "Generative AI empowers teams to break free from conventional thinking patterns ",
            date: "Dec 28, 2022",
            view: "1,526 views"
        },
        {
            image: pic3,
            naame: "10 Best Cloud Automation Tools",
            content: "Unveiling Generative AI: A Comprehensive Guide to Innovative Technology ",
            date: "Dec 28, 2022",
            view: "1,526 views"
        },
    ]

    return (
        <div>
            <div className="bg-[#EDEFFA] hidden lg:flex justify-center">
                <div >
                    <div className="flex justify-center gap-96">
                        <h1 className="text-3xl font-medium text-center pt-4 pl-96  ">Recent Blogs and Post <br /> From Akkenna</h1>
                        <div className="flex justify-end  gap-3  mt-8 ">
                            <p className="  h-1 mt-5 ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </p>
                            <p className=" rounded-full bg-blue-800 p-4 mt-1">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </p>
                        </div>

                    </div>

                    <div className="flex justify-center gap-6 pt-5  pb-5">
                        {blogs.map((data, index) => (

                            <Card sx={{ maxWidth: 345 }} key={index} >

                                <CardMedia sx={{ height: 140 }} image={data.image} />
                                <CardContent>
                                    {/* <Typography gutterBottom variant="h5" component="div" className="font-bold  text-sm" style={data.style} >
                                {data.naame}
                            </Typography> */}
                                    <div className=" font-bold pt-1">{data.naame}</div>
                                    {/* <Typography variant="body2" color="text.secondary"> */}
                                    <div className="pt-2 text-sm">

                                        {data.content}
                                    </div>
                                    {/* </Typography> */}
                                </CardContent>
                                <CardActions className="pt-4 ">
                                    <div className="flex justify-center items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className="text-blue-500 h-3" />
                                        </svg>

                                        <Button size="small" >{data.date}</Button>
                                    </div>
                                    <div className="flex justify-center items-center text-blue-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                        <Button size="small">{data.view}</Button>
                                    </div>
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>


            <div className="lg:hidden flex justify-center items-center px-2">
                <div className="mb-12">
                    <div>
                        <h3 className="text-2xl font-semibold flex justify-center pt-4 mb-5">Recent Blogs and Posts</h3>
                    </div>
                    <div className=" flex h-[100px]  justify-center items-center border rounded-lg ">


                        <img src={pic1} alt="" className="h-[100px] w-[100px] font-[700] rounded-l-lg" />
                        <div className="h-full">

                            <h3 className="text-[16px] text-[#6A0EFF] font-bold">Cloud Automations:What it is,Use Cases and Benefits</h3>
                            <p className="text-[12px] pt-2">Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla...</p>
                        </div>
                        <div className="">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blogs;