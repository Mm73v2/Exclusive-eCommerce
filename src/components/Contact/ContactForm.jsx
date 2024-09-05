import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .min(11, "Phone number must be at least 11 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    message: z.string().optional(),
  });

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap w-full justify-between">
        <div className="mb-4">
          <input
            {...register("name")}
            className="bg-gray-200 border-none outline-none p-2"
            type="text"
            placeholder="Your Name*"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...register("email")}
            className="bg-gray-200 border-none outline-none p-2"
            type="text"
            placeholder="Your Email*"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...register("phone")}
            className="bg-gray-200 border-none outline-none p-2"
            type="text"
            placeholder="Your Phone*"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <textarea
          {...register("message")}
          name="message"
          id="message"
          placeholder="Your Message"
          className="bg-gray-200 border-none outline-none p-2 resize-none w-full col-span-3 h-[200px]"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        className="bg-primary text-white font-medium rounded p-3 flex ml-auto mt-4 hover:opacity-90"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
