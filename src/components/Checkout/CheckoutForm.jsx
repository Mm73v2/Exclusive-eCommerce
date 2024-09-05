import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  companyName: z.string().min(1, "Company is required"),
  streetAddress: z.string().min(1, "Street Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "Town/City is required"),
  phoneNumber: z
    .string()
    .min(11, "Phone Number must be at least 11 digits")
    .regex(/^\d+$/, "Phone Number must contain only numbers"),
  emailAddress: z.string().email("Invalid email address"),
  saveInfo: z.boolean().optional(),
});
const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Billing Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-gray-500 font-semibold mb-2"
          >
            First Name*
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={`${
              errors.firstName ? "border border-red-500" : ""
            } p-3 rounded bg-gray-100 mt-1 outline-none`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="companyName"
            className="text-gray-500 font-semibold mb-2"
          >
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            {...register("companyName")}
            className="p-3 rounded bg-gray-100 mt-1 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="streetAddress"
            className="text-gray-500 font-semibold mb-2"
          >
            Street Address*
          </label>
          <input
            id="streetAddress"
            type="text"
            {...register("streetAddress")}
            className={`${
              errors.streetAddress ? "border border-red-500" : ""
            } p-3 rounded bg-gray-100 mt-1 outline-none`}
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.streetAddress.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="apartment"
            className="text-gray-500 font-semibold mb-2"
          >
            Apartment, floor, etc. (optional)
          </label>
          <input
            id="apartment"
            type="text"
            {...register("apartment")}
            className="p-3 rounded bg-gray-100 mt-1 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="text-gray-500 font-semibold mb-2">
            Town/City*
          </label>
          <input
            id="city"
            type="text"
            {...register("city")}
            className={`${
              errors.city ? "border border-red-500" : ""
            } p-3 rounded bg-gray-100 mt-1 outline-none`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-gray-500 font-semibold mb-2"
          >
            Phone Number*
          </label>
          <input
            id="phoneNumber"
            type="tel"
            {...register("phoneNumber")}
            className={`${
              errors.phoneNumber ? "border border-red-500" : ""
            } p-3 rounded bg-gray-100 mt-1 outline-none`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="emailAddress"
            className="text-gray-500 font-semibold mb-2"
          >
            Email Address*
          </label>
          <input
            id="emailAddress"
            type="email"
            {...register("emailAddress")}
            className={`${
              errors.emailAddress ? "border border-red-500" : ""
            } p-3 rounded bg-gray-100 mt-1 outline-none`}
          />
          {errors.emailAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.emailAddress.message}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <input
            id="saveInfo"
            type="checkbox"
            {...register("saveInfo")}
            className="h-4 w-4 rounded"
          />
          <label htmlFor="saveInfo" className="ml-2 text-sm">
            Save this information for faster check-out next time
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded font-semibold text-lg hover:bg-red-700 transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
