const Contact = require("./src/models/Contact");
const AddressBook = require("./src/models/AddressBook");

const addressBooks = [];

// Create new address books
const personalBook = new AddressBook("Personal Contacts");
const workBook = new AddressBook("Work Contacts");

// Add address books to the array
addressBooks.push(personalBook);
addressBooks.push(workBook);

try {
    const contact1 = new Contact("John", "Doe", "1234 Street", "New York", "New York", "10001", "9876543210", "john@example.com");
    personalBook.addContact(contact1);

    const contact2 = new Contact("Alice", "Smith", "5678 Avenue", "Los Angeles", "California", "90001", "9988776655", "alice@example.com");
    workBook.addContact(contact2);
} catch (error) {
    console.error("Error:", error.message);
}

// Display all address books and their contacts
addressBooks.forEach(book => book.displayContacts());
