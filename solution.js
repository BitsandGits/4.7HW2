////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
document.getElementsByTagName("link")[0].setAttribute("href","styles.css");

/* 1.2) Set the class of the image to "list-img" */
document.getElementsByTagName("img")[0].setAttribute("class","list-img");

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */
let buttons = document.getElementsByTagName("input");
for (button of buttons){
        button.setAttribute("class","btn");
}


////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */
let list = document.getElementById("grocery-list");
console.log(list);

/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */
let addItem = () => {
        let item = prompt("What is your item?"); 
        // create li element and add text 
        let li = document.createElement("li");
        li.className = "listItem"; // optional but could be useful 
        // add text to li  
        li.appendChild(document.createTextNode(item));
        // add both to list 
        list.appendChild(li); 
        document.querySelector(".total-area").classList.toggle("display-none",true); // in case need to add item after total
}


/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by removing the "display-none" class from the the total-area div
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */
let getTotal = () => {
        console.log(document.querySelector(".total-area.display-none").classList); // note js has different class names than html and no space 
        document.querySelector(".total-area.display-none").classList.remove("display-none"); // no need for . after classList 
        let num = document.querySelectorAll(".listItem").length;  
        document.getElementById("item-count").textContent = num; 
}


////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */
let removeItem = () => {
        let toRemove = prompt("What item to remove?");

        let set = document.getElementsByClassName("listItem");
        console.log(set);

        for (element of set){
                if (toRemove == element.textContent){
                        element.classList.add("display-none");  
                        let parent = document.getElementById("grocery-list");
                        parent.removeChild(element);
                }
        }

}
