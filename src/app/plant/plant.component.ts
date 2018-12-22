import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit, AfterViewInit {
  @ViewChild('drop') drop: ElementRef;
  @ViewChild('stem') stem: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.stem.nativeElement);
    console.log(this.drop.nativeElement);
  }

  grow() {
    this.stem.nativeElement.classList.add("rain");
    setTimeout(function () { 
      this.stem.nativeElement.classList.remove('rain');
    }, 1200);
  }

  // $(".drop").click(function() {
  //   $(".stem").addClass("rain");
    
  //   setTimeout(function () { 
  //     $('.stem').removeClass('rain');
  //   }, 1200);  
  // });
}
