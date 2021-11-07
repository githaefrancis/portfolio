$(() => {
  $(".header").height($(window).height());
});

// import a list of projects
const projects = require('./projects.json');
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
