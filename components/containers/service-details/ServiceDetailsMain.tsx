import React from "react";
import Image from "next/image";
import thumbone from "../../../public/images/service/thumb-one.png";
import thumbtwo from "../../../public/images/service/thumb-two.png";

const ServiceDetailsMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Image" className="opacity-50" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Expert Web3 Development</h3>
                  <p>
                    As a seasoned Web3 development firm, we specialize in
                    crafting and deploying dynamic Web3 solutions that leverage
                    blockchain, artificial intelligence, IoT, and cryptographic
                    technologies. Our team of developers, proficient in Web3
                    tools, frameworks, APIs, oracles, and programming languages
                    such as Rust and Solidity, serves a wide array of industries
                    including gaming, real estate, and fintech.
                  </p>
                  <p>
                    Our commitment to innovation ensures that we stay ahead of
                    the curve, constantly integrating the latest advancements to
                    enhance functionality and security. Whether you&apos;re
                    looking to develop decentralized applications (dApps),
                    create smart contracts, or explore the potential of NFTs,
                    our comprehensive services are designed to meet your
                    specific needs and drive your business forward in the
                    evolving digital landscape.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">
                          Crafting Cutting-Edge Web3 Solutions for the
                          Decentralized Era
                        </h3>
                        <p>
                          From decentralized finance (DeFi) platforms,
                          decentralized autonomous organizations (DAOs), and NFT
                          marketplaces to metaverse environments, crypto tokens,
                          wallets, and blockchain bridges, we create a wide
                          range of Web3 solutions that enable businesses to
                          excel in the decentralized digital realm. Our
                          methodology includes rigorous compliance with industry
                          standards and regulatory requirements, ensuring that
                          the solutions we deliver uphold the utmost levels of
                          security, scalability, and interoperability.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Image" />
                      </div>
                    </div>
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

export default ServiceDetailsMain;
