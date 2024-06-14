import pic1 from "../photo/akkenna_cloud/autoservies.png";
import pic2 from "../photo/akkenna_cloud/dep.png";
import pic3 from "../photo/akkenna_cloud/integration.png";
import pic4 from "../photo/akkenna_cloud/migration.png";
import pic5 from "../photo/akkenna_cloud/alerting.png"
import pic6 from "../photo/akkenna_cloud/automation.png";
import pic7 from "../photo/akkenna_cloud/security.png";
import pic8 from "../photo/akkenna_cloud/backup.png"


const Akkenna_cloud = () => {

    const Akkenna_cloud = [
        {
            image: pic1,
            name: "Cloud Automation Services",
            content: "Streamline the provisioning and deployment of cloud infrastructure resources, including virtual machines, storage, and networking components."
        },
        {
            image: pic2,
            name: "Cloud Deployment Automation",
            content: "Automate the configuration and management of cloud resources, ensuring consistency, security, and compliance across your infrastructure"
        },
        {
            image: pic3,
            name: "Cloud Integration Automation Service",
            content: "Implement CI/CD pipelines to automate the build, testing, and deployment of applications, enabling faster delivery cycles."
        },
        {
            image: pic4,
            name: "Cloud Migration Automation Services",
            content: "Automate the monitoring and alerting of cloud resources and applications with our services, allowing for proactive identification."
        },
        {
            image: pic5,
            name: "Cloud Monitoring and Alerting Automation",
            content: "Streamline the provisioning and deployment of cloud infrastructure resources, including virtual machines, storage, and networking components."
        },
        {
            image: pic6,
            name: "Auto-scaling and Resource Optimization",
            content: "Automate the configuration and management of cloud resources, ensuring consistency, security, and compliance across your infrastructure"
        },
        {
            image: pic7,
            name: "Security and Compliance Automation",
            content: "Implement CI/CD pipelines to automate the build, testing, and deployment of applications, enabling faster delivery cycles."
        },
        {
            image: pic8,
            name: "Backup and Disaster Recovery Automation",
            content: "Automate the monitoring and alerting of cloud resources and applications with our services, allowing for proactive identification."
        },


    ]

    return (
        <div>
            <div className="">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl justify-center font-semibold hidden lg:flex pt-5 ">Akkenna’s Cloud Automation Services</h1>
                        <p className="text-sm w-1/2 mt-3 text-center mx-auto hidden lg:flex ">Akkenna’s Cloud Automation Services encompass a range of solutions designed to streamline and optimize cloud-based operations for businesses of all sizes.
                            Leveraging cutting-edge automation tools and technologies, we offer a comprehensive suite of services to automate various tasks and processes within your cloud environment.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 px-56 mt-4 shadow-lg ">
                        {
                            Akkenna_cloud.map((data, index) => (
                                <div className=" p-5 mb-3 bg-[#F7F8FD]   flex-col ... justify-center rounded hidden lg:flex" key={index}>
                                    <img src={data.image} alt="" className="h-8 px-24 " />
                                    <h3 className="font-semibold mt-3 px-5 text-center">{data.name}</h3>
                                    <p className="text-sm mt-4 px-6 ">{data.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="">
               
                <div className=" flex justify-center items-center ">

                    <p className=" font-medium text-center w-[50%] h-[50px]  lg:hidden">Why We're Your Exemplary Partner</p>
                </div>

                <div className=" lg:hidden flex justify-between gap-2  items-center  ">

                    <div className=" shadow-xl ... p-4 items-center px-3 rounded-2xl">
                        <img src={pic1} alt="" className="h-10 pl-2 " />
                        <p className="text-sm">Cloud Automation Services</p>

                    </div>
                    <div className="shadow-xl ... p-4 rounded-2xl ">
                        <img src={pic2} alt="" className="h-10 pl-8" />
                        <p className="text-sm">Cloud Deployment  Automation"</p>

                    </div>
                    <div className="shadow-xl ... p-3 rounded-2xl ">
                        <img src={pic3} alt="" className="h-10 pl-6 " />
                        <p className="text-sm text-center  ">Cloud Integration Automation Service</p>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default Akkenna_cloud;