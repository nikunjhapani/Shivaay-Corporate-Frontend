"use client";
import Link from "next/link";
import { useEffect } from "react";

const Footer = ({ settings, menu, submenuMap }) => {
  useEffect(() => {
    Accordion.init();
  }, []);

  const menuData = menu?.filter(
    (item) => item.menuName?.toLowerCase() !== "home"
  );
  const allSubmenus = Object.values(submenuMap || {}).flat();
  const data = settings;

  const socialLinksMap = {
    facebook: data?.fbLink,
    twitter: data?.twitterLink,
    instagram: data?.instaLink,
    linkedin: data?.linkedinLink,
    youtube: data?.youtubeLink,
  };

  const socialIcons = [
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "youtube",
  ];

  const footerSections = [
    {
      title: "Information",
      links: menuData
        ?.filter((item) => item.menuName !== "About Us")
        .map((item) => [item.menuName, item.menuURL]),
    },
    {
      title: "ABOUT US",
      links: allSubmenus.map((item) => [item.menuName, item.menuURL]),
    },
    {
      title: "GET IN TOUCH",
      content: (
        <>
          <p className="text-16 text-white-60 lh-17 mb-5">{data?.title}</p>
          <a className="d-block text-15 text-white-60 lh-17" href="#">
            {data.address.replace(/<\/?p>/g, "")}
          </a>
          <div className="mt-10">
            <a
              className="d-block text-15 text-white-60"
              href={`mailto:${data?.email}`}
            >
              <i className="icon-email text-15 text-white mr-10"></i>
              {data.email}
            </a>
          </div>
          <div className="mt-10">
            <a
              className="d-block text-15 text-white-60"
              href={`tel:${data?.phone}`}
            >
              <i className="icon-phone text-15 text-white mr-10"></i>
              {data?.phone}
            </a>
          </div>
        </>
      ),
    },
  ];
  const Accordion = (() => {
    function init() {
      const targets = document.querySelectorAll(".js-accordion");
      if (!targets) return;

      for (let i = 0; i < targets.length; i++) {
        const items = targets[i].querySelectorAll(".accordion__item");

        for (let l = 0; l < items.length; l++) {
          const button = items[l].querySelector(".accordion__button");
          const content = items[l].querySelector(".accordion__content");
          const titleChange = items[l].querySelector(
            "[data-open-change-title]"
          );
          let buttonOrigTitle;
          let buttonNewTitle;

          if (items[l].classList.contains("js-accordion-item-active")) {
            items[l].classList.toggle("is-active");
            content.style.maxHeight = content.scrollHeight + "px";
          }

          if (titleChange) {
            buttonOrigTitle = titleChange.innerHTML;
            buttonNewTitle = titleChange.getAttribute("data-open-change-title");
          }

          button.addEventListener("click", (e) => {
            items[l].classList.toggle("is-active");

            if (titleChange) {
              if (items[l].classList.contains("is-active")) {
                titleChange.innerHTML = buttonNewTitle;
              } else {
                titleChange.innerHTML = buttonOrigTitle;
              }
            }

            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }
      }
    }

    return { init };
  })();

  return (
    <>
      {/* Desktop Footer */}
      <footer className="footer footer-d -type-1 bg-accent-3 text-white">
        <div className="footer__main">
          <div className="container">
            <div className="footer__grid">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-30 fw-500 text-white">{section.title}</h4>
                  <div className="y-gap-10 text-15 text-white-60 mt-20 md:mt-20">
                    {section.links
                      ? section.links.map(([label, href], i) => (
                          <Link className="d-block" href={href} key={i}>
                            {label}
                          </Link>
                        ))
                      : section.content}
                  </div>
                </div>
              ))}

              {/* Social Icons */}
              <div>
                <h4 className="text-30 fw-500 text-white">FOLLOW US</h4>
                <div className="row mt-30">
                  {socialIcons.map((icon) => {
                    const url = socialLinksMap[icon];
                    if (!url) return null;
                    const displayIcon = icon === "youtube" ? "twitter" : icon;
                    return (
                      <div className="col-auto" key={icon}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-block text-white-60"
                          aria-label={displayIcon}
                        >
                          <i className={`icon-${displayIcon} text-20`}></i>
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
                  © {new Date().getFullYear()} {data.title}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer - Accordion Style */}
      <footer className="footer footer-m -type-1 bg-accent-3 text-white">
        <div className="footer__main">
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-8 col-lg-10">
                <div className="accordion -type-1 row y-gap-10 js-accordion">
                  {footerSections.map((section, index) => (
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
                        if (!url) return null;
                        const displayIcon =
                          icon === "youtube" ? "twitter" : icon;

                        return (
                          <div className="col-auto" key={icon}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-block text-white-60"
                              aria-label={displayIcon}
                            >
                              <i className={`icon-${displayIcon} text-20`}></i>
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
                  © {new Date().getFullYear()} {data.title}.
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
