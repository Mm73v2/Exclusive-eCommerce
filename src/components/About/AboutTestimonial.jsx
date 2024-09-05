import { Twitter, Instagram, Linkedin } from "lucide-react";
const AboutTestimonial = ({ img, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-100">
        <img src={img} className="mx-auto" alt={title} />
      </div>
      <h2 className="font-semibold text-2xl">{title}</h2>
      <h3 className="font-medium">{subtitle}</h3>
      <div className="flex gap-4">
        <Twitter className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
        <Linkedin className="cursor-pointer" />
      </div>
    </div>
  );
};

export default AboutTestimonial;
