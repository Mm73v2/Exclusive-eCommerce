import { Store, CircleDollarSign, Gift, BriefcaseBusiness } from "lucide-react";
import AboutsStatsItem from "../components/About/AboutsStatsItem";
import AboutTestimonial from "../components/About/AboutTestimonial";
import Testimonial from "../components/Testimonial/Testimonial";

const About = () => {
  return (
    <div className="wrapper mt-24">
      <div className="flex max-sm:flex-col justify-between items-center">
        <div className="max-w-[600px]">
          <h2 className="text-6xl max-sm:text-center font-semibold mb-6">
            Our Story
          </h2>
          <p className="w-10/12 mb-8">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="w-10/12">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="min-w-[300px] max-sm:mt-8">
          <img src="/about1.webp" alt="" />
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AboutsStatsItem
          icon={
            <Store className="text-white group-hover:text-black" size={40} />
          }
          title="10.5k"
          subtitle="Sallers active our site"
        />
        <AboutsStatsItem
          icon={
            <CircleDollarSign
              className="text-white group-hover:text-black"
              size={40}
            />
          }
          title="33k"
          subtitle="Mopnthly Produduct Sale"
        />
        <AboutsStatsItem
          icon={
            <Gift className="text-white group-hover:text-black" size={40} />
          }
          title="45.5k"
          subtitle="Customer active in our site"
        />
        <AboutsStatsItem
          icon={
            <BriefcaseBusiness
              className="text-white group-hover:text-black"
              size={40}
            />
          }
          title="25k"
          subtitle="Anual gross sale in our site"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-24 gap-6">
        <AboutTestimonial
          img="/about2.png"
          title="Tom Cruise"
          subtitle="Founder & Chairman"
        />
        <AboutTestimonial
          img="/about3.png"
          title="Will Smith"
          subtitle="Product Designer"
        />
        <AboutTestimonial
          img="/about2.png"
          title="Ahmed Mohsen"
          subtitle="Managing Director"
        />
      </div>
      <Testimonial />
    </div>
  );
};

export default About;
