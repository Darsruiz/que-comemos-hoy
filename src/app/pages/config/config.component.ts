import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  wizard(){
  this.router.navigateByUrl('/form')
  }

}
