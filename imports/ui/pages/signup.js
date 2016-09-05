/* ============================== importing signup html template ============================== */
import './signup.html';


/* ============================== Events ============================== */
Template.signup.events({
  'submit #signupForm'(event) {
    event.preventDefault();
    let name = $('[name=name]').val();
    let email = $('[name=email]').val();
    let password = $('[name=password]').val();

    console.log(`User: ${name}, email: ${email}, clave: ${password}`);

    $('[name=name]').val('');
    $('[name=email]').val('');
    $('[name=password]').val('');
  }
});
