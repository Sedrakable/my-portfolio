import React from "react";

import * as langs from "./components/svgs/Langs";
import * as categories from "./components/svgs/Categories";

const customVariables: string[] = [
  "--black",
  "--bg-black",
  "--dark-gray",
  "--white",
  "--shadow",
];

type ColorModeType = { [key: string]: string };

const DarkMode: ColorModeType = {};

const LightMode: ColorModeType = {
  "--black": "hsl(220, 6%, 94%)",
  "--bg-black": "hsl(220, 6%, 96%)",
  "--dark-gray": "hsl(220, 6%, 98%)",
  "--white": "hsl(220, 6%, 24%)",
  "--shadow": "0px 0px 4px 4px rgba(0, 0, 0, 0.1)",
};

customVariables.forEach((vari) => {
  const rootElement = document.querySelector(":root");
  if (rootElement instanceof HTMLElement) {
    DarkMode[vari] = rootElement.style.getPropertyValue(vari);
  }
});

export const Colors = {
  dark: DarkMode,
  light: LightMode,
};

const github = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.24658C9.6255 2.24668 7.32849 3.0917 5.51999 4.63043C3.71149 6.16916 2.50953 8.3012 2.12916 10.6451C1.74879 12.9889 2.21485 15.3917 3.44393 17.4233C4.67301 19.455 6.58491 20.9831 8.83755 21.7341C9.33755 21.8216 9.52505 21.5216 9.52505 21.2591C9.52505 21.0216 9.51254 20.2341 9.51254 19.3966C7.00003 19.8591 6.35003 18.7841 6.15003 18.2216C5.9281 17.6745 5.5763 17.1897 5.12503 16.8091C4.77503 16.6216 4.27503 16.1591 5.11252 16.1466C5.4323 16.1813 5.73901 16.2926 6.00666 16.471C6.2743 16.6494 6.49499 16.8897 6.65003 17.1716C6.7868 17.4173 6.97071 17.6336 7.19122 17.8081C7.41173 17.9826 7.6645 18.1118 7.93506 18.1885C8.20562 18.2651 8.48864 18.2876 8.76791 18.2547C9.04717 18.2218 9.3172 18.134 9.56251 17.9966C9.6058 17.4882 9.83237 17.0129 10.2 16.6591C7.97503 16.4091 5.65003 15.5466 5.65003 11.7216C5.63597 10.7278 6.00271 9.76619 6.67503 9.03411C6.36931 8.17033 6.40508 7.2224 6.77503 6.38411C6.77503 6.38411 7.6125 6.1216 9.52503 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0494 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0762 16.901 14.26 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z"
        fill="black"
      />
    </svg>
  );
};

const linkedIn = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4701 2.00014H3.53006C3.33964 1.9975 3.15056 2.03239 2.97362 2.10282C2.79669 2.17326 2.63536 2.27786 2.49886 2.41065C2.36235 2.54344 2.25334 2.70182 2.17805 2.87675C2.10276 3.05167 2.06267 3.23972 2.06006 3.43014V20.5701C2.06267 20.7606 2.10276 20.9486 2.17805 21.1235C2.25334 21.2985 2.36235 21.4568 2.49886 21.5896C2.63536 21.7224 2.79669 21.827 2.97362 21.8975C3.15056 21.9679 3.33964 22.0028 3.53006 22.0001H20.4701C20.6605 22.0028 20.8496 21.9679 21.0265 21.8975C21.2034 21.827 21.3648 21.7224 21.5013 21.5896C21.6378 21.4568 21.7468 21.2985 21.8221 21.1235C21.8974 20.9486 21.9375 20.7606 21.9401 20.5701V3.43014C21.9375 3.23972 21.8974 3.05167 21.8221 2.87675C21.7468 2.70182 21.6378 2.54344 21.5013 2.41065C21.3648 2.27786 21.2034 2.17326 21.0265 2.10282C20.8496 2.03239 20.6605 1.9975 20.4701 2.00014ZM8.09006 18.7401H5.09006V9.74014H8.09006V18.7401ZM6.59006 8.48014C6.17632 8.48014 5.77953 8.31578 5.48697 8.02323C5.19442 7.73067 5.03006 7.33388 5.03006 6.92014C5.03006 6.5064 5.19442 6.10961 5.48697 5.81705C5.77953 5.5245 6.17632 5.36014 6.59006 5.36014C6.80975 5.33522 7.03224 5.35699 7.24293 5.42402C7.45363 5.49105 7.6478 5.60183 7.81272 5.7491C7.97763 5.89637 8.10958 6.07682 8.19993 6.27862C8.29028 6.48043 8.33698 6.69904 8.33698 6.92014C8.33698 7.14124 8.29028 7.35985 8.19993 7.56166C8.10958 7.76346 7.97763 7.94391 7.81272 8.09118C7.6478 8.23845 7.45363 8.34923 7.24293 8.41626C7.03224 8.48329 6.80975 8.50505 6.59006 8.48014ZM18.9101 18.7401H15.9101V13.9101C15.9101 12.7001 15.4801 11.9101 14.3901 11.9101C14.0527 11.9126 13.7242 12.0184 13.4489 12.2133C13.1735 12.4082 12.9645 12.6828 12.8501 13.0001C12.7718 13.2352 12.7379 13.4827 12.7501 13.7301V18.7301H9.75006C9.75006 18.7301 9.75006 10.5501 9.75006 9.73014H12.7501V11.0001C13.0226 10.5272 13.419 10.1377 13.8965 9.87334C14.374 9.60902 14.9146 9.47999 15.4601 9.50014C17.4601 9.50014 18.9101 10.7901 18.9101 13.5601V18.7401Z"
        fill="black"
      />
    </svg>
  );
};

