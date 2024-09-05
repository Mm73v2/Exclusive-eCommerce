import { Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-3">
          <Phone className="text-white" />
        </div>
        <h2 className="text-lg font-semibold">Call To Us</h2>
      </div>
      <p className="text-sm">We are available 24/7, 7 days a week.</p>
      <p className="text-sm border-b border-gray-300 pb-4">
        Phone: +8801611112222
      </p>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary p-3">
          <Mail className="text-white" />
        </div>
        <h2 className="text-lg font-semibold">Write To Us</h2>
      </div>
      <p className="text-sm">
        Fill out our form and we will contact you within 24 hours.
      </p>
      <p className="text-sm">Emails: customer@exclusive.com</p>
      <p className="text-sm">Emails: support@exclusive.com</p>
    </div>
  );
};

export default ContactInfo;
