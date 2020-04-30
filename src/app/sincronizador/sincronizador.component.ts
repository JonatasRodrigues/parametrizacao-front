import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sincronizador',
  templateUrl: './sincronizador.component.html',
  styleUrls: ['./sincronizador.component.css']
})
export class SincronizadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var oDiv = document.getElementById("sidebar");
    var content = document.getElementById("content");    
    oDiv.style.height = content.offsetHeight + "px";	

    var oDiv = document.getElementById("sidebar");
    var content = document.getElementById("content");
    var iWidth = window.innerWidth - oDiv.offsetWidth;
    content.style.width = iWidth + "px";
  }

}
