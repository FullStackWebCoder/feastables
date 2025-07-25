import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".footer-section .general-title", {
      type: "chars",
    });
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
    footerTl.from(titleSplit.chars, {
      yPercent: 100,
      stagger: 0.02,
      ease: "power2.out",
    });
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #FEASTABLES
          </h1>
        </div>

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <a
              href="https://www.youtube.com/@FeastablesOfficial"
              target="_blank"
            >
              <img src="./images/yt.svg" alt="" />
            </a>
          </div>
          <div className="social-btn">
            <a href="https://www.instagram.com/feastables" target="_blank">
              <img src="./images/insta.svg" alt="" />
            </a>
          </div>
          <div className="social-btn">
            <a href="https://www.tiktok.com/@feastables" target="_blank">
              <img src="./images/tiktok.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>Feastables</p>
            </div>
            <div>
              <p>Contacts</p>
              <p>Text FEAST to 69420</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 Feastables - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
