import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import AuthApis from "../../utils/AuthApis";
import storeUserAndToken from "../../utils/storeUserAndToken";
import getUser from "../../utils/getUser";
import Context from "../../store/Context";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(7, "Password must be at least 7 characters long"),
});

const LoginForm = () => {
  const ctx = useContext(Context);

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onFoushHandler = () => {
    setLoginError("");
  };

  const onSubmit = (data) => {
    AuthApis.loginUser({ identifier: data.email, password: data.password })
      .then((res) => {
        storeUserAndToken(res.data.jwt, res.data.user);
        ctx.setUser(getUser());
        navigate("/");
      })
      .catch((error) => setLoginError(error.response.data.error.message));
  };

  return (
    <div className="w-full pl-12 xl:w-1/2 xl:ml-auto">
      <header className="mb-16">
        <h2 className="font-semibold text-3xl mb-4">Login to Exclusive</h2>
        <p className="font-medium">Enter your details below</p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full border-b border-gray-300 outline-none py-1"
            placeholder="Email"
            onFocus={onFoushHandler}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-8">
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full border-b border-gray-300 outline-none py-1"
            placeholder="Password"
            onFocus={onFoushHandler}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {loginError && (
          <p className="text-red-500 text-center mb-8 font-semibold text-sm">
            {loginError}
          </p>
        )}
        <button
          type="submit"
          className="w-full px-8 py-4 bg-primary text-white rounded-md hover:opacity-90 transition-opacity"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
