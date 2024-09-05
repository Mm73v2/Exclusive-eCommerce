import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../store/Context";
import AuthApis from "../../utils/AuthApis";
import getUser from "../../utils/getUser";
import storeUserAndToken from "../../utils/storeUserAndToken";

const schema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters long")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

const SignupForm = () => {
  const ctx = useContext(Context);

  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    AuthApis.registerUser(data)
      .then((res) => {
        storeUserAndToken(res.data.jwt, res.data.user);
        ctx.setUser(getUser());
        navigate("/");
      })
      .catch((error) => setSignupError(error.response.data.error.message));
  };

  return (
    <div className="w-full pl-12 xl:w-1/2 xl:ml-auto">
      <header className="mb-16">
        <h2 className="font-semibold text-3xl mb-4">Create an account</h2>
        <p className="font-medium">Enter your details below</p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <input
            id="username"
            type="text"
            {...register("username")}
            className="w-full border-b border-gray-300 outline-none py-1"
            placeholder="Name"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-8">
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full border-b border-gray-300 outline-none py-1"
            placeholder="Email"
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
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {signupError && (
          <p className="text-red-500 text-center mb-8 font-semibold text-sm">
            {signupError}
          </p>
        )}

        <button
          type="submit"
          className="w-full px-8 py-4 bg-primary text-white rounded-md hover:opacity-90 transition-opacity"
        >
          Submit
        </button>
        <p className="text-gray-700 text-center mt-8">
          Already have an accout?{" "}
          <Link className="border-b ml-4 pb-1 border-gray-700" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
