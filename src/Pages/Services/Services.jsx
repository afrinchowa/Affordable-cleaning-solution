import Cover from "../Shared/Cover/Cover";
import serviceImg from "../../assets/img1.jpg";

import { useEffect, useState } from "react";
import Process from "./Process/Process";
import Quality from "./Quality/Quality";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Appointment from "./Appointment/Appointment";
import { Link } from "react-router-dom";
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('services.json')
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
  return (
    <div>
      <Cover img={serviceImg} title="Services"></Cover>
      <div className="mt-10 ml-10 grid grid-cols-3 gap-5">
     {services.map((services) =>(
      <>
         <Link to={`/service/${services._id}`}><div key={services._id}  className="card card-compact w-full bg-[#BFDBF7] shadow-xl p-5">
         <figure>
           <img
             src={services.img}
             alt=""
           />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{services.service_name}</h2>
           <p>{services.description}</p>
          {/* <h3>Category:{services.category}</h3>
          <h3>{services.service_details}</h3>
          <h3>{services.service_duration}</h3> */}
         </div>
       </div></Link>
       </>
     ))}
       </div>
      <Process></Process>
      <Appointment></Appointment>
      <Quality></Quality>
      <WhyChooseUs></WhyChooseUs>
    
    </div>
    
  );

};

export default Services;
