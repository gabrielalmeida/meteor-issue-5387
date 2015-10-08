ImagePicker = {
  getPictures() {
    return 'Yet to be handled case it\'s not a Cordova environment';
  },
};

Meteor.startup(function() {
  if (Meteor.isCordova) {
    ImagePicker = 'pizza';
  }
});

