import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  active:string = 'nav nell'
  toogle:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toogleC(){
    this.toogle = !this.toogle
    console.log(this.toogle);
    if(this.toogle){
      this.active = 'nav active'
    }else{
      this.active = 'nav nell'
    }
  }

}
