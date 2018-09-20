// console.log("Hello World!");
// Jacob Rachal 9/19/2018 ENDOF ROUND DEMONSTRATION
//JavaScript is Object-Oriented-Programming.

//Creating Elements (from thin air!)
let content = document.getElementById("content");

// Creating  a paragraph tag.
let myPTag = document.createElement("p"); //create a paragraph tag.//can rename as newP to save on time.
// document.createElement("h1, li, etc.")
myPTag.textContent = "This is a paragraph tag and paragraph text added from the JavaScript!";
// At this point, we've created the element, it EXISTS, it just hasn't been added to the DOM yet

// Creating a button and adding a class. (using Bootstrap buttons and classes)
let myBtn = document.createElement("button");
myBtn.textContent = "Click me!";
// content.appendChild(myBtn); //successfully added a button, now to add a class.
myBtn.className = "btn btn-primary"; //can put multiple classes at once.
// DO NOT HAVE multiple lines of this since it overwrites what was previously there. Use ONLY for concrete classes that will not be changed by JS.

//adding an id.
myBtn.id = "someID";//can procedurally generate these later on down the line.
// content.appendChild(myBtn);

// Say we want to see what class an element has.
// console.log(document.getElementById("someID").classList);
//couts: DOMTokenList(2) ["btn", "btn-primary", value: "btn btn-primary"]

// manipulating with classList.
// myBtn.classList.remove("btn-primary");
//can also do classList.add("btn"); //allows us to add and remove classes at the drop of a hat.
// content.appendChild(myBtn); //append always has to go at the end of the element generation.


// USING setAttribute, for adding alts and image links.
//adding an image via url
let myImg = document.createElement("img");
myImg.setAttribute("alt", "Add attribute from JS");
myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg")
// content.appendChild(myImg);
//can set any and all necessary HTML attributes using this method.

//to GET an attribute...
// console.log(myImg.getAttribute("src"));

// ========================================= SAVE BELOW ===================
// WIll now be generating an entire page using nothing but JavaScript
const script = document.querySelector("script");
const body = document.querySelector("body");

//helper variables
let newP = document.createElement("p");
let newH1 = document.createElement("h1");
let newFooter = document.createElement("footer");
let newA = document.createElement("a");
let newHeader = document.createElement("header");
let newUl = document.createElement("ul");
// let newLi = document.createElement("li"); //see below function.
let newDiv = document.createElement("div");

// creating a function to generate a list.
function createLi(classArray, linkText) { //the array of classes to add to this li, and the text to be displayed.
  let newLink = document.createElement("li"); //generating new li
  let newA = document.createElement("a"); //resetting this every time the func runs.
  newA.setAttribute("href", "#");
  newA.textContent = linkText;
  newLink.appendChild(newA);//appending the anchor tag to this li.
  for (let i = 0; i < classArray.length; i++) {
    newLink.classList.add(classArray[i]);
  }; //"for" TAB
  newUl.appendChild(newLink);
};


//adding more things.
function createTextElement(elementType, text) {
  let newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;
  // console.log("createTextElement", this);
};
newDiv.classList.add("text-center");

//very very very basic example of how you can generate a webpage using (almost) only JavaScript. Useful for todo checklist app finale.
//lookup "Javascript 30" for daily javascript exercises.

// =================================================================
// DAY 12 - FiNALE.
//writting an event listener. HANG ONTO THIS.
messageForm.addEventListener("submit", e => {
  e.preventDefault(); //since we don't have a DB or server to send data to, don't perform that default action.
  // console.log(e);
  // console.log(e.target); //grabs the form from the EVENT!
  // console.log(e.target["msg"]);//prints out the input.
  // console.log(e.target["msg"].value); //prints out msg. Or whatever you enter and send within the input field.
  let list = document.getElementById("todoList"); //the html unordered list.
  let message = e.target["msg"].value;//where we are getting the text.
  let newMessage = document.createElement("li");
  let doneDone = document.getElementById("completedList");
  //need to aslo add the buttons that do things. (checkmark, edit, delete)
  // newMessage.textContent = message;
  let completedBtn = document.createElement("button");
  let delete_me = document.createElement("button");
  let edit_me = document.createElement("button");
  //can actually add the event listeners here.

  newMessage.textContent = message;
  newMessage.className = "do_the_thing";
  // this class will be responsible for font size, spacing, features, etc.
  completedBtn.className = "completed_btn pull-right fas fa-check";
  // have an event listener that adds a class to this thing's parent to strikethrough text.
  delete_me.className = "unexistance_me_btn pull-right far fa-trash-alt";
  edit_me.className = "refactor_btn pull-right far fa-edit";

  //event listeners. Will need to reattach the buttons I think.
  //Okay, after testing things out, I can confirm that the classes do not need to be readded to the elements when a button is pressed.
  completedBtn.addEventListener('click', e => {
    newMessage.classList.add("yoink");
    doneDone.appendChild(newMessage);
    // newMessage.appendChild(delete_me);
    newMessage.removeChild(completedBtn);
    newMessage.removeChild(edit_me);
  });
  delete_me.addEventListener('click', e => {
    //remove somehow. Must be in both lists.
    newMessage.parentElement.removeChild(newMessage);
  });
  edit_me.addEventListener('click', e => {
    newMessage.textContent = prompt("Re-enter what you want for this thing:");
    // list.insertBefore(newMessage);
    list.appendChild(newMessage);
    newMessage.appendChild(completedBtn);
    newMessage.appendChild(delete_me);
    newMessage.appendChild(edit_me);
  });

  list.appendChild(newMessage);
  newMessage.appendChild(completedBtn);
  newMessage.appendChild(delete_me);
  newMessage.appendChild(edit_me);
  messageForm.reset(); //clears out the message bar after you submit.

}
);

// END OF JAVASCRIPT FILE.
