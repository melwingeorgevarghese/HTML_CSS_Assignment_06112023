const colorarray = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "skyblue",
];
fetch("https://api.msigma.in/btech/v2/branches/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let j = 0; j < 4; j++) {
      const mainDiv = document.createElement("div"); //Main div created
      mainDiv.className = "section";
      for (let i = 2 * j; i <= 2 * j + 1; i++) {
        const newDiv = document.createElement("div"); // Create a new <div> element
        newDiv.className = "left";
        // Create a new element
        let newHeading = document.createElement("h1");

        newHeading.textContent = data.branches[i].short;
        newHeading.style.color = colorarray[i];
        let newLine = document.createElement("p");
        newLine.textContent = data.branches[i].name;
        let newButton = document.createElement("button");
        newButton.textContent = "Apply Now";
        newButton.style.color = colorarray[i];
        newButton.style.border = `1px solid ${colorarray[i]}`;
        let newPara = document.createElement("p");
        newPara.textContent = "Fee starting at ₹799 per subject";

        // Append the new <h1> element to the new <div>
        newDiv.appendChild(newHeading);
        newDiv.appendChild(newLine);

        newDiv.appendChild(newButton);
        newDiv.appendChild(newPara);

        // Append the new <div> to an existing element (e.g., body)
        mainDiv.appendChild(newDiv);
      }
      document.body.appendChild(mainDiv);
    }
  });
