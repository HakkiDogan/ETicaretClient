import { Component, OnInit } from '@angular/core';
//import { Alertify, MessageType, Position } from '../../services/admin/alertify';
// declare var alertify: any;
@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit{
  //constructor(private alertify: Alertify){ }

  ngOnInit(): void {
    //this.alertify.message("Layout component loadedddd", MessageType.Success, Position.TopCenter);
  }
}
