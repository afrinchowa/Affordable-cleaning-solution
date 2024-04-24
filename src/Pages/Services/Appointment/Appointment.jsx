import { Link } from "react-router-dom";
import imgAppoint from "../../../assets/16.png"

const Appointment = () => {
    return (
        <div className="hero min-h-full bg-[#BFDBF7]">
  <div className="hero-content flex-col lg:flex-row">
    <img src={imgAppoint} className="max-w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Book an Appointment </h1>
      <p className="py-6">Are you ready to enjoy a sparkling clean home or office? Schedule your cleaning appointment with Affordable Cleaning Service today!</p>
      <Link to="/appointmentForm"><button className="btn btn-outline">Appointment</button></Link>
    </div>
  </div>
</div>
    );
};

export default Appointment;