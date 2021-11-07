$(() => {
  $(".header").height($(window).height());
});
const projects = [
  {
    id: "photographyWebsite",
    name: "Photography Website",
    path: "",
    description:
      "Photography website used to display photographs in a gallery grid.",
    languages: [html, css],
    github: ""
  },
  {
    id: "streetWiseFood",
    name: "Street Wise Food",
    path: "",
    description: "Restaurant website landing page.",
    languages: [html, css],
    github: ""
  },
  {
    id: "portfolio",
    name: "Portfolio",
    path: "",
    description:
      "Portfolio landing page that lists my professional accomplishments.",
    languages: [html, css],
    github: "",
  },
  {
    id: "reachoutconsel",
    name: "ReachOut Consel",
    path: "",
    description:
      "Team project for a conselling service website.",
    languages: [html, css],
    github: "",
  }

];
// function to create an element
const makeElement = (element) => {
  return document.createElement(element);
};

const addAttribute = (element, attribute, value) => {
  element.setAttribute(attribute, value);
  return element;
};

//create a project card
const createProject = () => {
  let columnDiv = makeElement("div");
  addAttribute(columnDiv, "class", "col-12 col-lg-4 col-md-4 col-sm-12");
  let card = addAttribute(makeElement("div"), "class", "card");
  let cardImg = addAttribute(makeElement("div"), "class", "card-img");
  let projectImage = new Image();
  projectImage.src = "img/profile_pic.jpeg";
  projectImage.className = "img-fluid";
  let cardBody = addAttribute(makeElement("div"), "class", "card-body");
  let cardDesc = addAttribute(makeElement("div"), "class", "card-desc");
  let cardDescParagraph = makeElement("p");
  console.log("we are here");
  // cardDescParagraph.innerHtml="This is myfirstproject";
  let text = document.createTextNode("This is the real element");
  cardDescParagraph.appendChild(text);
  cardDesc.appendChild(cardDescParagraph);
  cardBody.appendChild(cardDesc);
  cardImg.appendChild(projectImage);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  columnDiv.appendChild(card);
  document.querySelector("#projects").appendChild(columnDiv);
};
console.log("before");
createProject();
