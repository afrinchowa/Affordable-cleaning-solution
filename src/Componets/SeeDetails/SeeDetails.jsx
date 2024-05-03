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
    <>
      <section className="p-16 dark:bg-gray-100 dark:text-gray-800 shadow-2xl shadow-gray-800 border-stone-900 ">
        <div className="container grid gap-6 mx-auto  lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
            <p className="mb-4 font-bold text-xl">{service.category}</p>
            <h1 className="text-5xl font-extrabold dark:text-gray-900">
              {service.service_name}
            </h1>

            <p className="my-8 text-lg ">
              <span className="font-bold dark:text-gray-900">
                Service Description:
              </span>
              {service.description}
            </p>
            <h6 className="font-bold text-lg">Service Details:</h6>
            <ul className="list-group list-group-flush">
              {service.service_details.map((detail, index) => (
                <li key={index} className="list-group-item">
                  {detail}
                </li>
              ))}
            </ul>

            <p className="mt-3 font-bold text-lg">
              Duration: {service.service_duration}
            </p>
          </div>
          <img
            src={service.img}
            alt={service.service_name}
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </>
  );
};

export default SeeDetails;
