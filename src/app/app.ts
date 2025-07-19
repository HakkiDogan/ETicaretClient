import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; 
import { AdminModule } from './admin/admin-module';
import { UiModule } from './ui/ui-module';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, AdminModule, UiModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ETicaretClient';
}
