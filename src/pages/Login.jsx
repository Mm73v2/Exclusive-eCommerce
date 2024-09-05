import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import getUser from "../utils/getUser";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = getUser();
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <main className="flex xl:gap-28 flex-col xl:flex-row items-center mt-16 pr-10 md:pr-20 lg:pr-28 w-full">
      <div className="xl:w-1/2 mb-8">
        <img className="w-full" src="/auth.png" alt="phone" />
      </div>
      <LoginForm />
    </main>
  );
};

export default Login;
