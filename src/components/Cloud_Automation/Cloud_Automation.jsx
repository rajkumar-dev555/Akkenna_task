import cloudautomation from "../photo/cloudautomation.png"

const Cloud_Automation = () => {
    return (
        <div>
            <div className=" ">
                <div className="bg-slate-200/20 hidden lg:flex justify-center gap-36 py-8  ">
                    <div className=" ">
                        <img src={cloudautomation} alt="" className="h-[45vh]" />
                    </div>


                    <div className="">
                        <h1 className="text-3xl text-blue-700 font-medium mt-5">Defining Cloud Automation</h1>
                        <div className="w-[35vw]">

                            <p className="mt-4 text-sm" >Cloud automation encompasses utilizing technological tools and resources to alleviate manual efforts in provisioning and overseeing cloud computing workloads.
                                It involves employing software-based solutions to automate installation, configuration, management, and other cloud-related operations.</p>
                            <p className="mt-4 text-sm">This entails streamlining repetitive activities like provisioning and configuring resources such as virtual machines, establishing clusters and load balancing, setting up virtual networks, executing deployments, and monitoring and managing performance.</p>
                            <p className="mt-4 text-sm">Akkenna’s Cloud automation services encompass a range of functionalities, including cloud deployment automation, integration automation service, and cloud migration automation, aimed at enhancing efficiency and effectiveness in managing cloud environments.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex justify-center">
                <div className="text-center">

                    <div className=" pt-5 font-medium text-2xl">
                        <h1 className="text-blue-600 ">Defining Cloud Automation</h1>

                    </div>
                    <p className="px-3 text-center pt-4 font-medium text-slate-500">Cloud automation encompasses utilizing technological tools and resources to alleviate manual efforts in provisioning and overseeing cloud computing workloads. It involves employing software-based solutions to automate installation, configuration, management, and other cloud-related operations.</p>
                </div>
            </div>
        </div>
    )
}

export default Cloud_Automation;