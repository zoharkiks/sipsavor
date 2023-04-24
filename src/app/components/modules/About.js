"use client";

import React, { useLayoutEffect } from "react";

const About = () => {
  useLayoutEffect(() => {}, []);

  return (
    <section id="about" className="section theme-dark ">
      <div className="container">
        <div className="grid items-center grid-cols-2 p-4 center gap-x-20 gap-y-4 md:grid-cols-1 justify-items-start">
          <div className="w-[25rem] h-[25rem] md:w-[20rem] md:h-[20rem]">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80')] bg-cover bg-center bg-no-repeat "></div>
          </div>
          <div className="flex flex-col py-4 ">
            <h2 className="small">About Sip & Savor</h2>
            <p className="mt-10">
              Welcome to Sip & Savor Cafe, where exceptional coffee and
              flavorful food meet in a cozy and inviting atmosphere. We
              carefully source our beans and tea leaves to bring you the finest
              flavors, and our menu features fresh and locally sourced
              ingredients. Whether you're catching up with friends or getting
              some work done, our friendly staff is dedicated to making your
              visit enjoyable and memorable. Thank you for choosing Sip & Savor
              Cafe - we can't wait to serve you!
            </p>
            <p className="mt-6">
              At Sip & Savor Cafe, we believe in giving back to our community.
              That's why we partner with local organizations and charities to
              support their missions and make a positive impact. When you visit
              us, you can feel good knowing that you're not only enjoying
              delicious food and drinks but also contributing to a greater
              cause. We're proud to be a part of this vibrant community, and
              we're committed to making it a better place for everyone.
            </p>
            {/* <div className=" min-w-[7em] h-[4em] theme-nav-dark flex items-center overflow-hidden mt-4">
          <Button>Learn More</Button>

            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
