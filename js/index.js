$(() => {
  $(".header").height($(window).height());
  if($(window).scrollTop()>150){
    $('nav').addClass('bg-dark');
  }
// make nav bar dark on scroll down
  $(document).scroll(()=>{
    const scrollLevel=$(window).scrollTop();
    console.log($(window).scrollTop());
    if(scrollLevel>150){
      $('nav').addClass('bg-dark');
    }
    else{
      $('nav').removeClass('bg-dark');
    }
  })
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
  console.log(projectsList.length);
  projectsList.forEach(element => {
    console.log(4);
    console.log(element);
    let id=element["id"];
    let liveLink=element["github"];
    let img=element["path"];
    let projectName=element["name"];
    let description=element["description"];
    let languages=element["languages"];
    if(id!==null){
    createProject(id,img,projectName,description,liveLink);
    }
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
const createProject = (id,imgUrl,title,description,liveLink) => {
  let columnDiv = makeElement("div");
  addAttribute(columnDiv, "class", "col-12 col-lg-4 col-md-4 col-sm-12");
  let card = addAttribute(makeElement("div"), "class", "card");
  let cardImg = addAttribute(makeElement("div"), "class", "card-img");
  let projectImage = new Image();
  projectImage.src = imgUrl;
  projectImage.className = "img-fluid";
  let cardBody = addAttribute(makeElement("div"), "class", "card-body");
  let cardTitle=addAttribute(makeElement("div"),"class","card-title");
  let titleText=document.createTextNode(title);
  let cardDesc = addAttribute(makeElement("div"), "class", "card-desc");
  let cardFooter = addAttribute(makeElement("div"), "class", "card-footer");
  let cardDescParagraph = makeElement("p");
  let footerButton=addAttribute(makeElement("a"), "class", "btn btn-primary");
  let buttontext=document.createTextNode("Visit");
  addAttribute(footerButton,"href",liveLink);
  cardTitle.appendChild(titleText);
  footerButton.appendChild(buttontext);
  cardFooter.appendChild(footerButton);
  console.log("we are here");
  // cardDescParagraph.innerHtml="This is myfirstproject";
  let text = document.createTextNode(description);
  cardDescParagraph.appendChild(text);
  cardDesc.appendChild(cardDescParagraph);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDesc);
  cardImg.appendChild(projectImage);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  columnDiv.appendChild(card);
  document.querySelector("#projects").appendChild(columnDiv);
};