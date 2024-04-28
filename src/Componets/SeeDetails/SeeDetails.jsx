import { useLoaderData, useParams } from "react-router-dom";

const SeeDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();

  // Find the service with the matching id
  const service = services.find((service) => service._id === id);

  // If service is not found, display a message
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <img
          src={service.img}
          className="card-img-top"
          alt={service.service_name}
        />
        <div className="card-body">
          <h5 className="card-title">{service.service_name}</h5>
          <p className="card-text">{service.description}</p>
          <h6>Service Details:</h6>
          <ul className="list-group list-group-flush">
            {service.service_details.map((detail, index) => (
              <li key={index} className="list-group-item">
                {detail}
              </li>
            ))}
          </ul>
          <p className="mt-3">Duration: {service.service_duration}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
