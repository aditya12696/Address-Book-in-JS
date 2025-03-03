const Contact = require("../models/Contact");
const AddressBook = require("../models/AddressBook");

const addressBook = new AddressBook();

// Add Sample Contact
const contact1 = new Contact("John", "Doe", "123 St", "New York", "NY", "10001", "1234567890", "john@example.com");
addressBook.addContact(contact1);

// Display all contacts
console.log("All Contacts:");
addressBook.displayContacts();

// Search Contact
console.log("\nSearch Contact:");
console.log(addressBook.searchContact("john@example.com"));

// Delete Contact
addressBook.deleteContact("john@example.com");
console.log("\nAfter Deleting Contact:");
addressBook.displayContacts();
