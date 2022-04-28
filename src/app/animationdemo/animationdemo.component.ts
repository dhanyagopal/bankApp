import { animate, style, state, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations: [
    trigger('openClose',[
      state('open',style({
        height:'500px',
        backgroundColor:'aqua'
      })),
      state('close',style({
        height:'250px',
        backgroundColor:'green'
      })),
      transition('open=>close',[
        animate('3s')
      ]),
      transition('close=>open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationdemoComponent implements OnInit {

isOpen=true

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen=!this.isOpen
  }
}
