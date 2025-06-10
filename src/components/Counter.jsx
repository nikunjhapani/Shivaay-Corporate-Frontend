import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 35,
    suffix: "+",
    label: "Years of experience",
    duration: 3,
  },
  {
    value: 24,
    suffix: "+",
    label: "Countries Exported",
    duration: 3,
  },
  {
    value: 150,
    suffix: "+",
    label: "Global Clients to Work",
    duration: 3,
  },
  {
    value: 50,
    suffix: "k+",
    label: "Numbers of Carats Delivered",
    duration: 3,
  },
];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="layout-pt-md" ref={ref}>
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
                  data-aos-duration={1000}
                > 
                  <h3 className="text-60 lg:text-40 sm:text-34 lh-1">
                    {inView ? (
                      <CountUp
                        end={item.value}
                        duration={item.duration}
                        suffix={item.suffix}
                      />
                    ) : (
                      "0"
                    )}
                  </h3>
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
