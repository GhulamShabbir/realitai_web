import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioMain = () => {
  let eleven = "/images/portfolio/eleven.jpg";
  let twelve = "/images/portfolio/twelve.jpg";
  let thirteen = "/images/portfolio/thirteen.jpg";
  let fourteen = "/images/portfolio/fourteen.jpg";
  let fifteen = "/images/portfolio/fifteen.jpg";
  let sixteen = "/images/portfolio/sixteen.jpg";
  let seventeen = "/images/portfolio/seventeen.jpg";
  let eighteen = "/images/portfolio/eighteen.jpg";

  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={eleven} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization in Islamabad,
                    Pakistan. Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={twelve} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization in Islamabad,
                    Pakistan. Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={fifteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization in Islamabad,
                    Pakistan. Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={sixteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization in Islamabad,
                    Pakistan. Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={seventeen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization in Islamabad,
                    Pakistan. Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={eighteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization in Islamabad,
                    Pakistan. Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={thirteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization in Islamabad,
                    Pakistan. Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={fourteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">
                    IT & AI Training and Development Organization & Tenancy Business in USA
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
