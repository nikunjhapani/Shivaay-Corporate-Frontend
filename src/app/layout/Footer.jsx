import Link from "next/link";

const Footer = ({ settings, menu, submenuMap }) => {
  const allSubmenus = Object.values(submenuMap || {}).flat();
  const data = settings;
  const socialLinksMap = {
    facebook: data.fbLink,
    twitter: data.twitterLink,
    instagram: data.instaLink,
    linkedin: data.linkedinLink,
    youtube: data.youtubeLink,
  };

  const socialIcons = [
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "youtube",
  ];
  return (
    <>
      <footer className="footer footer-d -type-1 bg-accent-3 text-white">
        <div className="footer__main">
          <div className="container">
            <div className="footer__grid">
              <div>
                <h4 className="text-30 fw-500 text-white">INFORMATION</h4>
                <div className="y-gap-10 text-15 text-white-60 mt-20 md:mt-20">
                  {menu
                    ?.filter((item) => item.menuName !== "About Us")
                    .map((item) => (
                      <Link
                        className="d-block"
                        key={item._id}
                        href={item.menuURL}
                      >
                        {item.menuName}
                      </Link>
                    ))}
                </div>
              </div>

              <div>
                <h4 className="text-30 fw-500 text-white">ABOUT US</h4>
                <div className="y-gap-10 text-15 text-white-60 mt-20 md:mt-20">
                  {allSubmenus?.map((item) => (
                    <Link
                      className="d-block"
                      key={item._id}
                      href={item.menuURL}
                    >
                      {item.menuName}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-30 fw-500 text-white">GET IN TOUCH</h4>
                <div className="d-flex flex-column mt-20 md:mt-20">
                  <div>
                    <p className="text-16 text-white-60 lh-17 mb-5">
                      {data.title}
                    </p>
                    <a className="d-block text-15 text-white-60 lh-17" href="#">
                      {data.address}
                    </a>
                  </div>
                  <div className="mt-25">
                    <a
                      className="d-block text-15 text-white-60"
                      href={`mailto:${data.email}`}
                    >
                      <i className="icon-email text-15 text-white mr-10"></i>
                      {data.email}
                    </a>
                  </div>
                  <div className="mt-10">
                    <a
                      className="d-block text-15 text-white-60"
                      href={`tel:${data.phone}`}
                    >
                      <i className="icon-phone text-15 text-white mr-10"></i>{" "}
                      {data.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-30 fw-500 text-white">FOLLOW US</h4>
                <div className="row mt-30">
                  {socialIcons.map((icon) => {
                    const url = socialLinksMap[icon];
                    return (
                      <div className="col-auto" key={icon}>
                        <a
                          key={icon}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-block text-white-60"
                          aria-label={icon}
                        >
                          <i className={`icon-${icon} text-20`}></i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <div className="row y-gap-30 justify-between md:justify-center items-center">
              <div className="col-md-auto">
                <div className="text-15 text-center text-white-60">
                  © 2025 Shivaay Jewels.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile/Accordion Footer */}
      <footer className="footer footer-m -type-1 bg-accent-3 text-white">
        <div className="footer__main">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-8 col-lg-10">
                <div className="accordion -type-1 row y-gap-10 js-accordion">
                  {/* Accordion Items */}
                  {[
                    {
                      title: "Information",
                      links: [
                        ["Artistry & Innovation", "/artistry-innovation"],
                        ["Global Presence", "/global-presence"],
                        [
                          "Social Responsibility",
                          "/social-responsibility",
                        ],
                        ["Awards & Certificates", "/awards-certificates"],
                        ["Career", "/career"],
                        ["Contact Us", "/contact-us"],
                      ],
                    },
                    {
                      title: "ABOUT US",
                      links: [
                        ["Our Journey", "/our-journey"],
                        ["Our Philosophy", "/our-philosophy"],
                        ["Vision", "/vision"],
                        ["Mission", "/mission"],
                        ["Management Team", "/management-team"],
                      ],
                    },
                    {
                      title: "GET IN TOUCH",
                      content: (
                        <>
                          <p className="text-16 text-white-60 lh-17 mb-5">
                            Shivaay Jewels
                          </p>
                          <a
                            className="d-block text-15 text-white-60 lh-17"
                            href="#"
                          >
                            {data.address}
                          </a>
                          <div className="mt-25">
                            <a
                              className="d-block text-15 text-white-60"
                              href={`mailto:${data.email}`}
                            >
                              <i className="icon-email text-15 text-white mr-10"></i>{" "}
                              {data.email}
                            </a>
                          </div>
                          <div className="mt-10">
                            <a
                              className="d-block text-15 text-white-60"
                              href={`tel:${data.phone}`}
                            >
                              <i className="icon-phone text-15 text-white mr-10"></i>
                              {data.phone}
                            </a>
                          </div>
                        </>
                      ),
                    },
                  ].map((section, index) => (
                    <div className="col-12" key={index}>
                      <div className="accordion__item">
                        <div className="accordion__button d-flex items-center justify-between px-10 py-15">
                          <div className="text-sec text-16 fw-500 lh-1">
                            {section.title}
                          </div>
                          <div className="accordion__icon">
                            <i className="custom-icon-plus text-15">
                              <span></span>
                              <span></span>
                            </i>
                            <i className="custom-icon-minus text-15">
                              <span></span>
                            </i>
                          </div>
                        </div>
                        <div className="accordion__content">
                          <div className="px-10 py-10">
                            <div className="y-gap-15 text-15 text-white-60 d-flex flex-column">
                              {section.links
                                ? section.links.map(([label, href], i) => (
                                    <Link
                                      className="d-block"
                                      href={href}
                                      key={i}
                                    >
                                      {label}
                                    </Link>
                                  ))
                                : section.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Social Icons */}
                  <div className="d-flex">
                    <div className="row mt-30 mx-auto">
                      {socialIcons.map((icon) => {
                        const url = socialLinksMap[icon];
                        return (
                          <div className="col-auto" key={icon}>
                            <a
                              key={icon}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-block text-white-60"
                              aria-label={icon}
                            >
                              <i className={`icon-${icon} text-20`}></i>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <div className="row y-gap-30 justify-center items-center">
              <div className="col-md-auto">
                <div className="text-15 text-center text-white-60">
                  ©{new Date().getFullYear()} {data.title}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
