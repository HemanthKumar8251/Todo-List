if (localStorage.getItem("itemsJson") != null) {
    jsonArrayStr = localStorage.getItem("itemsJson");
    jsonArray = JSON.parse(jsonArrayStr);
    let str = "";
    jsonArray.forEach((element, index) => {
        str += `
          <tr>
              <th >${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">delete</button></td>
          </tr>
          `;
    });
    document.getElementById("tableBody").innerHTML = str;
}


//2nd 
function update() {
    console.log("Updating List...");
    tit = document.getElementById("title").value;
    des = document.getElementById("description").value;
    if (localStorage.getItem("itemsJson") == null) {
        jsonArray = [];
        jsonArray.push([tit, des]);
        localStorage.setItem("itemsJson", JSON.stringify(jsonArray));
    }
    else {
        jsonArrayStr = localStorage.getItem("itemsJson");
        jsonArray = JSON.parse(jsonArrayStr);
        jsonArray.push([tit, des]);
        localStorage.setItem("itemsJson", JSON.stringify(jsonArray));
    }
    // Populating the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    jsonArray.forEach((element, index) => {
        str += `
          <tr>
              <th >${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">delete</button></td>
          </tr>
          `;
    });
    document.getElementById("tableBody").innerHTML = str;
    document.getElementById("title").value = null;
    document.getElementById("description").value = null;
}


//1st
add = document.getElementById("add");
add.addEventListener("click", update);


// update();

//4th
clc = document.getElementById("clear");
clc.addEventListener('click', () => {
    if (confirm("Do you really want to clear?")) {
        console.log("clearing...");
        localStorage.clear("itemsJson")
        document.getElementById("tableBody").innerHTML = null;
    }
});


//3rd
function deleted(item) {
    console.log('deleted ', item);
    jsonArrayStr = localStorage.getItem("itemsJson");
    jsonArray = JSON.parse(jsonArrayStr);
    jsonArray.splice(item, 1);
    localStorage.setItem("itemsJson", JSON.stringify(jsonArray));
    let tableBody = document.getElementById("tableBody");
    let str = "";
    jsonArray.forEach((element, index) => {
        str += `
          <tr>
              <th >${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">delete</button></td>
          </tr>
          `;
    });
    let ding = new Audio('ding.mp3');
    ding.play();
    document.getElementById("tableBody").innerHTML = str;
}
