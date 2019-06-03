import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserstoryTasks } from 'src/app/models/UserstoryTasks';
import { UserstoryTaskService } from '../../services/userstory.tasks';

@Component({
    selector: 'app-userstory-task',
    templateUrl: './userstory-task-component.html',
    styleUrls: ['./userstory-task-component.css']
})
export class UserstoryTaskComponent implements OnInit{

    @Input() userstorytask: UserstoryTasks;
    @Output() deleteUserstoryTask: EventEmitter<UserstoryTasks> =new EventEmitter();

    constructor(private userstoryTaskSvc: UserstoryTaskService){

    }
    ngOnInit(){

    }
    //set dynamic css classes here.
    setClasses(){
        let classes ={
            userstorytask: true,
            'is-complete': this.userstorytask.completed
        }
        return classes;
    }

    onCheck(userstorytask){
        //when user check on check box, it means that task not yet completed.
        userstorytask.completed = !this.userstorytask.completed;
        //update the server as well
        this.userstoryTaskSvc.updateUserstoryTask(userstorytask).subscribe(userstoryTask=>{
            console.log(userstoryTask)
        })

    }
    onDelete(userstorytask){
        //passing data to UI as output
        this.deleteUserstoryTask.emit(userstorytask)
    }

}