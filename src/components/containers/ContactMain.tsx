import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "../../../public/images/phone.png";
import mail from "../../../public/images/mail.png";
import location from "../../../public/images/location.png";
import time from "../../../public/images/time.png";
import form  from "../../../public/images/form.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone & Fax</h4>
                <p>
                  <Link href="tel:197-90-56-780">Mobile : +92-3335512815</Link>
                </p>
                <p>
                  <Link href="tel:197-90-56-780">Fax : +92-51-11234567</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:info.company@gmail.com">
                    Info.realitai@gmail.com
                  </Link>
                </p>
                <p>
                  <Link href="mailto:info.company@gmail.com">
                    Info@realitai.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://www.google.com/maps/place/DHA+Phase+II,+Islamabad,+Islamabad+Capital+Territory,+Pakistan/@33.5276785,73.1320844,14z/data=!3m1!4b1!4m6!3m5!1s0x38dfed8dabf00f19:0xb812318c3025e7a!8m2!3d33.5368355!4d73.1644628!16s%2Fg%2F1vb9bfhl?entry=ttu"
                    target="_blank"
                  >
                    DHA Phase-2 Islamabad, Pakistan
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Sun - Thu 09 am - 06pm</p>
                <p>Fri - Sat 4 pm - 10pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <ul className="contact-main__form  fade-top">
                      <li className="">
                        <h4>General&nbsp;enquiry</h4>
                      </li>
                      <li className="row gape">
                        <Link href="../../pages/contact-us.tsx">
                          Sales enquiry
                        </Link>
                      </li>
                      <li className="">
                        <Link href="../../pages/contact-us.tsx">
                          Media enquiry
                        </Link>
                      </li>
                      <li className="">
                        <Link href="../../pages/contact-us.tsx">
                          Download enquiry
                        </Link>
                      </li>
                      <li className="form-cta justify-content-start">
                        <button
                          type="submit"
                          className="btn btn--primary pt-10"
                        >
                          Get A Qute
                        </button>
                      </li>
                    </ul>
                    <div>
                    <Image src={form} alt="Image" />
                    </div>

                    {/* <iframe
                      src="/src/components/containers/RegisterForm.tsx"
                      width="100"
                      height="600"
                      style={{ border: "10px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form  fade-top">
                    <h3
                      style={{ marginLeft: 50, padding: 10, borderRadius: 6 }}
                    >
                      General Enquiry
                    </h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="First Name"
                          />
                        </div>

                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select className="subject">
                          <option data-display="Subject">Subject</option>
                          <option value="1">Account</option>
                          <option value="2">Service</option>
                          <option value="3">Pricing</option>
                          <option value="4">Support</option>
                        </select>
                      </div>

                      <div className="group-input ">
                        <input
                          type="email"
                          name="contact-email"
                          id="contactEmail"
                          placeholder="Email"
                        />
                      </div>
                      <div className="group-input ">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
