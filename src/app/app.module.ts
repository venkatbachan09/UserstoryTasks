import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UserstoryTasksComponent } from './components/userstory-tasks/userstory-tasks-component';
import { UserstoryTaskComponent } from './components/userstory-task/userstory-task-component';
import { HeaderComponent } from './components/layout/header-component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AddUserstoryTaskComponent } from './components/add-userstory-task/add-userstory-task-component';


@NgModule(
  {
    declarations:[
      //all the components declaration will be here
      AppComponent,
      UserstoryTasksComponent,
      UserstoryTaskComponent,
      HeaderComponent,
      AddUserstoryTaskComponent

    ],
    imports:[
      //all the required external libraries entry will be here
      //browsermodule which handle with the DOM.
      BrowserModule,
      //its get the capubulity of angular router to the our app.
      AppRoutingModule,
      //which is like axois or fetch api
      HttpClientModule,
      //for utlizing forms
      FormsModule

    ],
    providers:[
      //we need to include services here.

    ],
    bootstrap:[
      //which are all components we need to load, we need to give entry here,
      //since it is a single page application, app component will load all the other components 
      //so
      AppComponent
    ]
  }
)
export class AppModule{}