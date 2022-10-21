import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Partners, PartnersSchema} from '../../lib/partnersCollection';
import './app.html';
import './home/home';


(function (template) {
  template.onCreated(function () {
    this.counter = new ReactiveVar(0);
  });

  template.helpers({
    counter() {
      return Template.instance().counter.get();
    },
    PartnersSchema: function () {
      return PartnersSchema;
    },
    Partners: function () {
      return Partners;
    }
  });

  template.events({
    'click button.count'(event, instance) {
      instance.counter.set(instance.counter.get() + 1);
    },
    'submit #abc': function (e, t) {
      console.log(e, t);
    }
  });

  AutoForm.hooks({
    'my-form': {
      before: {
        insert: function (doc) {
          console.log(doc);
          return doc;
        }
      },
      onSuccess: function () {
        console.log('success');
      },
      onError: function (e, a, b) {
        console.log('error', e, a, b);
      }
    }
  });

})(Template.app);
