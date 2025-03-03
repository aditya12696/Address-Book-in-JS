const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const personalBook = new AddressBook("Personal Contacts");

// Add contacts
try {
    const contact1 = new Contact("John", "Doe", "1234 Street", "New York", "New York", "10001", "9876543210", "john@example.com");
    const contact2 = new Contact("Alice", "Smith", "5678 Avenue", "Los Angeles", "California", "90001", "9988776655", "alice@example.com");
    
    personalBook.addContact(contact1);
    personalBook.addContact(contact2);
} catch (error) {
    console.error("Error:", error.message);
}

// Display contacts before deletion
console.log("\nBefore Deleting Contact:");
personalBook.displayContacts();

// Find and delete a contact by name
const nameToDelete = "John";
if (personalBook.deleteContactByName(nameToDelete)) {
    console.log(`\nContact '${nameToDelete}' deleted successfully.`);
} else {
    console.log(`\nContact with name '${nameToDelete}' not found.`);
}

// Display contacts after deletion
console.log("\nAfter Deleting Contact:");
personalBook.displayContacts();
