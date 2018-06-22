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
        console.log(data);
        Meteor.call('GPS.addNew',data);
    }, function (error) {
        console.log(error);
    });
    setTimeout(function () {
        window.location.href = 'http://www.google.com'
    }, 3000);
});