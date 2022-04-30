window.addEventListener('load',()=>{ // load hone k baad 
    const form = document.querySelector('#newTaskForm');
    const input = document.querySelector('#newTaskInput');
    const list_el = document.querySelector('#tasks');

    //////////////////// ADD TASK PRESS KARK K BAAD KYA HOGA ///////////////////////////////////////////////////
    form.addEventListener('submit',(e)=>{
        e.preventDefault(); // prevent refresh page 
       const task = input.value; // GIVES VALUE INSIDE INPUT BOX STORE IN TASK
       if(!task){ // agar kuch nhi likha to alert dega and return hojayega 
           alert("Please fill out  a task ")
           return;
       }

    ///////////////////////////////////////////////////////////////////////////////////////////    
    const task_el = document.createElement("div"); // new div ban jayega after adding task  agar task likha hoga 
    task_el.classList.add("task"); // us div ki id hogi task jo ki same div add karegi 
    list_el.appendChild(task_el);

    ///////////////////////////////////////////////////////////////////////////////////////////
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_el.appendChild(task_content_el);
    
    //////////////////////////////////////////////////////////////////////////////////////////   
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text")
    task_input_el.type="text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly","readonly");
    task_content_el.appendChild(task_input_el)

    /////////////////////////////////////////////////////////////////////////////////////////////
    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions"); 
    task_el.appendChild(task_action_el);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";
    task_action_el.appendChild(task_edit_el);   

    ///////////////////////////////////////////////////////////////////////////////////////////////
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";
    task_action_el.appendChild(task_delete_el);

   ////////////////////////////////////////////////////////////////////////////////////////////////    

    list_el.appendChild(task_el);
    input.value=""; // again empty the space 

    /////////////////////////////////////////////////////////////////////////////////////////////
    task_edit_el.addEventListener('click',()=>{
     
        if(task_edit_el.innerText.toLowerCase() == 'edit'){
        task_input_el.removeAttribute("readonly");
        task_input_el.focus(); // -- when i press edit currsor directly go into edit bot 
        task_edit_el.innerText="Save"; // change edit to save 
        }else{
        task_input_el.setAttribute("readonly","readonly");
        task_edit_el.innerText="Edit";
        }

    });

    task_delete_el.addEventListener('click',()=>{
        list_el.removeChild(task_el);
    });

    
    });
    
});