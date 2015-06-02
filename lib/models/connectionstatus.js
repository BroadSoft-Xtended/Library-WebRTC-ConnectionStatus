module.exports = require('webrtc-core').bdsft.Model(ConnectionStatus, {
  config: require('../../js/config.js')
})

var Utils = require('webrtc-core').utils;

function ConnectionStatus(options, eventbus, urlconfig) {
  var self = {};

  self.props = ['connected', 'registered'];

  self.init = function() {
    self.enableRegistrationIcon = urlconfig.enableRegistrationIcon || self.enableRegistrationIcon;
    self.enableConnectionIcon = urlconfig.enableConnectionIcon || self.enableConnectionIcon;
  };

  self.listeners = function() {
    eventbus.on("disconnected", function(e) {
      if (self.enableConnectionIcon) {
        self.connected = false;
      }
    });
    eventbus.on("connected", function(e) {
      if (self.enableConnectionIcon) {
        self.connected = true;
      }
    });
    eventbus.on("registrationFailed", function(e) {
      if (self.enableRegistrationIcon) {
        self.registered = false;
      }
    });
    eventbus.on("registered", function(e) {
      if (self.enableRegistrationIcon) {
        self.registered = true;
      }
    });
  };

  return self;
}