// Business Logic

function Person(first, last, phone, address, email){
  this.firstName = first,
  this.lastName = last,
  this.phoneNumber = phone,
  this.address = address,
  this.email = email
}
function Address(number, street, city, state, zipcode){
  this.number = number,
  this.street = street,
  this.city = city,
  this.state = state,
  this.zipcode = zipcode
}

person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
address

// User Logic
$(document).ready(function() {
  $(form#newContact).submit(function(event) {
    event.preventDefault();

    var inputFirst = $("input#first").val();
    var inputLast = $("input#last").val();
    var inputPhone = $("input#phone").val();
    var inputAddress = $("input#address").val();
    var inputState = $("").val();
    var inputCity = $("").val();
    var inputZip = $("").val();
    var inputEmail = $("input#email").val();

    var newPerson = new Person(inputFirst, inputLast, inputPhone, inputAddress, inputEmail);

$("ul#directory").append("<li><span class= 'person'>" + newPerson.fullName() +
"</span></li>");

$("directory").last().click(function(){
  $("#show-person").show();
  $("#show-person h2").text(newPerson.firstName);
  $(".first").text(newPerson.firstName);
  $(".last").text(newPerson.lastName);
  });
  $("input#newFirst").val("");
  $("input#newLast").val("");
  });
});
