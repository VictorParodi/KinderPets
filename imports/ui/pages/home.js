import { Template } from 'meteor/templating';


/* ============================== importing home html template ============================== */
import './home.html';

Template.home.onRendered( () => {
  //$('body').css('background-image', 'url("fondo5.jpg")');
});
