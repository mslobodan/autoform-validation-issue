import SimpleSchema from 'simpl-schema';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';

const PartnersSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Partner name'
  },
  address: {
    type: String,
    label: 'Partner address',
    optional: true
  },
  age: {
    type: SimpleSchema.Integer
    // defaultValue: 53
  }
}, {
  tracker: Tracker
});

const Partners = new Mongo.Collection('partners');
Partners.attachSchema(PartnersSchema);

export {Partners, PartnersSchema};

