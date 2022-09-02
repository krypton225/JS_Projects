export default async function getAllUsersFromAPI(url) {
  return (await fetch(url)).json();
}

export class User {
  constructor(id, fullName, email, phone, address) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  addUser() {
    return localStorage.setItem(id, `user${id}`);
  }

  removeUser(idUser) {
    return localStorage.removeItem(idUser);
  }

  printFullInfo(userID) {
    return `Full name is: ${this.fullName} - Email: ${this.email} - Phone: ${this.phone} - Address: ${this.address}`;
  }
}
