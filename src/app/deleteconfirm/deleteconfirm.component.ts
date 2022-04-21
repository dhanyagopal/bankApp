import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input() item:string |undefined  //parent - child(@input)

  @Output() onCancel = new EventEmitter()  //child - parent(@output)

  @Output() onDelete =new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

cancel(){
  this.onCancel.emit()
}

delete(){
this.onDelete.emit(this.item)
}

}
