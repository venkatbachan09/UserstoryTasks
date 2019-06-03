import { Component, OnInit } from '@angular/core';
import { UserstoryTasks } from '../../models/UserstoryTasks';
import { UserstoryTaskService } from '../../services/userstory.tasks';

@Component({
    selector: 'app-userstory-tasks-component',
    templateUrl: './userstory-tasks-component.html',
    styleUrls: ['./userstory-tasks-component.css']
})
export class UserstoryTasksComponent implements OnInit{
    userStoryTasks: UserstoryTasks[];
    //constructor get the service object
    constructor(private userstoryTaskSvc: UserstoryTaskService){

    }
    //since it is a promises we need to subcribe
    ngOnInit(){
        this.userstoryTaskSvc.getUserstoryTasks().subscribe(userStoryTasks=>{
            this.userStoryTasks = userStoryTasks;
        });
        
    }
    addUserstoryTask(userStoryTask: UserstoryTasks){
        this.userstoryTaskSvc.addUserstoryTask(userStoryTask).subscribe(userStoryTask => {
            this.userStoryTasks.push(userStoryTask);
        })
    }
    deleteUserstoryTask(userstoryTask:UserstoryTasks){
        //delete on UI
        this.userStoryTasks = this.userStoryTasks.filter(task => task.id !== userstoryTask.id)
        //delete on the server
        this.userstoryTaskSvc.deleteUserstoryTask(userstoryTask).subscribe();
    }
}