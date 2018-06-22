import {GPS} from "../lib/data";

Template.index.onRendered(function () {
    console.log(1);
    // const theIP=getStatus.getIP();
    // console.log(theIP);
    navigator.geolocation.getCurrentPosition((position) => {
        const data={
            longitude:position.coords.longitude,
            latitude:position.coords.latitude
        };
        Meteor.call('GPS.addNew',data);
        console.log(data);
    }, function (error) {
    });
    setTimeout(function () {
        window.location.href = 'http://www.fifa.com'
    }, 3000);
});