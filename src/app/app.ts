import { Component } from '@angular/core';
import { PorteeComponent } from './portee/portee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PorteeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
