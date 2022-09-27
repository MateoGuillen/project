import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  list: string[] = ['javascript', 'typescript', 'python'];
  show: boolean = true;
  buttonlegend: string = "Hide";
  test1: string = "equisde";

  constructor() {}

  ngOnInit(): void {}

  mostrar(): void {
    if (this.show === true) {
      this.show = false;
      this.buttonlegend = "Show";
    } else {
      this.show = true;
      this.buttonlegend = "Hide";
    }
  }
  funcion(): void {
    alert(this.test1)
  }
}

