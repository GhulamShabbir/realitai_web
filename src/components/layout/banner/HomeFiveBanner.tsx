import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//frompublic
 let nine = "/images/projects/nine.png";

//frompublic
 let ten = "/images/projects/ten.png";

//frompublic
 let eleven = "/images/projects/eleven.png";

//frompublic
 let twelve = "/images/projects/twelve.png";

//frompublic
 let thirteen = "/images/projects/thirteen.png";

gsap.registerPlugin(ScrollTrigger);
const HomeFiveBanner = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".banner-five__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <div className="banner-five" ref={slider}>
      <div className="banner-five__wrapper">
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={nine} width={200} height={200} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={ten} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={eleven} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={twelve} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={thirteen} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={nine} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={ten} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={eleven} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={twelve} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="banner-five__single">
          <div className="projects-s__single topy-tilt">
            <div className="thumb">
              <Link href="project-single">
                <Image src={thirteen} alt="Image" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link href="project-single">Kaizen Psychology</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFiveBanner;
