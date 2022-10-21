import {Meteor} from 'meteor/meteor';
import {Partners} from '../lib/partnersCollection';
// import 'insec'

Meteor.startup(() => {
  // code to run on server at startup
});

Partners.allow({
  insert() {
    console.log('isServer: ', Meteor.isServer);
    console.log(Meteor.userId());
    return true;
  },
  update() {
    return false;
  },
  remove() {
    return false;
  }
});
