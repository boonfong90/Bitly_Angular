import { Component, OnInit } from '@angular/core';
import { BitlyService } from '../bitly.service';

@Component({
  selector: 'app-url-list-page',
  templateUrl: './url-list-page.component.html',
  styleUrls: ['./url-list-page.component.css']
})
export class UrlListPageComponent implements OnInit {
  urls: any[] = []

  constructor(private bitlyService: BitlyService) { }

  ngOnInit() {
    this.bitlyService.showAllURL().subscribe((urls) => {
      this.urls = urls as any[]
    })
  }

}
