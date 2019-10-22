
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let newP = document.createElement("p");
  newP.innerHTML = string;

  let kids = htmlElement.children;

  if (kids) {
    kids = Array.from(kids);
    for (let i = 0; i < kids.length; i++) {
      kids[i].remove();
    }
  }
  
  return htmlElement.append(newP);
};

htmlGenerator('Party Time.', partyHeader);

htmlGenerator('I LOVE Dogs', partyHeader);