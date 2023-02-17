import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="404page mt-4 ms-4 ">
      <h1> 404 page doesn't exist</h1>
      <Link to="/">back to home page</Link>
      <p className="lead">
        You may have entered a wrong address or the page is under development!!
      </p>
    </div>
  );
};

export default NotFound;
