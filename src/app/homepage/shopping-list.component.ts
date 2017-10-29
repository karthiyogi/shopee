import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
showicon:boolean =false;
public modalRef: BsModalRef;
public config = {
  animated: true,
  keyboard: true,
  backdrop: true,
  ignoreBackdropClick: false
};
constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  toggleicon() {

    this.showicon = !this.showicon;
  }

  public openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.config, {class: 'gray modal-lg modal_top'}));
  }

  public openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
