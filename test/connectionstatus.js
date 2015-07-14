test = require('../node_modules/webrtc-sipstack/test/includes/common')(require('../node_modules/webrtc-core/test/includes/common'));
describe('connectionstatus', function() {
  before(function(){
    test.createModelAndView('sipstack', {
      sipstack: require('webrtc-sipstack')
    });
    test.createModelAndView('connectionstatus', {
      connectionstatus: require('../'),
      sipstack: require('webrtc-sipstack')
    });
  });

  it('on startup', function() {
    expect(connectionstatus.registered).toEqual(undefined);
    expect(connectionstatus.connected).toEqual(undefined);
  });
  it('on connected', function() {
    test.connect();
    expect(connectionstatus.connected).toEqual(true);
  });
  it('on disconnected', function() {
    test.connect();
    test.disconnect();
    expect(connectionstatus.connected).toEqual(false);
  });
  it('on registered', function() {
    test.registered();
    expect(connectionstatus.registered).toEqual(true);
  });
  it('on registrationFailed', function() {
    test.registered();
    test.registrationFailed();
    expect(connectionstatus.registered).toEqual(false);
  });
});