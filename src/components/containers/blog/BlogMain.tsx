import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

const BlogMain = () => {
  let eight = "/images/news/eight.png";
  let nine = "/images/news/nine.png";
  let ten = "/images/news/ten.png";
  let eleven = "/images/news/eleven.png";
  let twelve = "/images/news/twelve.png";
  let thirteen = "/images/news/thirteen.png";
  let fourteen = "/images/news/fourteen.png";
  
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <section className="section blog-main fade-wrapper">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-xl-8">
              <div className="blog-main__content">
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image src={eight} alt="Image" />
                      </Link>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>Written by :</strong>
                          Marry biden
                        </p>
                        <span></span>
                        <p>10/01/2023</p>
                      </div>
                      <div className="meta__right">
                        <Link href="blog">Nature</Link>
                        <Link href="blog">Health</Link>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="blog-single">
                        Guide dog shortage: The blind people who train their
                      </Link>
                    </h4>
                    <p>
                      Daily Star News published on Feb 2nd, 2022, Sangbad
                      Protidin dated January 31st, 2022 and HRCBM&apos;s
                      investigation. Bangladesh again witnessing uptick in
                      violence against minorities in the country.
                    </p>
                    <div className="cta">
                      <Link href="blog-single">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image src={nine} alt="Image" />
                      </Link>
                      <div className="video-wrap">
                        <button
                          onClick={() => setVideoActive(true)}
                          title="video Player"
                          className="video-btn"
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </button>
                      </div>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>Written by :</strong>
                          Marry biden
                        </p>
                        <span></span>
                        <p>10/01/2023</p>
                      </div>
                      <div className="meta__right">
                        <Link href="blog">Nature</Link>
                        <Link href="blog">Health</Link>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="blog-single">
                        A team of scientists from NASA&apos;s Jet Propulsion
                      </Link>
                    </h4>
                    <p>
                      Daily Star News published on Feb 2nd, 2022, Sangbad
                      Protidin dated January 31st, 2022 and HRCBM&apos;s
                      investigation. Bangladesh again witnessing uptick in
                      violence against minorities in the country.
                    </p>
                    <div className="cta">
                      <Link href="blog-single">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-radio ">
                      <h4 className="h4">Insert Audio Title Here</h4>
                      <div className="radio">
                        <div className="audio-player">
                          <audio controls>
                            <source
                              src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                              type="audio/mp3"
                            />
                          </audio>
                        </div>
                      </div>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>Written by :</strong>
                          Marry biden
                        </p>
                        <span></span>
                        <p>10/01/2023</p>
                      </div>
                      <div className="meta__right">
                        <Link href="blog">Nature</Link>
                        <Link href="blog">Health</Link>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="blog-single">
                        There are also natural sources of methane - from
                      </Link>
                    </h4>
                    <p>
                      Daily Star News published on Feb 2nd, 2022, Sangbad
                      Protidin dated January 31st, 2022 and HRCBM&apos;s
                      investigation. Bangladesh again witnessing uptick in
                      violence against minorities in the country.
                    </p>
                    <div className="cta">
                      <Link href="blog-single">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pagination-wrapper">
                  <ul className="pagination">
                    <li>
                      <Link href="blog">01</Link>
                    </li>
                    <li>
                      <Link href="blog" className="active">
                        02
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">03</Link>
                    </li>
                    <li>
                      <button>
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="blog-main__sidebar">
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5">Search</h5>
                  </div>
                  <div className="widget-search">
                    <form action="#" method="post">
                      <div className="form-group-input">
                        <input
                          type="search"
                          name="blog-search"
                          id="blogSearch"
                          placeholder="Search here. . ."
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5">Categories</h5>
                  </div>
                  <div className="widget__list">
                    <ul>
                      <li>
                        <Link href="blog">Business</Link>
                      </li>
                      <li>
                        <Link href="blog">Job Market</Link>
                      </li>
                      <li>
                        <Link href="blog">Marketing</Link>
                      </li>
                      <li>
                        <Link href="blog">News</Link>
                      </li>
                      <li>
                        <Link href="blog">Social Media</Link>
                      </li>
                      <li>
                        <Link href="blog">Trends</Link>
                      </li>
                      <li>
                        <Link href="blog">Writing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <div className="widget__head">
                    <h5 className="h5">Recent Posts</h5>
                  </div>
                  <div className="widget__latest">
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={ten} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            Guide dog shortage: The blind peo ple who train
                            their own guide
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={eleven} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            Guide dog shortage: The blind peo ple who train
                            their own guide
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={twelve} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            Guide dog shortage: The blind peo ple who train
                            their own guide
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="latest-single ">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={thirteen} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>10/01/2023</p>
                        <p>
                          <Link href="blog-single">
                            Guide dog shortage: The blind peo ple who train
                            their own guide
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5">Tags</h5>
                  </div>
                  <div className="widget__tags">
                    <ul>
                      <li>
                        <Link href="blog">nature</Link>
                      </li>
                      <li>
                        <Link href="blog">health</Link>
                      </li>
                      <li>
                        <Link href="blog">galaxy</Link>
                      </li>
                      <li>
                        <Link href="blog">creative</Link>
                      </li>
                      <li>
                        <Link href="blog">art</Link>
                      </li>
                      <li>
                        <Link href="blog">business</Link>
                      </li>
                      <li>
                        <Link href="blog">space</Link>
                      </li>
                      <li>
                        <Link href="blog">biology</Link>
                      </li>
                      <li>
                        <Link href="blog">environemnt</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-big ">
                  <Link href="blog-single">
                    <Image src={fourteen} alt="Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
