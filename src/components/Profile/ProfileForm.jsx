import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import getUser from "../../utils/getUser";
import { Link } from "react-router-dom";

const ProfileForm = () => {
  const user = getUser();
  const schema = z
    .object({
      firstName: z.string().min(1, "First Name is required"),
      lastName: z.string().min(1, "Last Name is required"),
      email: z.string().email("Invalid email address"),
      address: z.string().optional(),
      currentPassword: z.string().min(1, "Current Password is required"),
      newPassword: z
        .string()
        .min(8, "New Password must be at least 8 characters"),
      confirmPassword: z
        .string()
        .min(8, "Confirm Password must be at least 8 characters"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: user?.username || "",
      lastName: user?.username || "",
      email: user?.email || "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="col-span-2 max-lg:col-span-3">
      <h2 className="font-semibold text-primary text-3xl">Edit Your Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
        <div className="flex gap-4 mb-4">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="firstName" className="font-semibold mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className={`p-3 rounded bg-gray-100 mt-1 outline-none ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName?.message}
            </p>
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="lastName" className="font-semibold mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className={`p-3 rounded bg-gray-100 mt-1 outline-none ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName?.message}
            </p>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="email" className="font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`p-3 rounded bg-gray-100 mt-1 outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="address" className="font-semibold mb-2">
              Address
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className={`p-3 rounded bg-gray-100 mt-1 outline-none ${
                errors.address ? "border-red-500" : ""
              }`}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.address?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="currentPassword" className="font-semibold mb-2">
            Password Changes
          </label>
          <input
            id="currentPassword"
            type="password"
            placeholder="Current Password"
            {...register("currentPassword")}
            className={`p-3 rounded bg-gray-100 mt-1 outline-none ${
              errors.currentPassword ? "border-red-500" : ""
            }`}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.currentPassword?.message}
          </p>

          <input
            id="newPassword"
            type="password"
            placeholder="New Password"
            {...register("newPassword")}
            className={`p-3 rounded bg-gray-100 mt-1 outline-none ${
              errors.newPassword ? "border-red-500" : ""
            }`}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.newPassword?.message}
          </p>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm New Password"
            {...register("confirmPassword")}
            className={`p-3 rounded bg-gray-100 mt-1 outline-none ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Link to="/" className="border flex items-center p-4 py-2">
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-primary p-3 text-white rounded hover:opacity-90"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
