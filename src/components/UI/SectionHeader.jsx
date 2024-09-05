const SectionHeader = ({ subtitle, title }) => {
  return (
    <div className="mb-5 md:mb-10">
      <h4 className="text-primary font-semibold text-xl mb-6 relative before:content-[''] before:absolute before:left-0 before:top-1/2 pl-10 before:transform before:translate-y-[-50%] before:bg-primary before:w-[23px] before:h-[50px] before:rounded">
        {subtitle}
      </h4>
      <h2 className="text-4xl font-semibold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
