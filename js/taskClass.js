import {declareEvents} from "./declateEvents.js"
export default class TaskClass {
    constructor(_parent, _item,_id) {
        this.parent = _parent;
        this.id =_id;
        this.name = _item.name;
        this.hour = _item.hour;
    }
    render(updateUi,task_ar) {
        console.log("render");
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdHour = document.createElement("td");
        let tdBtn = document.createElement("td");
        let th = document.createElement("th");
        tr.append(th);
        tr.append(tdBtn);
        tr.append(tdName);
        tr.append(tdHour);
        th.innerHTML = this.id;
        tdName.innerHTML = this.name;
        tdHour.innerHTML = this.hour;
        tdBtn.innerHTML = `<button class="btn btn-danger m-2 rounded-5">X</button>`;
        document.querySelector(this.parent).append(tr);
        tdBtn.addEventListener("click", () => {
            let answer=confirm("do you sure you want delete this task?");
            if(answer){
            let idRemove = task_ar.findIndex(x => { return x.id == this.id });
            task_ar.splice(idRemove,1);
            updateUi(task_ar);
            declareEvents(updateUi,task_ar);
            }
        });
    }
}