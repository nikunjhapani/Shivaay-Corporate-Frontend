import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header -h-110 -mx-60 -blur -border-bottom-1 js-header" data-add-bg="bg-accent-1" data-x="header"
      data-x-toggle="-is-menu-opened">
      <div className="header__container h-full items-center">
        <div className="header__left d-flex items-center">
          <button className="d-flex items-center cursor-pointer js-menuFullScreen-toggle">
            <i className="icon-menu text-11 text-white"></i>
            <div className="text-15 sm:text-13 uppercase text-white ml-15 sm:d-none fw-600">Menu</div>
          </button>
        </div>

        <div className="header__center">
          <div className="header__logo">
            <a href="/">
              {/* <img src="img/general/logo.png" alt="logo"> */}
            </a>
          </div>
        </div>

        <div className="header__right d-flex items-center h-full">

          <div className="line -vertical bg-white-10 h-full ml-90 mr-90 xl:d-none"></div>

          <a href="/contact-us.html">
            <button className="button text-white mr-30 xl:d-none"><i className="icon-phone text-20 text-white mr-15"></i> CONTACT US
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}