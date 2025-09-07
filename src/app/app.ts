import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; 
import { AdminModule } from './admin/admin-module';
import { UiModule } from './ui/ui-module';
import { CustomToastr, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr';

// declare var $: any;

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, AdminModule, UiModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ETicaretClient';
  constructor(private toastrService: CustomToastr) {
    this.toastrService.message("Hello world!", "Toastr Service", { messageType: ToastrMessageType.Success, position: ToastrPosition.BottomFullWidth });
  }
}

// $(document).ready(() => {
//   alert("jQuery is ready");
// });
