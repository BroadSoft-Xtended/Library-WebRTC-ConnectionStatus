# Connection Status

Displays the registration and websocket connection status.

Model : bdsft_webrtc.default.connectionstatus
View : bdsft_webrtc.default.connectionstatusview
Dependencies : [SIP Stack](https://github.com/BroadSoft-Xtended/Library-WebRTC-SIPStack)

## Elements
<a name="elements"></a>

Element         |Type  |Description
----------------|------|---------------------------------
connectedIcon   |div   |Displays the connected status.
registeredIcon  |div   |Displays the registered status.

## Properties
<a name="properties"></a>

Property    |Type     |Description
------------|---------|-------------------------------------------------
connected   |boolean  |True if the Web Socket is connected to the WRS.
registered  |boolean  |True if the user is registered on the WRS.

## Configuration
<a name="configuration"></a>

Property                  |Type     |Default  |Description
--------------------------|---------|---------|--------------------------------------------------
enableConnectionStatus    |boolean  |true     |True if connection status should be displayed.
enableRegistrationStatus  |boolean  |true     |True if registration status should be displayed.
