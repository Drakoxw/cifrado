
import { Lexer } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  y:any = 'non'
  x:any = 'none'
  www:any;

  @HostListener('window:scroll', [])

  scroll():void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    let q = ((rect.top / 4)+(rect.top * 5));
    console.log('q',q);

    if (rect.top < 500) {
      this.x = ''
      this.y = ''
    }
    if (rect.top > 501 && rect.top < (q)) {
      this.x = 'activx'
      this.y = 'activy'
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
