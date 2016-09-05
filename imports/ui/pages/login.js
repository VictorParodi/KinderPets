/* ============================== importing login html template ============================== */
import './login.html';


/* ============================== Events ============================== */
Template.login.events({
  'submit #loginForm'(event) {
    event.preventDefault();
    let email = $('.email').val();
    let password = $('.password').val();

    console.log(`user: ${email}, password: ${password}`);

    $('.email').val('');
    $('.password').val('');
  }
});
