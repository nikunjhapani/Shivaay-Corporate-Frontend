const stats = [
  {
    value: "35+",
    label: "Years of experience",
    duration: "500",
  },
  {
    value: "24+",
    label: "Countries Exported",
    duration: "700",
  },
  {
    value: "150+",
    label: "Global Clients to Work",
    duration: "900",
  },
  {
    value: "50k+",
    label: "Numbers of Carats Delivered",
    duration: "1100",
  },
];

const CounterSection = () => {
  return (
    <section className="layout-pt-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-10 col-lg-11">
            <div className="row y-gap-30 justify-between">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-auto col-6"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration={item.duration}
                >
                  <h3 className="text-60 lg:text-40 sm:text-34 lh-1">{item.value}</h3>
                  <div className="uppercase lh-1.1 mt-10">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
