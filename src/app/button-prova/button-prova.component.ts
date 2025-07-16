import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-button-prova',
  imports: [MatIconModule, MatDividerModule, MatButtonModule, NgIf],
  templateUrl: './button-prova.component.html',
  styleUrl: './button-prova.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonProvaComponent implements OnInit{

  @Input() isDisabled = true;
  @Input() hide = false;

  ciao= 'ciao';

  ngOnInit(): void {
    console.log("OnInit");
    this.ciao= 'miao';
  }


}
