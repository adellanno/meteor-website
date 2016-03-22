if (Meteor.isClient) {
  Meteor.call("getLocation", function(error, results) {
    console.log(JSON.parse(results.content).list[0].name);
  });
}
