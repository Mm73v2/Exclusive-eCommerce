import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 h-screen">
      <h2 className="text-7xl font-semibold">404 Not Found</h2>
      <p>Your visited page not found. You may go home page</p>
      <Link to="/" className="bg-primary text-white px-8 py-3 rounded">
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
