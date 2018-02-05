 Backendless.initApp("D8E2030D-4FB6-F1C5-FF54-6FBCE0E4AE00","A4430BC7-DD94-EA3C-FFB1-C566E79A6600");

$(document).on("pageshow","#todoPage", onPageShow);


function onPageShow() 
{
    console.log("page shown");
	//wipe the list clean
	$("#taskList").empty();
	getData();
}

function getData()
{
Backendless.Data.of("TASKS").find().then(processResults).catch(error);
}

function processResults(tasks) 
{
 //display the first task in an array of tasks.
   // alert(tasks[0].Task)
	//add each tasks
	for (var i = 0; i < tasks.length; i++) 
	{
		$("#taskList").append("<li>"+tasks[i].Task+"</li>");
	}
	//refresh the listview
$("#taskList").listview("refresh");
}

function error(err) {
    alert(err);
}


$(document).on("click", "#addTaskButton", onAddTask);

function onAddTask() 
{
	console.log("add task button clicked");
	var tasktext = $("#addTaskText").val();

	var newTask = {};
	newTask.Task = tasktext;

	Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);
}



function saved(savedTask) 
{
	console.log( "new Contact instance has been saved" + savedTask);
	//empty the listview
	$("#taskList").empty();
	getData();
}
