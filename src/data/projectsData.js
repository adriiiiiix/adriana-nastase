import Forkify from "../assets/images/portfolio/Forkify.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";

const projectsData = [
  {
    id: "bankist",
    img: Bankist,
    name: "Bankist",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankistbank.vercel.app/",
    source: "https://github.com/adriiiiiix/bankist",
    description:
      "Bankist - Bankist is a fictional online bank. It is a project introduced by Jonas Schmedtmann in order to practice DOM manipulation and user interaction. Bankist has the option to log in to the account and use different functionalities, almost like in an actual bank.",
  },
  {
    id: "forkify",
    img: Forkify,
    name: "Forkify",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://forkifyrecipe.vercel.app/",
    source: "https://github.com/adriiiiiix/forkify",
    description:
      "Forkify - A delicious journey through food. This vanilla JavaScript application explores the world of recipe food data, interacting with the Forkify API to fetch and display information. Search for your favorite recipes, save them to a favorites list and easily adjust servings to fit your needs.",
  },
];

export { projectsData };
