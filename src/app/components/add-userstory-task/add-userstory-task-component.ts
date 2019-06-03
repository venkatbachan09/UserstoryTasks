import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-add-userstory-task',
    templateUrl: './add-userstory-task-component.html',
    styleUrls: ['./add-userstory-task-component.css']
})
export class AddUserstoryTaskComponent implements OnInit{
    title:string;
    @Output() addUserstoryTask: EventEmitter<any> = new EventEmitter();
    constructor(){}
    ngOnInit(){}

    onSubmit(){
        console.log("here in add")
        const userstoryTask = {
            title: this.title,
            completed: false
        }
        this.addUserstoryTask.emit(userstoryTask)
    }
}