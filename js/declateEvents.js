import TaskClass from "./taskClass.js";
export const declareEvents = (updateUi,task_ar) => {
  document.querySelector("#id_form").addEventListener("submit", (e) => {
      e.preventDefault();
      let taskNew = {
        name: document.querySelector("#id_name").value,
        hour: document.querySelector("#id_hour").value,
      };
      let task=new TaskClass("#id_row",taskNew,task_ar.length);
      task_ar.push(task);
      updateUi(task_ar);
  });
  document.querySelector("#reset_btn").addEventListener("click", () => {
    let answer = confirm("do you want do delete all tasks?");
    if (answer) {
      task_ar.splice(0, task_ar.length);
      updateUi(task_ar);
    }
  })
}