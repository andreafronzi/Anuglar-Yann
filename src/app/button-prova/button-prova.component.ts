import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-prova',
  imports: [MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './button-prova.component.html',
  styleUrl: './button-prova.component.css'
})
export class ButtonProvaComponent implements OnInit{

  isDisabled = true;

  ngOnInit(): void {
    console.log("OnInit");
  }


}
