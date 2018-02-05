 Backendless.initApp("<Application ID>","<Javascript Key>");

$(document).on("pageshow","#todoPage", onPageShow);

function onPageShow() 
{
      console.log("page shown");
}

Backendless.Data.of("TASKS").find().then(processResults).catch(error);

function processResults(tasks) 
{
 //display the first task in an array of tasks.
     alert(tasks[0].Task)
}
function error(err) {
     alert(err);
}
