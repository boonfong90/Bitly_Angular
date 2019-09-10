import { Component, OnInit } from '@angular/core';
import { BitlyService } from '../bitly.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  urls: any[] = []
  isShowBar = false;
  linkForm = new FormControl(
    "",[])
  id: number
  Surl: {}
  destination: string

  constructor(private bitlyService: BitlyService) { }

  ngOnInit() {
    this.bitlyService.showAllURL().subscribe((urls) => {
      this.urls = urls as any[]
    })
  }

  onSubmit(){
    const formValues = this.linkForm.value
    this.bitlyService.shorten(formValues).subscribe(response => {
    })
    this.isShowBar = !this.isShowBar
    this.id = this.urls.length + 1
  }

  onClick(){
    this.bitlyService.showURL(this.id).subscribe((url) => {
      this.Surl = url
      this.destination = Object.keys(this.Surl).map(url => this.Surl[url])[1]

      window.location.href = this.destination
    })
  }

}
