import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";
import gsap from "gsap";

const AboutUs = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 0.3,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    }).from(
      titleSplit.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.5"
    );
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="bg-main-bg">
            <div className="hero-container bg-dark-brown">
              <img
                src="/images/about-us.webp"
                className="absolute top-0 left-1/2 -translate-x-1/2 object-auto md:w-full"
              />
              <div className="hero-content opacity-0">
                <div className="overflow-hidden mt-10">
                  <h1 className="hero-title text-milk">About Us</h1>
                </div>
                <div className="bg-dark-brown relative text-center md:mt-10 pb-10">
                  <h3 className="text-3xl">
                    WE'RE ON A MISSION TO END CHILD LABOR IN THE COCOA INDUSTRY.
                    <br /><br/>
                    At Feastables, ethical sourcing is at our core. Through our
                    three pillars, we help move kids out of cocoa fields and
                    into classrooms—driving our mission to eradicate child labor
                    in chocolate.
                    <br /><br/>
                    Feastables works exclusively with farms that actively
                    implement child labor monitoring + remediation systems
                    (CLMRS).<br/><br/> Child labor in cocoa production refers to
                    activities that are hazardous, exploitative, and detrimental
                    to the physical, mental, or moral well-being of children At
                    Feastables, we don’t think this is okay or should be
                    allowed. Enough is enough. We are committed to eradicating
                    child labor, starting with the cocoa farms that we work
                    with.
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
