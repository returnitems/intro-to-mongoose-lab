const prompt = require("prompt-sync")();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const customer = require("./models/customer.js");

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

const createCustomer = async () => {
  const customerData = {
    name: custName,
    age: custAge,
  };

  const customer = await customer.new(customerData);
  console.log("New customer:", customer);
};

const mainMenu = `Welcome to the CRM

What would you like to do?

    1. Create a customer
    2. View all customers
    3. Update a customer
    4. Delete a customer
    5. Quit
    `;

console.clear();

console.log(mainMenu);
let answer = prompt("Type the number of the action to run: ");

if (answer === "1") {
  console.clear();
  console.log("Great! Lets enter a new customer in our DB.");
  let custName = prompt("Please type the name of the customer: ");
  let custAge = prompt("Please type the age of the customer: ");
  createCustomer();
}

connect();
