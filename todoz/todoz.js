if (Meteor.is_client) {
	
  Meteor.startup(function () {
		$('#dp1').datepicker({
			format: 'mm-dd-yyyy'
		});
  });
	
  Template.main.user = function () {
    return "Zuhair";
  };

  Template.main.events = {
    'change #dp1' : function (event) {
    	console.log("Something changed");
    }
  };

}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}