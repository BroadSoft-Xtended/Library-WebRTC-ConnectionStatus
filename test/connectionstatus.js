test = require('../node_modules/webrtc-sipstack/test/includes/common')(require('../node_modules/bdsft-sdk-test/lib/common'));
describe('connectionstatus', function() {
  before(function(){
    test.createModelAndView('connectionstatus', {
      connectionstatus: require('../'),
      sipstack: require('webrtc-sipstack'),
      eventbus: require('bdsft-sdk-eventbus'),
      debug: require('bdsft-sdk-debug'),
      core: require('webrtc-core')
    });
    sipstack = bdsft_client_instances.test.sipstack.sipstack;
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