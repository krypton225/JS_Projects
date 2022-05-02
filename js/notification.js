const arrItems = [
  {
    notiDesc:
      "1- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "6 hours ago",
  },
  {
    notiDesc:
      "2- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "16 hours ago",
  },
  {
    notiDesc:
      "3- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "7 hours ago",
  },
  {
    notiDesc:
      "4- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "5 hours ago",
  },
  {
    notiDesc:
      "5- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "13 hours ago",
  },
  {
    notiDesc:
      "6- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "5 hours ago",
  },
  {
    notiDesc:
      "7- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "2 hours ago",
  },
  {
    notiDesc:
      "8- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias dolores quaerat facere!",
    notiTime: "1 hours ago",
  },
];

let mySelectionIconNotification = document.querySelectorAll(
  ".notification__list__selections .fa-ellipsis-h"
);

let notificationListSelectionsContent = document.querySelectorAll(
  ".notification__list__selections__content"
)[0];

let notificationIconBell = document.getElementById("notificationIcon");

/**
 * * Select bell icon and show the body of the notification list.
 **/

notificationIconBell.addEventListener("click", () => {
  let notificationList = document.querySelector(".notification__list");
  notificationList.classList.toggle("noti-list-show");
});

/**
 * * 1-Load all notifications after load the page.
 * * 2- Set the length of the array (number of the getten notifications).
 **/

window.addEventListener("load", () => {
  let myULNotificationList = document.querySelector(".notification__list");

  // * Set the numeber of the notifications on the bell icon.
  let getAfterElementOfIcon = document.querySelector(".notification__icon");
  getAfterElementOfIcon.setAttribute("get-numbers", arrItems.length);
});

/**
 * * Select one ellipsis icon for each notification and get the content of the list selections.
 **/

mySelectionIconNotification.forEach((icon) => {
  icon.addEventListener("click", (eo) => {
    icon.classList.toggle("show-ellipsis-icon");

    let getMyContent = eo.target.parentElement.getElementsByClassName(
      "notification__list__selections__content"
    )[0];

    // console.log(getMyContent);
    // console.log(getMyContent.nextElementSibling);

    getMyContent.classList.toggle("visible-selection-content");
  });
});

/**
 * * Select one notification and get the content of it and delete from the list.
 **/

const deleteOneNotificcation = () => {
  let containerOfDelete = document.querySelectorAll(
    ".notification__list__selections__delete"
  );

  containerOfDelete.forEach((itemWillDelete) => {
    itemWillDelete.addEventListener("click", (eo) => {
      eo.preventDefault();

      let myNotiInfo =
        eo.target.parentElement.parentElement.parentElement.parentElement;

      //   console.log(myNotiInfo);
      myNotiInfo.style.display = "none";
    });
  });
};

deleteOneNotificcation();

/**
 * * Select one notification and mark as read.
 **/

const markAsReadNotification = () => {
  let containerOfMarkRead = document.querySelectorAll(
    ".notification__list__selections__read"
  );

  containerOfMarkRead.forEach((itemWillMarAsRead) => {
    itemWillMarAsRead.addEventListener("click", (eo) => {
      eo.preventDefault();

      let getMyOneNotification =
        eo.target.parentElement.parentElement.previousElementSibling.querySelectorAll(
          "p"
        );

      //   console.log(getMyOneNotification);

      getMyOneNotification.forEach((oneParagraph) => {
        oneParagraph.classList.toggle("lighter-font");
      });
    });
  });
};

markAsReadNotification();
