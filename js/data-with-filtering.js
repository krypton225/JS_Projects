import * as All from "./api-user.js";

let URL_API = `https://jsonplaceholder.typicode.com/users`;

function getAllUsers() {
  let users = [];
  let list = document.querySelector(".users");

  document.addEventListener("DOMContentLoaded", async () => {
    try {
      users = await All.default(URL_API);
    } catch (err) {
      console.log(err);
    }

    for (let i = 0; i < users.length; i++) {
      let oneUser = new All.User(
        users[i].id,
        users[i].name,
        users[i].email,
        users[i].phone,
        users[i].address
      );

      let oneItemList = document.createElement("li");
      let itemListText = document.createTextNode(oneUser.fullName);

      oneItemList.appendChild(itemListText);
      list.appendChild(oneItemList);
    }

    searchUser(users, document.querySelectorAll("li"));
  });
}

getAllUsers();

function searchUser(users, items) {
  let input = document.getElementById("input");

  input.addEventListener("keyup", () => {
    items.forEach((el) => {
      if (el.innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });
  });
}
