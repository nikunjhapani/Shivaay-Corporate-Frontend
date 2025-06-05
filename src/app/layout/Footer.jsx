import Link from 'next/link';

const Footer = (settings) => {
  return (
    <>
      <footer className="footer footer-d -type-1 bg-accent-3 text-white">
        <div className="footer__main">
          <div className="container">
            <div className="footer__grid">
              <div>
                <h4 className="text-30 fw-500 text-white">INFORMATION</h4>
                <div className="y-gap-10 text-15 text-white-60 mt-20 md:mt-20">
                  <Link className="d-block" href="/artistry-innovation.html">Artistry & Innovation</Link>
                  <Link className="d-block" href="/global-presence.html">Global Presence</Link>
                  <Link className="d-block" href="/social-responsibility.html">Social Responsibility</Link>
                  <Link className="d-block" href="/awards-certificates.html">Awards & Certificates</Link>
                  <Link className="d-block" href="/career.html">Career</Link>
                  <Link className="d-block" href="/contact-us.html">Contact Us</Link>
                </div>
              </div>

              <div>
                <h4 className="text-30 fw-500 text-white">ABOUT US</h4>
                <div className="y-gap-10 text-15 text-white-60 mt-20 md:mt-20">
                  <Link className="d-block" href="/our-journey.html">Our Journey</Link>
                  <Link className="d-block" href="/our-philosophy.html">Our Philosophy</Link>
                  <Link className="d-block" href="/vision.html">Vision</Link>
                  <Link className="d-block" href="/mission.html">Mission</Link>
                  <Link className="d-block" href="/management-team.html">Management team</Link>
                </div>
              </div>

              <div>
                <h4 className="text-30 fw-500 text-white">GET IN TOUCH</h4>
                <div className="d-flex flex-column mt-20 md:mt-20">
                  <div>
                    <p className="text-16 text-white-60 lh-17 mb-5">Shivaay Jewels</p>
                    <a className="d-block text-15 text-white-60 lh-17" href="#">
                      Plot No. 101-102, Surat Special Economic Zone, Sursez, Sachin, Surat,<br />
                      Gujarat - 394230
                    </a>
                  </div>
                  <div className="mt-25">
                    <a className="d-block text-15 text-white-60" href="mailto:info@shivaayjewels.com">
                      <i className="icon-email text-15 text-white mr-10"></i> info@shivaayjewels.com
                    </a>
                  </div>
                  <div className="mt-10">
                    <a className="d-block text-15 text-white-60" href="tel:02612399533">
                      <i className="icon-phone text-15 text-white mr-10"></i> 0261 239 9533
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-30 fw-500 text-white">FOLLOW US</h4>
                <div className="row mt-30">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, idx) => (
                    <div className="col-auto" key={idx}>
                      <a href="#" className="d-block text-white-60">
                        <i className={`icon-${icon} text-20`}></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <div className="row y-gap-30 justify-between md:justify-center items-center">
              <div className="col-md-auto">
                <div className="text-15 text-center text-white-60">© 2025 Shivaay Jewels.</div>
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
                      title: 'Information',
                      links: [
                        ['Artistry & Innovation', '/artistry-innovation.html'],
                        ['Global Presence', '/global-presence.html'],
                        ['Social Responsibility', '/social-responsibility.html'],
                        ['Awards & Certificates', '/awards-certificates.html'],
                        ['Career', '/career.html'],
                        ['Contact Us', '/contact-us.html'],
                      ],
                    },
                    {
                      title: 'ABOUT US',
                      links: [
                        ['Our Journey', '/our-journey.html'],
                        ['Our Philosophy', '/our-philosophy.html'],
                        ['Vision', '/vision.html'],
                        ['Mission', '/mission.html'],
                        ['Management Team', '/management-team.html'],
                      ],
                    },
                    {
                      title: 'GET IN TOUCH',
                      content: (
                        <>
                          <p className="text-16 text-white-60 lh-17 mb-5">Shivaay Jewels</p>
                          <a className="d-block text-15 text-white-60 lh-17" href="#">
                            Plot No. 101-102, Surat Special Economic Zone, Sursez, Sachin, Surat, Gujarat - 394230
                          </a>
                          <div className="mt-25">
                            <a className="d-block text-15 text-white-60" href="mailto:info@shivaayjewels.com">
                              <i className="icon-email text-15 text-white mr-10"></i> info@shivaayjewels.com
                            </a>
                          </div>
                          <div className="mt-10">
                            <a className="d-block text-15 text-white-60" href="tel:02612399533">
                              <i className="icon-phone text-15 text-white mr-10"></i> 0261 239 9533
                            </a>
                          </div>
                        </>
                      ),
                    },
                  ].map((section, index) => (
                    <div className="col-12" key={index}>
                      <div className="accordion__item">
                        <div className="accordion__button d-flex items-center justify-between px-10 py-15">
                          <div className="text-sec text-16 fw-500 lh-1">{section.title}</div>
                          <div className="accordion__icon">
                            <i className="custom-icon-plus text-15"><span></span><span></span></i>
                            <i className="custom-icon-minus text-15"><span></span></i>
                          </div>
                        </div>
                        <div className="accordion__content">
                          <div className="px-10 py-10">
                            <div className="y-gap-15 text-15 text-white-60 d-flex flex-column">
                              {section.links
                                ? section.links.map(([label, href], i) => (
                                    <Link className="d-block" href={href} key={i}>
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
                      {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, idx) => (
                        <div className="col-auto" key={idx}>
                          <a href="#" className="d-block text-white-60">
                            <i className={`icon-${icon} text-20`}></i>
                          </a>
                        </div>
                      ))}
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
                <div className="text-15 text-center text-white-60">©2025 Shivaay Jewels.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
