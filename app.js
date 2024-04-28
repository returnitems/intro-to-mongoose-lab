const prompt = require("prompt-sync")();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const customer = require("./models/customer.js");
let custName;
let custAge;

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

const disconnect = async () => {
  await mongoose.disconnect(process.env.MONGODB_URI);
};

// const createCustomer = async () => {
//   const customerData = {
//     name: custName,
//     age: custAge,
//   };

//   const Customer = await customer.create(customerData);
//   console.log("New customer:", Customer);
// };

// const custQueries = async () => {
//   console.log("Queries running");
//   await createCustomer();

// };

// const findCustomers = async () => {
//   const cust = await customer.find({});
//   console.log("Below is the list of all customers:");
//   cust.forEach((e) => {
//     console.log(`id: ${e._id} -- Name: ${e.name}, Age: ${e.age}`);
//   });
//   let continueMenu = prompt("Type 1 and press enter to return to main menu: ");
// };

// const mainMenu = `Welcome to the CRM

// What would you like to do?

//     1. Create a customer
//     2. View all customers
//     3. Update a customer
//     4. Delete a customer
//     5. Quit
//     `;

// console.clear();

// console.log(mainMenu);
// let answer = prompt("Type the number of the action to run: ");

// if (answer === "1") {
//   console.clear();
//   console.log("Great! Lets enter a new customer in our DB.");
//   custName = prompt("Please type the name of the customer: ");
//   custAge = prompt("Please type the age of the customer: ");
//   custQueries();
// } else if (answer === "2") {
//   console.clear();
//   findCustomers();
// } else if (answer === "3") {
//   console.clear();
//   updateCustomer();
// }

// connect();

// ************************************************************************************************

const createCustomer = async () => {
  const customerData = {
    name: custName,
    age: custAge,
  };

  const Customer = await customer.create(customerData);
  console.log("New customer:", Customer);
};

const findCustomers = async () => {
  const cust = await customer.find({});
  console.log("Below is the list of all customers:");
  cust.forEach((e) => {
    console.log(`id: ${e._id} -- Name: ${e.name}, Age: ${e.age}`);
  });
  // let continueMenu = prompt("Type 1 and press enter to return to main menu: ");
};

const mainMenu = async () => {
  await connect();
  console.clear();
  console.log("Welcome to the CRM!");
  let running = true;
  while (running) {
    // console.clear();

    const menuText = `What would you like to do?

    1. Create a customer
    2. View all customers
    3. Update a customer
    4. Delete a customer
    5. Quit
    `;

    console.log(menuText);
    let answer = prompt("Type the number of the action to run: ");

    // if (answer === "1") {
    //   console.clear();
    //   console.log("Great! Lets enter a new customer in our DB.");
    //   custName = prompt("Please type the name of the customer: ");
    //   custAge = prompt("Please type the age of the customer: ");
    //   createCustomer();
    // } else if (answer === "2") {
    //   console.clear();
    //   findCustomers();
    // } else if (answer === "3") {
    //   console.clear();
    //   updateCustomer();
    // } else if (answer === "4") {
    //   console.clear();
    // } else if (answer === "5") {
    //   disconnect();
    // }

    switch (answer) {
      case "1":
        console.clear();
        console.log("Great! Lets enter a new customer in our DB.");
        custName = prompt("Please type the name of the customer: ");
        custAge = prompt("Please type the age of the customer: ");
        await createCustomer();
        break;
      case '2':
        console.clear();
        await findCustomers();
        break;
      case '3':
        console.clear();
        await updateCustomer();
        break;
      case '4':
        console.clear();
        await deleteCustomer();
        break;
      case '5':
        await disconnect();
        running = false;
        break;
    }
  }
};

mainMenu();
