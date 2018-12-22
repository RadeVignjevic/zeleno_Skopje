import { Component, OnInit } from '@angular/core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faFacebook = faFacebookF;
  faLinkedin = faLinkedinIn;
  faTwitter = faTwitter;

  constructor() {
  }

  ngOnInit(): void {
  }
}
