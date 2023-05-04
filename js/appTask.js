import TaskClass from "./taskClass.js";
import { declareEvents } from "./declateEvents.js"
 let task_ar = [];

const init = () => {
    checkLocal();
    declareEvents(updateUi,task_ar);
    updateUi();
}
const checkLocal = () => {
    if (localStorage["tasks"]) {
        task_ar = JSON.parse(localStorage["tasks"]);
    }
}
const updateUi = (_task_ar=task_ar) => {
   let id_task=0;
   task_ar=_task_ar;
    document.querySelector("#id_row").innerHTML = "";
    task_ar = _.sortBy(task_ar, item => item.hour);
    task_ar.forEach(item=>{
        let task = new TaskClass("#id_row",item,id_task);
         item.id=task.id;
         id_task++;
        task.render(updateUi,task_ar);   
    })
    localStorage.setItem("tasks", JSON.stringify(task_ar));
}
init();