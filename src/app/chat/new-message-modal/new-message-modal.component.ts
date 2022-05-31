import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/_service/users.service';


@Component({
  selector: 'app-new-message-modal',
  templateUrl: './new-message-modal.component.html',
  styleUrls: ['./new-message-modal.component.scss']
})
export class NewMessageModalComponent implements OnInit {

  @ViewChild('contentRef', { static: true }) newMessageModal: any;

  user: any;
  public modalReference: any = NgbModal;

  constructor(private _user: UsersService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.users();
  }

  
  users() {
    this._user.getAll().subscribe(
      user => this.user = user
    )
  }

  show(): void{
    this.modalReference = this.modalService.open(this.newMessageModal);
    console.log('show modal');
  }

  close(){
    this.modalReference.close();
  }
}
