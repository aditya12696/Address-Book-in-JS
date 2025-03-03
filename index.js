const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const addressBook = new AddressBook();

try {
    const contact1 = new Contact("John", "Doe", "1234 Street", "New York", "New York", "10001", "9876543210", "john@example.com");
    addressBook.addContact(contact1);
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact("jo", "smith", "12 St", "NY", "NY", "100", "123456", "invalid.com");
    addressBook.addContact(invalidContact);
} catch (error) {
    console.error("Error:", error.message);
}

console.log("All Contacts:");
addressBook.displayContacts();
