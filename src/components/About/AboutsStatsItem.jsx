const AboutsStatsItem = ({ icon, title, subtitle }) => {
  return (
    <div className="group border-2 border-gray-300 rounded flex flex-col items-center gap-4 p-4 hover:bg-primary transition-all hover:border-primary">
      <div className="rounded-full p-4 group-hover:bg-gray-100 bg-gray-500 w-fit">
        <div className="bg-black group-hover:bg-white rounded-full p-3">
          {icon}
        </div>
      </div>
      <h2 className="text-3xl font-semibold group-hover:text-white text-center">
        {title}
      </h2>
      <p className="group-hover:text-white text-center">{subtitle}</p>
    </div>
  );
};

export default AboutsStatsItem;
