import React from "react";
import NavBar from "../components/NavBar";
import FooterSection from "../sections/FooterSection";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { flavorlists, productLists } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {

  const navigate = useNavigate()

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

  const productHandler = (product)=>{
    navigate(`/product/${product.id}`)
  }

  const buyChocolate = () => toast("Chocolate Bought Successfully");
  
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="bg-main-bg">
            <div className="hero-container bg-dark-brown">
              <div className="hero-content opacity-0">
                <div className="overflow-hidden mt-10">
                  <h1 className="hero-title text-milk">All Chocolates</h1>
                </div>
                <div className="bg-dark-brown relative mt-10 pb-40 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:ml-10 md:mr-10">
                  {productLists.map((product)=>(
                    <div key={product.name} className="bg-milk rounded-lg ml-4 mr-4 hover:scale-105 transition col-center">
                      <img
                        onClick={()=>productHandler(product)}
                        src={`/images/${product.image}`}
                        alt=""
                        className="h-70 p-4 cursor-pointer"
                      />
                      <h2 className="text-2xl">{product.name}</h2>
                      <div onClick={buyChocolate} className="button text-center m-4">Buy ${product.price}</div>
                    </div>
                  ))}
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

export default ProductList;
