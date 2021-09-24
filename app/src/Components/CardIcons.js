import CardIcon from "./CardIcon";
import React from "react";

// Icons
import icon1 from "../pics/icon1.png";
import icon2 from "../pics/icon2.png";
import icon3 from "../pics/icon3.png";

function CardIcons() {
  const infos = [
    {
      icon: icon1,
      title: "Organic",
      text: "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    },
    {
      icon: icon2,
      title: "Made in Nepal",
      text: "Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain, bordering",
    },
    {
      icon: icon3,
      title: "Lab Tasted",
      text: "I like to save my bookmarks using an amazing extension called Raindrop that has a possibility to share bookmarks with friends, customize and Raindrop that has a possibility to share bookmarks with friends, customize and ",
    },
  ];
  return (
    <div className="flex justify-around relative sm:flex-row flex-col py-5">
      {infos.map((item) => (
        <CardIcon icon={item.icon} text={item.text} title={item.title} />
      ))}
    </div>
  );
}

export default CardIcons;
