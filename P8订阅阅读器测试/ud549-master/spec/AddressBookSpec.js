describe("Address Book", function() {
  var addressBook, thisContact;
// This will run before each of the test
  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it("should be able to add a contact", function() {
    addressBook.addContact(thisContact);
    // demonstrates use of 'not' with a custom matcher
    expect(addressBook.getContact(0)).toBe(thisContact);
    // should expect if I were to get the first contact in the addressBook,
  });
  it("should be able to delete contact", function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
    // if delete, should return undefined
  });
});
// Test asynchronous function
describe("Async Address Book", function() {
  var addressBook = new AddressBook();
  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      // This is the signal to the framwork that
      // our asynchronous function is done doing what we need to do
      done();
    });
  });
  it("should be able to grab contact", function(done) {
    // addressBook.getInitialContacts();
    console.log(addressBook.initialComplete)
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
