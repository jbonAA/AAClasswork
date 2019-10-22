
  const dogs = {
    "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
    "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
    "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
    "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
    "Tosa": "https://www.akc.org/dog-breeds/tosa/",
    "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
    "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
  };

function dogLinkCreator(dogs){
  let dogBreed = Object.keys(dogs);
  let dogLinks = Object.values(dogs);
  let completed = [];

  for(let i = 0; i < dogBreed.length; i++){
    let newA = document.createElement("a");
    newA.innerHTML = dogBreed[i];
    newA.href = dogLinks[i];
    let newLi = document.createElement("li");
    // console.log("newLi: " + newLi)
    newLi.className = "dog-link";
    newLi.append(newA);
    completed.push(newLi);
  }
  // console.log(completed);
  return completed;
}

function attachDogLinks(){
  const dogLinks = dogLinkCreator(dogs);
  let ulDropDown = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach((el)=> {
    ulDropDown.append(el);
  });

  return ulDropDown;
}


function handleLeave() {
  let list = document.querySelector(".toggle");
  let li = document.querySelector(".drop-down-dog-list")
  li.addEventListener("mouseleave", (e) => {
    li.className = "hidden"
  })

}

function handleEnter() {
  let list = document.querySelector(".toggle");
  let li = document.querySelector(".drop-down-dog-list")
  list.addEventListener("mouseenter", (e)=>{
    li.className = "dropdown-show"
  })

}

export const dropDown = attachDogLinks();
handleLeave();
handleEnter();