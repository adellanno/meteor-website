if (Meteor.isServer) {
    Meteor.methods({
        getLocation: function () {
            this.unblock();
            return Meteor.http.call("GET", "http://api.openweathermap.org/data/2.5/find?q=london&units=metric&APPID=e95855e73dd097a4ad32be4cb4c05bb8");
        }
    });
}
