var AddressBook = function() {
  self = this;
  self.addressBook = [];
  self.initialComplete = false;
  // Make this function act as asynchronous
  self.getInitialContacts = function(cb) {
    // This is a defact of JS, we must switch a variable here, or
    // this/self will ppint to a new global variable
    that = this;
    console.log(self);
    console.log(that);
    setTimeout(function() {
      that.initialComplete = true;
      if (cb) {return cb();}
    }, 3);
  };
  self.addContact = function(contact) {
    self.addressBook.push(contact);
  };
  self.getContact = function(num) {
    return self.addressBook[num];
  };
  self.deleteContact = function(num) {
    self.addressBook.splice(num,1);
  };
};
var Contact = function() {

};
