module.exports = require('webrtc-core').bdsft.Model(ConnectionStatus, {
  config: require('../../js/config.js')
})

var Utils = require('webrtc-core').utils;

function ConnectionStatus(options, urlconfig, sipstack) {
  var self = {};

  self.props = ['connected', 'registered'];

  self.bindings = {
    enableRegistrationStatus: {
      urlconfig: 'enableRegistrationStatus'
    },
    enableConnectionStatus: {
      urlconfig: 'enableConnectionStatus'
    }
  };

  self.listeners = function(sipstackDatabinder) {
    sipstackDatabinder.onModelPropChange('connected', function(value){
      if (self.enableConnectionStatus) {
        self.connected = value;
      }
    });
    sipstackDatabinder.onModelPropChange('registered', function(value){
      if (self.enableRegistrationStatus) {
        self.registered = value;
      }
    });
  };

  return self;
}