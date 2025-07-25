import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {
          <>
            {isMobile ? (
              <img
                src="/images/Chocolate_PB_60g_Carton.webp"
                className="absolute bottom-0 w-full object-cover"
              />
            ) : (
              <img
                src="/images/hero.webp"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
              />
            )}
          </>
        }
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Feastables</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Cookies & Creme</h1>
            </div>
          </div>

          <h2>
            At Feastables, ethical sourcing is at our core. Through our three
            pillars, we help move kids out of cocoa fields and into
            classrooms—driving our mission to eradicate child labor in
            chocolate.
          </h2>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Link to="/products">
              <div className="button mt-4">
                <p>Explore More</p>
              </div>
            </Link>

            <Link to="/about">
              <div className="button mt-4">
                <p>About Us</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
