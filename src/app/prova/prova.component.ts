import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';


@Component({
  selector: 'app-prova',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter, MatChipSet, MatChip],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges {

  dogs = [{
    nome: 'roger', razza: 'bassotto', descrizione: `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`
  }]

  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  constructor() {
    console.log("costruttore");
  }


  ngOnInit(): void {
    console.log("OnInit")
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }

  ngDoCheck(): void {
    console.log("DoCheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy")
  }

}
