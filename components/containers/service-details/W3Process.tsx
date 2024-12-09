import React, { useState } from "react";

const W3Procss = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Web3 Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                working web3 develoment process
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Ideation and Planning</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Define Your Project Scope: Identify the problem your Web3
                    project will solve, set clear goals, and outline the key
                    features and functionalities.
                  </p>
                  <p>
                    Market Research: Analyze existing solutions, identify your
                    target audience, and gather insights to differentiate your
                    project.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>
                      Technology Stack Selection Choose Blockchain Platform
                    </h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Decide on the most suitable blockchain for your project
                    (e.g., Ethereum, Binance Smart Chain, Solana) based on
                    factors like scalability and transaction fees.
                  </p>
                  <p>
                    Select Development Tools: Pick the necessary frameworks,
                    libraries, and tools such as Truffle, Hardhat, and Web3.js
                    for efficient development.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Smart Contract Development Design Smart Contracts</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Draft the architecture of your smart contracts, defining the
                    logic, data structures, and interactions.
                  </p>
                  <p>
                    {" "}
                    Write and Test Contracts: Develop the smart contracts using
                    Solidity or another language, and rigorously test them using
                    tools like Remix and Truffle.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Frontend Development Build User Interface</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Create a responsive and user-friendly frontend using
                    frameworks like React.js or Vue.js to interact with your
                    smart contracts.
                  </p>
                  <p>
                    Integrate Web3: Connect your frontend with the blockchain
                    using libraries like Web3.js or Ethers.js to enable
                    blockchain transactions and data retrieval.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Deployment and Testing Deploy Smart Contracts</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Use tools like Truffle or Hardhat to deploy your smart
                    contracts to the chosen blockchain network.
                  </p>
                  <p>
                    Conduct Thorough Testing: Perform extensive testing,
                    including unit tests, integration tests, and end-to-end
                    tests, to ensure the robustness and security of your
                    application.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Launch and Maintenance Launch Your DApp</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Deploy your frontend and backend components, making your
                    decentralized application (DApp) available to users.
                  </p>
                  <p>
                    Monitor and Update: Continuously monitor the
                    application&apos;s performance, fix bugs, and implement
                    updates and improvements to enhance user experience and
                    security.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default W3Procss;
