import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/* ============================== Home routes ============================== */
FlowRouter.route('/', {
  name:'home',
  action() {
    BlazeLayout.render('mainLayout', {content:'home'} );
  }
});
