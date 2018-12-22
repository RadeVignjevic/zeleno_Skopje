import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { Idea } from '../idea';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'app-ideas-carousel',
  templateUrl: './ideas-carousel.component.html',
  styleUrls: ['./ideas-carousel.component.scss']
})
export class IdeasCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray: any;
  public carouselOptions: NguCarousel;
  public ideas: Idea[];
  constructor(private ideasService: IdeasService) {
    this.ideas = this.ideasService.getIdeas();
   }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: false
    }
  }

  onUpvoteClick(idea: Idea) {
    idea.upvotes++;
  }

}
