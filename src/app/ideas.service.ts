import { Injectable } from '@angular/core';
import { Idea } from './idea';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  ideas: Idea[];

  constructor() { 
    this.ideas = [
      {
        title: "Davor B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Skopje",
        upvotes: 31
      },
      {
        title: "Bobit B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Kavadarci",
        upvotes: 21
      },
      {
        title: "Nevena B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Skopje",
        upvotes: 14
      },
      {
        title: "Rade B.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin.",
        city: "Skopje",
        upvotes: 12
      },
    ]
  }

  getIdeas(): Idea[] {
    return this.ideas;
  }

  addIdea(idea: Idea): void {
    this.ideas.unshift(idea);
  }
}
