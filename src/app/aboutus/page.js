"use client";
import React from "react"; // Import useState

import BackgroundThree from "../components/backGroundThree";

export default function aboutus() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div
        style={{
          position: "absolute",
          height: "300vh",
          width: "100vw",
          zIndex: "0",
        }}
      >
        <BackgroundThree />
      </div>
      <div className="about-us" style={{ zIndex: "500" }}>
        <div className="about-us-inner">
          <div className="about-us-section">
            <div className="basis-2/5 flex justify-center content-center ">
              <img
                class="h-auto max-w-lg rounded-3xl	"
                src="/LUMOS-1.jpg"
                alt="image description"
              />
            </div>
            <div className="basis-3/5 flex  justify-center content-center">
              <p className="w-2/3 text-lg font-semibold">
                The word "Lumos" comes from Harry Potter - a charm that
                illuminated the tip of the caster’s wand, allowing the caster to
                see in the dark. The idea of a bright light that led the way
                appealed to us.
              </p>
            </div>
          </div>
          <div className="about-us-section">
            <div className="basis-3/5 flex justify-center content-center">
              <p className="w-2/3 text-lg font-semibold">
                Quality coffee & food can brighten your day, and a quality
                espresso bar can brighten the world. Born from a mission to
                pioneer what is possible in an industry moving at incredible
                speed, Lumos is positioned to light the way.
              </p>
            </div>
            <div className="basis-2/5 flex justify-center content-center">
              <img
                class="h-auto max-w-lg rounded-3xl	"
                src="/LUMOS-2.jpg"
                alt="image description"
              />
            </div>
          </div>
          <div className="about-us-section">
            <div className="basis-2/5 flex justify-center content-center">
              <img
                class="h-auto max-w-lg rounded-3xl	"
                src="/LUMOS-3.jpg"
                alt="image description"
              />
            </div>
            <div className="basis-3/5 flex justify-center content-center">
              <p className="w-2/3 text-lg font-semibold">
                Leaving no part of our process in the shadows, our sustainable
                approach shines a light on every person, product, and piece of
                packaging involved from crop to cup. We embrace a responsibility
                to deliver a transcendent sensory experience, whilst ensuring
                our state-of-the-art setup and approach creates a better world
                and lightens your day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
