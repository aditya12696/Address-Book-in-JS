const AddressBook = require("../src/models/AddressBook");
const Contact = require("../src/models/Contact");

test("Add contact to Address Book", () => {
    const addressBook = new AddressBook();
    const contact = new Contact("Alice", "Smith", "456 Lane", "LA", "CA", "90001", "9876543210", "alice@example.com");

    addressBook.addContact(contact);
    expect(addressBook.searchContact("alice@example.com")).toEqual(contact);
});

test("Delete contact from Address Book", () => {
    const addressBook = new AddressBook();
    const contact = new Contact("Bob", "Brown", "789 Street", "Chicago", "IL", "60601", "5556667777", "bob@example.com");

    addressBook.addContact(contact);
    addressBook.deleteContact("bob@example.com");
    expect(addressBook.searchContact("bob@example.com")).toBe(null);
});
