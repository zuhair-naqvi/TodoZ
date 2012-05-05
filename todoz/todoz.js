Tasks = new Meteor.Collection("Tasks");

if (Meteor.is_client) {
	
  Meteor.startup(function () {
		$('#dp1').datepicker({
			format: 'dd-mm-yyyy',
			autoclose: true
		});
  });
	
  Template.main.user = function () {
    return "Zuhair";
  };

  Template.taskslist.tasks = function() {
	return Tasks.find();
  };

  Template.main.today = function () {
    return moment().format('DD-MM-YYYY');
  };

  Template.main.events = {
    'change #dp1' : function (event) {
    	console.log("Something changed");
		$('#dp1').datepicker('hide');
    }
  };

}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

function markDone(isDone, id)
{
	console.log('done '+id);
	if(isDone)
	{
		$('input[name='+id+']').addClass('done');
		Tasks.update(id, {$set:{name: $('input[name='+id+']').val(), done:"done"}});
	}
	else
	{
		$('input[name='+id+']').removeClass('done');
		Tasks.update(id, {$set:{name: $('input[name='+id+']').val(), done:null}});
	}
}

function markLabel(input)
{
	if(input.value[input.value.length-1] == '!')
	{
		$('#label_'+input.id).addClass('label').addClass('label-warning').text('high');
	}
	else
	{
		$('#label_'+input.id).removeClass('label').removeClass('label-important').text('');
	}
}

function addTask(newtask)
{
	if(newtask.value.length > 0)
	{
		Tasks.insert({name:newtask.value});
		newtask.value = '';
	}
}

function removeTask(taskId)
{
	Tasks.remove({_id:taskId});
}