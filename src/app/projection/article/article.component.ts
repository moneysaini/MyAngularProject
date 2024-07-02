import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements AfterContentInit {

  @ContentChild('mycontent')
  articleContent: ElementRef | undefined;

  today: Date;
  flag: boolean = false;

  constructor() {
    this.today = new Date();


  }

  ngAfterContentInit(): void {
    if (this.articleContent != undefined) {
      this.articleContent.nativeElement.textContent = this.articleContent.nativeElement.textContent + ".Thank you.";
    }
  }


  update() {
    if (this.articleContent != undefined) {
      this.articleContent.nativeElement.textContent = "removed";
    }

  }


}
