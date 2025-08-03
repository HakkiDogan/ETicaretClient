import { Component } from '@angular/core';
import { Alertify, MessageType, Position } from '../../../services/admin/alertify';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  constructor(private alertify: Alertify){ }

  ngOnInit(): void {
    
  }

  showMessage(){
    this.alertify.message("Dashboard component loadedddd");
  }

  dismiss(){
    this.alertify.dismissAll();
  }
}
