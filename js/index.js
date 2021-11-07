

$(() => {
  $(".header").height($(window).height());
});

var projectsList=[];

// import a list of projects

  try{
    fetch('js/projects.json')
    .then(response=>response.json())
    .then(data=>setProjectList(data))
    }  
    
  
  catch{
  
    projectsList = require('./projects.json');
  
    }
    


const setProjectList=(data)=>{
  console.log(data)
  projectsList=data;
  console.log(projectsList);

  projectsList.forEach(element => {
    console.log(element);
  });
}


// function to create an element
const makeElement = (element) => {
  return document.createElement(element);
};

const addAttribute = (element, attribute, value) => {
  element.setAttribute(attribute, value);
  return element;
};

//create a project card
const createProject = (id,imgUrl,title,description,githubLink) => {
  let columnDiv = makeElement("div");
  addAttribute(columnDiv, "class", "col-12 col-lg-4 col-md-4 col-sm-12");
  let card = addAttribute(makeElement("div"), "class", "card");
  let cardImg = addAttribute(makeElement("div"), "class", "card-img");
  let projectImage = new Image();
  projectImage.src = "img/profile_pic.jpeg";
  projectImage.className = "img-fluid";
  let cardBody = addAttribute(makeElement("div"), "class", "card-body");
  let cardDesc = addAttribute(makeElement("div"), "class", "card-desc");
  let cardFooter = addAttribute(makeElement("div"), "class", "card-footer");
  let cardDescParagraph = makeElement("p");
  let footerButton=addAttribute(makeElement("a"), "class", "btn btn-primary");
  let buttontext=document.createTextNode("Visit");
  addAttribute(footerButton,"href","#");
  footerButton.appendChild(buttontext)
  cardFooter.appendChild(footerButton)
  console.log("we are here");
  // cardDescParagraph.innerHtml="This is myfirstproject";
  let text = document.createTextNode("This is the real element");
  cardDescParagraph.appendChild(text);
  cardDesc.appendChild(cardDescParagraph);
  cardBody.appendChild(cardDesc);
  cardImg.appendChild(projectImage);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  columnDiv.appendChild(card);
  document.querySelector("#projects").appendChild(columnDiv);
};
console.log("before");
createProject();
// console.log(projectsList);
// projectGet();
console.log("finally");
// projects.forEach((project)=>{
//   console.log(project);
//   console.log(help);
// }
// );