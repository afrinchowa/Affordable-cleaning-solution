const AppointForm = () => {
  return (
    <div className="bg-[#BFDBF7] p-20 md:m-20">
      <h2 className="text-3xl font-extrabold">Appointment</h2>
      <form >
        <div className="md:flex">
          <label className="form-control md:w-1/2 ">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
            </label>
          </label>
          <label className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>

            <label>
              <input
                name="Last"
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </label>
          </label>
        </div>
        <div className="md:flex">
          <label className="form-control md:w-1/2 ">
            <div className="label">
              <span className="label-text">Service Name</span>
            </div>
            <label>
              <input
                name="Service Name"
                type="text"
                placeholder="Service Name"
                className="input input-bordered w-full "
              />
            </label>
          </label>
          <label className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text">Company</span>
            </div>

            <label>
              <input
                name="Company"
                type="text"
                placeholder="Company"
                className="input input-bordered w-full"
              />
            </label>
          </label>
          <label className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text">Email</span>
            </div>

            <label>
              <input
                name="Email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
          </label>
        </div>
        <div className="md:flex">
          <label className="form-control md:w-1/2 ">
            <div className="label">
              <span className="label-text">Address</span>
            </div>
            <label>
              <input
                name="address"
                type="text"
                placeholder="Address"
                className="input input-bordered w-full "
              />
            </label>
          </label>
          <label className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text">City</span>
            </div>

            <label>
              <input
                name="City"
                type="text"
                placeholder="City"
                className="input input-bordered w-full"
              />
            </label>
          </label>
        </div>
      
      <br />
        <input type="submit" className="btn btn-block" value="Submit" />
      </form>
    </div>
  );
};

export default AppointForm;
