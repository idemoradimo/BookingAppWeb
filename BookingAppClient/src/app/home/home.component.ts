import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: string;

  constructor() {
    this.role = localStorage.getItem('role');
  }

  ngOnInit() {
  }

}
