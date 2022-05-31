import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NewMessageModalComponent } from './new-message-modal/new-message-modal.component';



@NgModule({
  declarations: [
    MainComponent,
    NewMessageModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
