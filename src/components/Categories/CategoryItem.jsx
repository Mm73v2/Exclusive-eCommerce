const CategoryItem = ({ img, title }) => {
  return (
    <div className="py-10 px-16 border flex flex-col items-center gap-4 transition-all cursor-pointer hover:bg-primary hover:text-white">
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default CategoryItem;
