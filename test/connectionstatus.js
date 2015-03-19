var jsdom = require('mocha-jsdom');
expect = require('expect');
jsdom({});

describe('connectionstatus', function() {

  before(function(){
    core = require('webrtc-core');
    testUA = core.testUA;
    var config = {enableRegistrationIcon: true, enableConnectedIcon: true};
    testUA.createCore('configuration', config);
    testUA.createCore('sipstack', config);
    testUA.createModelAndView('connectionstatus', {connectionstatus: require('../')});
    testUA.mockWebRTC();
  });

  it('on startup', function() {
    expect(connectionstatus.registered).toEqual(undefined);
    expect(connectionstatus.connected).toEqual(undefined);
  });
  it('on connected', function() {
    testUA.connect();
    expect(connectionstatus.connected).toEqual(true);
  });
  it('on disconnected', function() {
    testUA.connect();
    testUA.disconnect();
    expect(connectionstatus.connected).toEqual(false);
  });
  it('on registered', function() {
    testUA.registered();
    expect(connectionstatus.registered).toEqual(true);
  });
  it('on registrationFailed', function() {
    testUA.registered();
    testUA.registrationFailed();
    expect(connectionstatus.registered).toEqual(false);
  });
});