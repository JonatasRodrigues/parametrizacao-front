import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today:Number;
  fixedTimezone:Number;

  constructor() { }

  ngOnInit(): void {
    this.today = Date.now();
 
    var oDiv = document.getElementById("sidebar");
    var content = document.getElementById("content");
    var iWidth = window.innerWidth - oDiv.offsetWidth - 30;
    content.style.width = iWidth + "px";
  }

}
