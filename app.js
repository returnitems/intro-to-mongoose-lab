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

const createCustomer = async () => {
  const customerData = {
    name: custName,
    age: custAge,
  };

  const Customer = await customer.create(customerData);
  console.log("New customer:", Customer);
};

const custQueries = async () => {
    console.log('Queries running');
    await createCustomer();
}

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
  custName = prompt("Please type the name of the customer: ");
  custAge = prompt("Please type the age of the customer: ");
  custQueries();
}

connect();
