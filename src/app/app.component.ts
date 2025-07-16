import { Component,ChangeDetectionStrategy } from '@angular/core';
import {ProvaComponent} from './prova/prova.component';
import {ButtonProvaComponent} from './button-prova/button-prova.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [
    ProvaComponent, ButtonProvaComponent,MatProgressBarModule,MatChipsModule,
    MatCardModule,MatIconModule,MatDividerModule,MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso-angular';
}

