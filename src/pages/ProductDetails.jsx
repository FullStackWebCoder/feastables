import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { productLists } from "../constants";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const params = useParams();

  const { productId } = params;

  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    productLists.forEach((item) => {
      if (item.id == productId) {
        setProduct(item);
        return;
      }
    });
  }, []);

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

  const buyChocolate = () => toast("Chocolate Bought Successfully");

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="bg-main-bg">
            <div className="hero-container bg-dark-brown">
              <div className="hero-content opacity-0">
                <h1 className="text-milk 2xl:text-[6.5rem] md:text-[4rem] text-[3rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] 2xl:mb-0 mb-5">
                  {product?.name}
                </h1>
                <div className="bg-dark-brown relative w-full mt-10 flex flex-col md:flex-row items-center justify-between">
                  <div className="basis-1/2 w-full flex-center">
                    <img
                      src={`/images/${product?.image}`}
                      alt=""
                      className="h-70 md:scale-125"
                    />
                  </div>
                  <div className="basis-1/2 bg-milk p-4 m-4 md:mt-0 md:mr-10 rounded-md">
                    <h2 className="text-center md:max-w-full max-w-sm md:text-3xl text-2xl font-bold leading-[115%] mb-4">
                      Nutrition & Ingredients
                    </h2>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {product?.nutrition.map((nutri) => (
                        <div className="col-center">
                          <p className="md:text-md font-paragraph text-center">
                            {nutri.name}
                          </p>
                          <p className="font-paragraph text-sm">up to</p>
                          <p className="text-lg md:text-xl tracking-tighter font-bold">
                            {nutri.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div onClick={buyChocolate} className="button text-center mt-6">Buy $35</div>
                  </div>
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

export default ProductDetails;
