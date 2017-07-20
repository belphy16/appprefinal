import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  ngOnInit() {

  }

 
  constructor(private router: Router) { }

 logout() {
    this.router.navigate(["./login"]);
  }


}