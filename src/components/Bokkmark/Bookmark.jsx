import PropTypes from 'prop-types';

const Bookmark = ({data}) => {
    const {name,credit,price} = data;
  return (
      <div className="w-full md:w-1/3">
        <div className="bg-[#FFF] p-6 space-y-4 rounded-lg">
          <h4 className="text-[#2F80ED] text-lg font-bold mb-4 text-center">
            Credit Hour Remaining {credit} hr
          </h4>
          <hr></hr>
          <h2 className="text-xl font-bold">Course Name</h2>
          <div className="text-sm font-normal text-slate-500">
            {
                name.map((title, idx) => <p key={idx}>{idx+1}. {title}</p>)
            }
          </div>
          <hr></hr>
          <h4 className="text-base font-medium">Total Credit Hour : {credit}</h4>
          <hr></hr>
          <h4 className="text-base font-medium">Total Price : {price} USD</h4>
        </div>
      </div>
  );
};
Bookmark.propTypes = {
    data: PropTypes.object.isRequired,
}
export default Bookmark;
