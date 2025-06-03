const SectionTitle = ({ title, paragraph, center, className = "" }) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} ${className}`}
      >
        <div
          className="text-15 sm:text-13 uppercase mb-5 font-sans"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
        >
          {title}
        </div>
        <h2
          className="text-34 md:text-30 sm:text-24 font-inter "
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
        >
          {paragraph}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
