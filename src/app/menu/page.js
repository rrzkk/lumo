"use client";
import React, { useState } from "react"; // Import useState
import Accordion from "../components/Accordion";

import { itemsL, itemsB } from "../../data/items";

import BackgroundThree from "../components/backGroundThree";
import caterringMenu from "../components/caterringMenu";
export default function Menu() {
  const [isChecked, setIsChecked] = useState(true); // Initialize state

  const handleToggleChange = () => {
    setIsChecked(!isChecked); // Toggle the state value
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          zIndex: "0",
        }}
      >
        <BackgroundThree />
      </div>
      <div className="menu-outer">
        <div
          className={`menu-main ${
            isChecked ? "menu-main-tall" : "menu-main-short"
          }`}
          style={{ zIndex: "500" }}
        >
          {/** Normal Menu */}
          <div className="smallFoodToggle ">
            <div class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox hidden"
                checked={isChecked} // Use the state value
                onChange={handleToggleChange} // Update state on change
              />
              <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer"
              ></label>
            </div>

            {isChecked ? (
              <p style={{ fontWeight: "bolder", margin: "10px" }}>
                To Catering Menu
              </p>
            ) : (
              <p style={{ fontWeight: "bolder", margin: "10px" }}>
                To Normal Menu
              </p>
            )}
          </div>
          {isChecked && (
            <div className="foodMenu">
              <div className="normalMenu">
                <div className="basis-1/6   secTitile">All Day Breakfast</div>
                <div
                  className="basis-5/6 foodSection"
                  style={{ borderLeft: " 2px solid #34c759 " }}
                >
                  {/** Here We insert the accordion element */}
                  <div>
                    {itemsB.map((item) => (
                      <Accordion
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        imagePath={item.imagePath}
                      />
                    ))}
                  </div>
                  <br />
                </div>{" "}
              </div>
              <div className="normalMenu">
                <div className="basis-1/6  secTitile">Lunch</div>
                {/** Here is the Lunch Menu */}
                <div
                  className="basis-5/6 foodSection"
                  style={{ borderLeft: " 2px solid #34c759 " }}
                >
                  <div>
                    {itemsL.map((item) => (
                      <Accordion
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        imagePath={item.imagePath}
                      />
                    ))}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          )}
          {/**Caterring Menu */}
          {!isChecked && (
            <div className="foodMenu">
              <div className="normalMenu">
                {" "}
                <div className="basis-1/4 secTitile">Catering Menu</div>
                <div className="basis-3/4 foodSection">
                  {caterringMenu()}
                </div>{" "}
              </div>
            </div>
          )}
          <div className="foodToggle ">
            <div class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox hidden"
                checked={isChecked} // Use the state value
                onChange={handleToggleChange} // Update state on change
              />
              <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer"
              ></label>
            </div>

            {isChecked ? (
              <p style={{ fontWeight: "bolder", margin: "10px" }}>
                To Catering Menu
              </p>
            ) : (
              <p style={{ fontWeight: "bolder", margin: "10px" }}>
                To Normal Menu
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
