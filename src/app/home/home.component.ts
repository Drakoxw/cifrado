
import { Lexer } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  y:any = ''
  x:any = ''
  www:any;
  med = {
    500 : 350,//
    600 : 398,//
    700 : 424,//
    800 : 494,//
    900 : 542,// 432
    1000 : 590,// 480
    1100 : 638,// 528
    1200 : 686,// 573
    1300 : 706
  }

  @HostListener('window:scroll', [])

  scroll():void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    let q = (rect.top + 100);
    //console.log('q',q);

    if (rect.top < 501) {
      this.x = ''
      this.y = ''
    }
    if (rect.top ) {

    }

    console.log('top', rect.top);
  }

  private mapRange(a1:number,a2:number, b1:number, b2:number,value:number ){
    return b1 + ((value - a1) * (b2 -b1))/ (a2 -a1);
  }

  constructor(private el: ElementRef) {
    this.www = this.scroll
  }

  ngOnInit(): void {


  }

}
