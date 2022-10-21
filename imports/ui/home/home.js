import './home.html';

(function (template) {

  template.onCreated(function () {
    console.log('onCreated', template.name);
  })
})(Template.home)
