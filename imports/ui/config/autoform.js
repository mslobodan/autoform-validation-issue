import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import popper from 'popper.js';
import 'meteor/aldeed:autoform/static';
import {AutoFormThemeBootstrap4} from 'meteor/communitypackages:autoform-bootstrap4/static';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

global.Popper = popper;
AutoFormThemeBootstrap4.load();
AutoForm.setDefaultTemplate('bootstrap4');
