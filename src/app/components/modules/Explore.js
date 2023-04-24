import React from "react";
import { Button } from "../common";
import Gallery from "./Gallery";

const Explore = () => {
  return (
    <section
      id="explore"
      className="pb-0 section theme-dark rounded-b-[var(--border-radius)] z-10 "
    >
      <div className="container">
        <div className="">
          <h2 className="uppercase small">
            Behind<span>☕</span>each of our cups hides an amazing
            <span>❣️</span>surprise
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-20 md:grid-cols-1">
        <div className="h-[25rem] bg-opacity-20  bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] bg-cover bg-center bg-no-repeat flex flex-col justify-between px-6 pt-14 pb-4">
          <h3 className="w-1/2 uppercase">Speciality Coffee Assortments</h3>
          <div className="flex justify-end theme-nav-dark">
            <Button>Discover</Button>
          </div>
        </div>
        <div className=" bg-[url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] bg-cover bg-center bg-no-repeat px-6 pt-14 pb-4 flex flex-col h-[25rem] justify-between">
          <h3 className="w-1/2 uppercase">Speciality Coffee Assortments</h3>
          <div className="flex justify-end theme-nav-dark">
            <Button>Discover</Button>
          </div>
        </div>
      </div>

      <Gallery />

      <div id="contact" className="container ">
        <div className="flex flex-col items-start justify-center">
          <p className="trigger">
            <strong>Sip & Savor Cafe</strong>
          </p>
          <p>
            <span className="after:content-[',']">Bundla</span>
            <span className="after:content-[',']"> Palampur</span>
            <span className="after:content-[',']"> Himachal Pradesh</span>
            <span className=""> 176061</span>
          </p>

          <p>
            <a href="tel:+918580717583">+91 81407 36454</a>
          </p>

          <p>
            <a href="mailto:info@cliffys.com">info@sip&savor.com</a>
          </p>
        </div>
      </div>
      <div className="w-full bg-[var(--color-accent)] rounded-b-[var(--border-radius)] h-20 mt-10"></div>
    </section>
  );
};

export default Explore;
