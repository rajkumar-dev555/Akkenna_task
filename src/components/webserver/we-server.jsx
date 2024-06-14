import pic from "../photo/we-serve/financial.png"
import pic1 from "../photo/we-serve/banking.png"
import pic2 from "../photo/we-serve/insurance.png"
import pic3 from "../photo/we-serve/plan.png"
// import pic4 from "../photo/we-serve/inverstment.png"
import pic5 from "../photo/we-serve/inverstment.png"
import pic6 from "../photo/we-serve/payment.png"
import pic7 from "../photo/we-serve/retail.png"
import pic8 from "../photo/we-serve/helth.png"
import pic9 from "../photo/we-serve/setting.png"
import pic10 from "../photo/we-serve/transpoting.png"
import pic11 from "../photo/we-serve/tel.png"
import pic12 from "../photo/we-serve/consectuion.png"
import pic13 from "../photo/we-serve/travel.png"
import pic14 from "../photo/we-serve/city.png"
import pic15 from "../photo/we-serve/location.png"
import pic16 from "../photo/we-serve/professinal.png"


import  financi from "../photo/serv/financi.png"
import bank from "../photo/serv/bank.png"
import insurn from "../photo/serv/insurance.png"
import inverstment from "../photo/serv/inverstment.png"
import  fin from "../photo/serv/fintech.png"
import pay from "../photo/serv/payment.png"
import retail from "../photo/serv/retail.png"
import healt from "../photo/serv/health.png"
import manufi from "../photo/serv/manufa.png"
import profess from "../photo/serv/professional.png"
import teansport from "../photo/serv/transport.png"
import tele from "../photo/serv/tele.png"
import constrction from "../photo/serv/construction.png"
import travl from "../photo/serv/travel.png"
import city from "../photo/serv/city.png"
import image from "../photo/serv/image.png"


import mediapic from "../photo/serve/Financial.png"
import banking from "../photo/serve/banking.png"
import insurance from "../photo/serve/insurance.png"



const Serve = () => {

  const serve = [
    {
      image: financi,
      name: "Financialservices",
      style: {
        borderRadius: "19% 2% 20% 24% / 18% 16% 15% 2%"
      }
    },
    {
      image: bank,
      name: "Bankingservices"
    },
    {
      image: insurn,
      name: "Insuranceservices"

    },
    {
      image: inverstment,
      name: "Investmentplanning"

    },
    {
      image: fin,
      name: "Fintechsolutions"

    },
    {
      image: pay,
      name: "Paymentsmethod"

    },
    {
      image: retail,
      name: "Retailoption"

    },
    {
      image: healt,
      name: "Healthcaresolutions"

    },
    {
      image: manufi,
      name: "Manufacturingcompany"

    },
    {
      image: profess,
      name: "Professional Services"
    },
    {
      image: teansport,
      name: "Transportation &Logistics"

    },
    {
      image: tele,
      name: "Telecommunications"

    },
    {
      image:constrction,
      name: "Constructionmethod"

    },
    {
      image: travl,
      name: "Travel and Hospitality"

    },
    {
      image: city,
      name: "Construction method"

    },

    {
      image: image,
      name: "Travel and Hospitalit"

    },






  ]

  return (
    <div>
      <div className="hidden lg:flex justify-center items-center">
        <div className="pb-6  ">
          <div>
            <h1 className="font-medium mt-5 text-3xl text-center lg:pt-7 pl-24">Industry We Serve</h1>
            <p className="hidden lg:flex justify-center  text-sm w-1/2 mt-3 pl-28 text-center mx-auto">Begin your generative AI journey with a comprehensive consultation from a <br />
              leading generative AI development company. </p>
          </div>


          <div className="  grid grid-cols-4 gap-4 px-60 pl-80  pt-8 " >
            {serve.map((data, index) => (
              <div className=" border rounded-lg p-5 px-2   " key={index} style={{ border: "", borderRadius: "25px 0% 25px 0% / 25px 0% 25px 0% " }} >
                <img src={data.image} alt="" className="h-16 bg-center px-2 py-1 ml-16 outline outline-offset-1 outline-1  rounded-full " />
                <p className="text-center ">{data.name}</p>
              </div>
            ))}
          </div>
          {/* <img src={pic3} alt="" /> */}

        </div>
      </div>

      <div>
        <div className="lg:hidden" >
          <div className="pt-4">

          <h3 className="text-blue-950 text-2xl font-medium text-center">lndustry We Serve</h3>
          </div>

          <div className="flex justify-center px-3 gap-2 pt-5">

            <div className="p-5 border" style={{ border: "", borderRadius: "25px 0% 25px 0% / 25px 0% 25px 0% " }}>
              <img src={mediapic} alt="" className="ml-2 outline outline-offset-2 outline-1  rounded-full p-3"/>
              <p className="text-center">Financial services</p>
            </div>

            <div className="p-5 border" style={{ border: "", borderRadius: "25px 0% 25px 0% / 25px 0% 25px 0% " }}>
              <img src={banking} alt="" className=" ml-1 outline outline-offset-2 outline-1  rounded-full p-2" />
              <p className="text-center">Banking services</p>
            </div>
            <div className="p-5 border" style={{ border: "", borderRadius: "25px 0% 25px 0% / 25px 0% 25px 0% " }}>
              <img src={insurance} alt="" className="ml-2 outline outline-offset-2 outline-1  rounded-full p-2 "  />
              <p className="text-center">insurance services</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Serve;