export const Icons = [
  {
    comp: linkedIn(),
    href: "https://www.linkedin.com/in/sedrak-n/",
  },
  {
    comp: github(),
    href: "https://github.com/Sedrakable",
  },
];

// const importAll = (require) => {
//   const imgs = [];
//   require.keys().reduce((_, next) => {
//     imgs.push(require(next));
//   }, {});
//   return imgs;
// };

type VideoProps = {
  src: string;
};

const Video = ({ src }: VideoProps) => {
  return (
    <video autoPlay controls>
      <source src={src} type="video/mp4" />
    </video>
  );
};

const Youtube = ({ src }: VideoProps) => {
  return (
    <iframe
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export interface CardType {
  title: string;
  folder?: string;
  description?: JSX.Element;
  shortDesc?: string;
  langs?: [JSX.Element, string][];
  view?: string;
  code?: string;
  video?: JSX.Element;
  hasThumb?: boolean;
}

const animalGangdom: CardType = {
  title: "Animal Gangdom",
  folder: "animalGangdom",
  description: (
    <span>
      <strong></strong>
      In 2021, I chose to design a playing card deck named{" "}
      <strong>Animal Gangdom</strong>, under the banner of{" "}
      <strong>Vostok Cards</strong>. After dedicating months to its creation,
      going from pen and paper to digital, using <strong>Illustrator</strong>,
      my initial step in sharing this deck with the world was through{" "}
      <strong>Kickstarter</strong>. The Kickstarter campaign was a triumph,
      gathering <strong>$4,200</strong> in funding. Through that experience I
      learned the basics of <strong>marketing, promotion, shipping</strong> and
      most importnantly <strong>management</strong>. At present, the Animal
      Gangdom deck is available for purchase on both{" "}
      <strong>Etsy and Amazon.</strong>
      <br />
      <br />
      To see the Kickstarter campaign and all the details, simply click the
      <strong>"Visit"</strong> button below.
    </span>
  ),
  shortDesc: "Raised $4,200",
  view:
    "https://www.kickstarter.com/projects/vostokcards/vostok-cards-animal-gangdom/",
};

const steampunk: CardType = {
  title: "Steampunk Dynasty",
  folder: "steampunk",
  description: (
    <span>
      With my second deck, <strong>Steampunk Dynasty</strong>, and its{" "}
      <strong>Kickstarter</strong> campaign, I took things up a notch. The
      deck's design got a detail upgrade, offering four distinct color choices
      to suit different tastes. I also introduced a range of add-ons, like{" "}
      <strong>
        stickers, bookmarks, a custom storage box for four decks, an artbook
      </strong>
      , and the crowning jewel – a full-length <strong>novel</strong>, crafted
      in collaboration with a talented <strong>writer</strong>, breathing life
      into the Steampunk Dynasty universe. My role was quite versatile. Besides
      handling creative aspects, I managed{" "}
      <strong>marketing and social media</strong>. To ensure a top-notch
      campaign, I expanded my skill set, mastering tools like{" "}
      <strong>Blender</strong> for visuals and honing my marketing expertise.
      Within our dynamic <strong>three-person team</strong>, I played a pivotal
      role in setting clear expectations and deadlines, using{" "}
      <strong>Notion</strong> to streamline our successful Kickstarter journey.
      Incredibly, our Kickstarter raised a total of <strong>16,000$</strong>,
      surpassing our initial 12,000$ goal and making this journey even more
      extraordinary.
      <br />
      <br />
      To see the Kickstarter campaign and all the details, simply click the
      <strong>"Visit"</strong> button below.
    </span>
  ),
  shortDesc: "Raised $16,000",
  hasThumb: true,
  view:
    "https://www.kickstarter.com/projects/vostokcards/steampunk-dynasty-gears-and-glory",
};

const vostokCards: CardType = {
  title: "Vostok Cards",
  folder: "vostok",
  description: (
    <>
      A website that displays playing card products
      <ul>
        <li>
          This website was created for my company vostok cards to display all
          the productsand to redirect to relevant websites
        </li>
        <li>
          Coding langauges and framework used were:
          <strong> React, Typescript, Next, SCSS</strong>
        </li>
        <li>
          Version control was done trough <strong>Git</strong> &
          <strong>GitHub</strong>
        </li>
        <li>
          The draft was built through <strong>Figma</strong>
        </li>
      </ul>
    </>
  ),
  langs: [
    [langs.TS(), "TS"],
    [langs.ReactSVG(), "React"],
    [langs.Next(), "Next"],
    [langs.SCSS(), "SCSS"],
    [langs.HTML(), "HTML"],
    [langs.Git(), "Git"],
    [langs.VScode(), "VS code"],
  ],
  view: "http://vostokcards.com",
  code: "https://github.com/Sedrakable/vostokCards",
  hasThumb: true,
};

const waitist: CardType = {
  video: <Youtube src="https://www.youtube.com/embed/MSlCtJjQQbo?start=934" />,
  title: "Waitist",
  folder: "waitist",
  description: (
    <>
      An app that connects waiters and restaurant owners.
      <ul>
        <li>
          Coding langauges used were:
          <strong>Ruby, Javascript, HTML, CSS, SCSS and SQL</strong>
        </li>
        <li>
          Created in a <strong>team</strong> of 4
        </li>
        <li>
          Tasks were assigned using <strong>Trello</strong> and comunication was
          done though <strong>Slack</strong>
        </li>
        <li>
          Version control was done trough <strong>Git</strong> &
          <strong>GitHub</strong>
        </li>
        <li>
          The draft was built through <strong>Figma</strong>
        </li>
        <li>
          The app was built using the <strong>Ruby on Rails framework</strong>
        </li>
      </ul>
    </>
  ),
  langs: [
    [langs.Rails(), "Ruby on Rails"],
    [langs.JS(), "JS"],
    [langs.SCSS(), "SCSS"],
    [langs.SQL(), "SQL"],
    [langs.Bootstrap(), "Bootstrap"],
    [langs.HTML(), "HTML"],
    [langs.Figma(), "Figma"],
    [langs.Git(), "Git"],
    [langs.Heroku(), "Heroku"],
    [langs.Trello(), "Trello"],
    [langs.VScode(), "VS code"],
    [langs.Slack(), "Slack"],
  ],
  view: "http://waitist.click/",
  code: "https://github.com/gch90/WAITIST",
  hasThumb: true,
};

const pets2Go: CardType = {
  title: "Pets2Go",
  folder: "pets2go",
  description: (
    <>
      An app that lets pet owners rent out their pets and for people to rent
      those pets. An Airbnb clone.
      <ul>
        <li>
          Coding langauges used were:
          <strong>Ruby, Javascript, HTML, CSS, SCSS and SQL</strong>
        </li>
        <li>
          Created in a <strong>team</strong> of 4
        </li>
        <li>
          Tasks were assigned using <strong>Trello</strong> and comunication was
          done though <strong>Slack</strong>
        </li>
        <li>
          Version control was done trough <strong>Git</strong> &
          <strong>GitHub</strong>
        </li>
        <li>
          The app was built using the <strong>Ruby on Rails framework</strong>
        </li>
      </ul>
    </>
  ),
  langs: [
    [langs.Rails(), "Ruby on Rails"],
    [langs.JS(), "JS"],
    [langs.SCSS(), "SCSS"],
    [langs.SQL(), "SQL"],
    [langs.Bootstrap(), "Bootstrap"],
    [langs.HTML(), "HTML"],
    [langs.Git(), "Git"],
    [langs.Heroku(), "Heroku"],
    [langs.Trello(), "Trello"],
    [langs.VScode(), "VS code"],
    [langs.Slack(), "Slack"],
  ],
  view: "https://pets-2-go.herokuapp.com/",
  code: "https://github.com/MarMcG/pets_2_go",
  hasThumb: true,
};

const plazmaPong: CardType = {
  video: <Youtube src="https://www.youtube.com/embed/UayT-DkgXOk" />,
  title: "Plazma Pong",
  folder: "plazma",
  description: (
    <>
      An app that lets pet owners rent out their pets and for people to rent
      those pets. An Airbnb clone.
      <ul>
        <li>
          Coded with <strong>C#</strong>, using the 2D Unity engine
        </li>
        <li>
          Art was made with <strong>Illustrator</strong>
        </li>
        <li>
          Currently on the <strong>Play Store</strong>
        </li>
      </ul>
    </>
  ),
  langs: [
    [langs.Unity(), "Unity"],
    [langs.CSharp(), "C#"],
    [langs.VScode(), "VS code"],
    [langs.Illustrator(), "Illustrator"],
  ],
  view: "https://play.google.com/store/apps/details?id=com.Ree.BallGame",
  hasThumb: true,
};

const mtrixReducer: CardType = {
  video: <Video src={"https://ik.imagekit.io/sedrakable/matrix/video.mp4"} />,
  title: "Matrix Reducer",
  folder: "matrix",
  description: (
    <>
      This CardType is inspired by linear algebra. The Reducer is able to reduce
      any Matrix up to 10x10, while showing every step of the prossedure to the
      user.
      <ul>
        <li>
          Coded with <strong>Java</strong>,<strong>JavaFX</strong>&
          <strong>CSS</strong>, using
          <strong>Netbeans</strong>
        </li>
        <li>
          Art was made with <strong>Piskel</strong>, a pixel art creation tool
        </li>
      </ul>
    </>
  ),

  langs: [
    [langs.Java(), "Java"],
    [langs.CSS(), "CSS"],
    [langs.JavaFX(), "Java FX"],
    [langs.Piskel(), "Piskel"],
  ],
};

const trafficSimulator: CardType = {
  video: <Video src={"https://ik.imagekit.io/sedrakable/traffic/video.mp4"} />,
  title: "Traffic Simulator",
  folder: "traffic",
  description: (
    <>
      Simulates simple traffic physics and logic
      <ul>
        <li>
          Coded with <strong>Java</strong>,<strong>JavaFX</strong>&
          <strong>CSS</strong>, using
          <strong>Netbeans</strong>
        </li>
        <li>
          Art was made with <strong>Piskel</strong>, a pixel art creation tool
        </li>
      </ul>
    </>
  ),

  langs: [
    [langs.Java(), "Java"],
    [langs.CSS(), "CSS"],
    [langs.JavaFX(), "Java FX"],
  ],
};

export const projectContent: CardType[] = [
  vostokCards,
  waitist,
  pets2Go,
  plazmaPong,
  mtrixReducer,
  trafficSimulator,
];

export const kickContent: CardType[] = [steampunk, animalGangdom];

export type ArtCardType = CardType & { multiple?: boolean };

interface CategoryType {
  title: string;
  folder: string;
  svg: JSX.Element;
  arts: ArtCardType[];
}
const origami: CategoryType = {
  title: "Origami",
  folder: "origami",
  svg: categories.Origami(),
  arts: [
    {
      title: "Turtle",
      multiple: true,
    },
    {
      title: "Blue Star",
    },
    {
      title: "Celtic",
      multiple: true,
    },
    {
      title: "Circle Shell",
      multiple: true,
    },
    {
      title: "Shell",
    },
    {
      title: "Spider",
    },
    {
      title: "Lion",
    },
    {
      title: "Lizzard",
    },
    {
      title: "Scorpion",
    },
    {
      title: "Pigion",
    },
    {
      title: "Rat",
    },
    {
      title: "Dragon",
    },
    {
      title: "Griffin",
    },
    {
      title: "Fish",
    },
    {
      title: "Frog",
    },
    {
      title: "Cactus",
    },
    {
      title: "Crown",
    },
    {
      title: "Yoda",
    },
    {
      title: "Jester",
    },
    {
      title: "Self Fold",
    },
    {
      title: "Match Box",
    },
    {
      title: "Greek Icosahedron",
    },
  ],
};

const digital: CategoryType = {
  title: "Digital",
  folder: "digital",
  svg: categories.Digital(),
  arts: [
    {
      title: "Concordia",
      multiple: true,
    },
    {
      title: "Boris Army",
      multiple: true,
    },
    // {
    //   image_title: "Allexiane",
    //   image_format: "jpg",
    //   image_amount: 1,
    // },
    {
      title: "Barrel Beast",
    },
  ],
};

const draw: CategoryType = {
  title: "Draw",
  folder: "draw",
  svg: categories.Draw(),
  arts: [
    {
      title: "Pinecone",
    },
    {
      title: "Metal",
    },
    {
      title: "Sculls",
    },
    { title: "Wood" },
  ],
};

const paint: CategoryType = {
  title: "Paint",
  folder: "paint",
  svg: categories.Paint(),
  arts: [
    {
      title: "Red Paper",
    },
    {
      title: "Lemons",
    },
    {
      title: "My Logo",
      multiple: true,
    },
  ],
};
export const Categories = [origami, digital, draw, paint];
