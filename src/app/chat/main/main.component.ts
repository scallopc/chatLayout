import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/_service/users.service';
import { NewMessageModalComponent } from '../new-message-modal/new-message-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 @ViewChild('newMessageModal', { static: true }) newMessageModal: any = NewMessageModalComponent;

  user: any;
  select: boolean = true;

  constructor(private _user: UsersService) { }

  ngOnInit(): void {
    this.users();
  }


  users() {
    this._user.getAll().subscribe(
      user => this.user = user
    )

  }

  showNewMessageModal() {
    this.newMessageModal.show();
  }

}
