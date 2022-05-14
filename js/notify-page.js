/**
 * * Open the operations in the one notification (Open delete OR mark as read div).
 */

let myIconOfOneNotify = document.querySelectorAll(
  ".notify__list__selections .fa-ellipsis-h"
);

myIconOfOneNotify.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();

    // * Start check if the content of the selections shown in anywhere.
    // * ------------------------------------------------------------
    const myAllContents = document.querySelectorAll(
      ".notify__list__selections__content"
    );

    myAllContents.forEach((itemContent) => {
      if (itemContent.classList.contains("visible-selection-notify")) {
        itemContent.classList.remove("visible-selection-notify");
      }
    });

    // * ------------------------------------------------------------
    // * End check if the content of the selections shown in anywhere.

    let notifyContentDiv = e.target.parentElement.getElementsByClassName(
      "notify__list__selections__content"
    )[0];

    icon.classList.toggle("show-ellipsis-notify");
    notifyContentDiv.classList.toggle("visible-selection-notify");
  });
});

/* * =============================================================================== */

/**
 * * Select one notify and get the content of it and delete from the list.
 **/

const deleteOneNotify = () => {
  let containerOfDeleteNotify = document.querySelectorAll(
    ".notify__list__selections__delete"
  );

  containerOfDeleteNotify.forEach((itemWillDelete) => {
    itemWillDelete.addEventListener("click", (eo) => {
      eo.preventDefault();

      let myNotifyInfo =
        eo.currentTarget.parentElement.parentElement.parentElement;
      myNotifyInfo.style.display = "none";
    });
  });
};

deleteOneNotify();

/* * =============================================================================== */

/**
 * * Select one notify and mark as read.
 **/

const markAsReadNotify = () => {
  let notifyMarkAsRead = document.querySelectorAll(
    ".notify__list__selections__read"
  );

  notifyMarkAsRead.forEach((item) => {
    item.addEventListener("click", (eo) => {
      eo.preventDefault();

      let getMyOneNotify =
        eo.currentTarget.parentElement.parentElement.previousElementSibling.querySelectorAll(
          ".notify__list__info p"
        );

      for (let i = 0; i < getMyOneNotify.length; i++) {
        getMyOneNotify[i].classList.toggle("lighter-font");
      }

      let myContent =
        eo.target.parentElement.parentElement.getElementsByClassName(
          "notify__list__selections__content"
        )[0];

      if (myContent.classList.contains("visible-selection-notify")) {
        myContent.classList.remove("visible-selection-notify");
      }
    });
  });
};

markAsReadNotify();
