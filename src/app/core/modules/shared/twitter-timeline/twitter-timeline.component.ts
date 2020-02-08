import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.css'],
})
export class TwitterTimelineComponent implements OnInit {
  @Input() twitterId = '';
  @Input() height = 600;
  @Input() theme = 'light';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const a = document.createElement('a');
    a.classList.add('twitter-timeline');
    a.setAttribute('data-height', `${this.height}`);
    a.setAttribute('data-theme', `${this.theme}`);
    a.setAttribute(
      'href',
      `https://twitter.com/${this.twitterId}?ref_src=twsrc%5Etfw`,
    );
    a.innerHTML = `Tweets by ${this.twitterId}`;

    const script = document.createElement('script');
    script.setAttribute('async', 'true');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('charset', 'utf-8');

    this.elementRef.nativeElement.appendChild(a);
    this.elementRef.nativeElement.appendChild(script);
  }
}
