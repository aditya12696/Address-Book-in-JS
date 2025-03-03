const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const addressBook = new AddressBook();

const contact1 = new Contact("John", "Doe", "123 St", "New York", "NY", "10001", "1234567890", "john@example.com");
const contact2 = new Contact("Jane", "Smith", "456 Lane", "LA", "CA", "90001", "9876543210", "jane@example.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);

console.log("All Contacts:");
addressBook.displayContacts();
