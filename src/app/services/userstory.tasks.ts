import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserstoryTasks } from '../models/UserstoryTasks'
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class UserstoryTaskService{
    userstoryTaskUrl:string = 'https://jsonplaceholder.typicode.com/todos'
    userstoryTaskLimit:string = '?_limit=5'
    constructor(private http: HttpClient ){ }

    //get all the userstory taks from here
    getMockUserstoryTasks(){
        return [
            {
                id: 456321,
                title: 'development configuaration need to complete',
                completed: true
            },
            {
                id: 897564,
                title: 'Testing need to complete in Test environment',
                completed: false
            },
            {
                id: 757453,
                title: 'End to end testing need to complete',
                completed: false
            }
        ]
    }

    //since it is asynchronization call we will get observalable 
    getUserstoryTasks(): Observable<UserstoryTasks[]>{
        return this.http.get<UserstoryTasks[]>(`${this.userstoryTaskUrl}${this.userstoryTaskLimit}`);

    }
    //update userstory task
    updateUserstoryTask(userstoryTask: UserstoryTasks):Observable<any>{
        return this.http.put<any>(`${this.userstoryTaskUrl}/${userstoryTask.id}`, userstoryTask,
        httpOptions)
    }
    //add userstory task
    addUserstoryTask(userstoryTask: UserstoryTasks): Observable<UserstoryTasks>{
        return this.http.post<UserstoryTasks>(this.userstoryTaskUrl, userstoryTask, httpOptions)
    }
    //delete userstory task from the server
    deleteUserstoryTask(userstoryTask:UserstoryTasks): Observable<UserstoryTasks>{
        return this.http.delete<UserstoryTasks>(`${this.userstoryTaskUrl}/${userstoryTask.id}`, httpOptions)
    }
}