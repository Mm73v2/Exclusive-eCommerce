import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
const Contact = () => {
  return (
    <div className="wrapper mt-24">
      <div className="flex max-lg:flex-col justify-between gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
