import { Template } from 'meteor/templating';


/* ============================== importing home html template ============================== */
import './home.html';


/* ============================== Hooks ============================== */
Template.home.onRendered( () => {
  //$('body').css('background-image', 'url("fondo5.jpg")');
});


/* ============================== Events ============================== */
Template.home.events({
  'click .js-event-anchor-nav'(e) {
    e.preventDefault();
    let message = $(e.target).html();
    alert(`Hola ${message}`);
  }
});
