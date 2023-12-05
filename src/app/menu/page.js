"use client";
import React, { useState } from "react"; // Import useState

import { Card } from "flowbite-react";
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
        <div className="menu-main " style={{ zIndex: "500" }}>
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
                  <p style={{ fontWeight: "bold" }}>
                    Acai Bowl (V, GF, DF, ) 17
                  </p>
                  <p>
                    100% organic Acai topped with fresh seasonal fruits &
                    berries, gluten free granola w/ coconut water
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>
                    Classic Bacon & Egg Roll 13
                  </p>
                  <p>
                    Grilled bacon, fried egg, hashbrown, aioli & BBQ sauce on
                    milk bun
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Signature Omelete</p>
                  <p>Tomato, baby spinach, onion with toast 14.5</p>
                  <p> w Ham or Bacon 17.5</p>
                  <p> w Smoked Salmon 18.5</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Eggs Benedict 19</p>
                  <p>
                    Poached eggs, bacon (or smoked salmon) & baby spinach on
                    sourdough with miso hollandaise sauce
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>BLAT 16</p>
                  <p>
                    Grilled rindless bacon, mixed lettuce, crushed avocado,
                    tomato w/aioli on Turkish
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>
                    Chilli Scrambled Eggs 17.5{" "}
                  </p>
                  <p>
                    Cherry tomato, baby spinach, XO sauce, chilli oil, garnish
                    with chilli flake & fresh chilli
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Eggs Your Way 14 </p>
                  <p>Two eggs as your way w/ sourdough toast</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>
                    Crushed Avo Stack (V,RSF) 16
                  </p>
                  <p>
                    Crushed avocado, fetta cheese, cherry tomato & rocket on
                    lightly toasted turkish w/vinaigrette dressing
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>
                    Truffle Mushroom Avo Bruschetta (V) 20
                  </p>
                  <p>
                    Sauteed mushrooms, avocado, onion, truffle butter, fetta,
                    poached egg on toasted turkish bread
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>
                    Green Island Fritter (V) 16.5
                  </p>
                  <p>
                    Grilled homemade corn fritters, poached egg, crushed
                    avocado, tomato relish, tomato salsa and charred kale{" "}
                  </p>
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
                  <p style={{ fontWeight: "bold" }}>
                    Chicken Halloumi Salad 18
                  </p>
                  <p>
                    Grilled Chicken breast, halloumi, mesculin mix, cucumber,
                    radicchio, smashed avo, corn chips, Cherry tomato with
                    French dressing
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Lets Taco ‘bout Fish 19</p>
                  <p>
                    Crispy hoki, mixed salad, homemade mango salsa, tartare
                    sauce on flour tortillas
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Fish & Chips 18 </p>
                  <p>Crispy Hoki with steakhouse chips</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Fried Halloumi Burger 20</p>
                  <p>
                    Crispy halloumi cheese, coleslaw, bbq sauce, sliced tomato
                    and crispy onion on milk bun with steakhouse chips
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Angel Bay Beef Burger 20</p>
                  <p>
                    Homemade beef patty, bacon, cheese, pickled cucumber, aioli,
                    mixed salad, tomato, onion on brioche with steakhouse chips
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>
                    Southern Chicken Burger 20
                  </p>
                  <p>
                    Lettuce, cucumber pickles, red pickles, cheese, chipotle
                    mayo on brioche with steakhouse chips
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Fish Burger 20</p>
                  <p>
                    Crispy Hoki, lettuce, cucumber pickles, tomato, siracha mayo
                    on brioche with steakhouse chips
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Schitzel sandwich 16.5</p>
                  <p>Lettuce, tomato, aioli on Turkish bread</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Pancakes berries 18</p>
                  <p>Yoghurt berry, berries and raspberry coulis</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Bowl of chips 8</p>
                  <p>with aioli & tomato sauce</p>
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
