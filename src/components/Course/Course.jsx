import PropTypes from 'prop-types';
const Course = ({ course , handleBookmark}) => {
  const { name, description, photo, price, credit } = course;
  return (
    <div className="card card-compact bg-[#FFF] p-4">
      <figure>
        <img
          src={photo}
          alt={name}
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm font-normal text-slate-500 text-justify">
          {description}
        </p>
        <div className="flex items-center">
          <p>
            <span>
              <i className="bi bi-currency-dollar"></i>
            </span>
            <span className="text-sm font-normal text-slate-500">
              Price : {price}
            </span>
          </p>
          <p className="text-right space-x-1">
            <span>
              <i className="bi bi-book"></i>
            </span>
            <span className="text-sm font-normal text-slate-500">
              Credit : {credit}hr
            </span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={()=> handleBookmark(course)} className="btn btn-primary w-full">Select</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
}
export default Course;
