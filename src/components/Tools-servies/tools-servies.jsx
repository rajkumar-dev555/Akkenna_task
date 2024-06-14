import pic1 from "../photo/Tools/Ansible.png";
import pic2 from "../photo/Tools/mask.png";
import pic3 from "../photo/Tools/github.png";
import pic4 from "../photo/Tools/simple.png";
import pic5 from "../photo/Tools/image.png"


const Tools_Servies = () => {

    const Tools = [
        {

            image: pic5,
            name: "Aws CloudFormation",

            style: {

                backgroundColor: "#FFE1E9",
            }


        },
        {
            image: pic2,
            name: "Kubernetes",
            style: {

                backgroundColor: "#DDFBF8",
            }
        },
        {
            image: pic3,
            name: "Github Action",
            style: {

                backgroundColor: "#FFFAD9",
            }
        },
        {
            image: pic4,
            name: "Terraform",
            style: {

                backgroundColor: "#EAEAFF",
            }
        },
        {
            image: pic1,
            name: "Ansible",
            style: {

                backgroundColor: "#D4F7FF",

            }
        }


    ]

    return (
        <div>
            <div className="hidden lg:flex pl-24">
                <div >

                    <div className=" mt-4">
                        <h1 className="font-medium text-center  text-3xl">Tools Used For Cloud Automation <br /> Services</h1>
                    </div>
                    {/* style={{borderRadius: "18% 22% 21% 24% / 20% 16% 22% 19%" }} */}
                    <div className=" flex justify-center gap-7 items-center mt-6 "  >
                        {
                            Tools.map((data, index) => (
                                <div className="flex gap-2 w-60 p-4 rounded-lg justify-center " key={index} style={data.style} >
                                    <img src={data.image} alt="" className="h-6" />
                                    <h6 className="text-sm">{data.name}</h6>

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div>
                <div className="lg:hidden pt-5 pb-6 ">
                    <div className=" ">
                        <h1 className="pl-9 font-bold text-center w-80">Tools Used For Cloud Automation Services</h1>
                    </div>
                    <div className="flex gap-2   ">
                        <div className="rounded-r-lg bg-[#a3facd] h-12 w-20" ></div>
                        <div className="bg-[#FFFAD9]  flex justify-center items-center rounded-lg w-64 h-12 gap-2 " >
                            <img src={pic3} alt="" className="h-9" />
                            <p className="text-sm font-medium">Github Action</p>
                        </div>
                        <div className="rounded-l-lg bg-[#EDEFFA] h-12 w-20" ></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tools_Servies;