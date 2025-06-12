// creating an array
        // array of tasks where each task is an object
        var tasks=[
            {
                title:'Meeting with HR',
                description:'Discussion on Tech Team Members Salary',
                status:'incomplete',
            },
            {
                title:'Reading a book',
                description:'Read atleast one chapter a day',
                status:'incomplete',
            },
            {
                title:'Exercise',
                description:'Do it for atleast 10 mins a day',
                status:'complete',
            }
        ];
        function displayTask(){
            var tasklist=document.getElementById('tasklist');
            tasklist.innerHTML='';

            tasks.forEach(function(task){
                var listItem=document.createElement('li');
                listItem.textContent=`${task.title} - ${task.description}`;

                if(task.status==='complete'){
                    listItem.classList.add('completed');
                }
                tasklist.appendChild(listItem);
            });
        }
        displayTask();