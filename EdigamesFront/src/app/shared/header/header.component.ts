import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public path: string[] = [];
  public pageButtons = [
    {name: "Home", path: ""},
    {name: "Games", path: "games"},
    {name: "Games", path: "games"},
    {name: "Games", path: "games"},
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.routerEventsSubscribe()
  }

  routerEventsSubscribe() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.path = event.url.split('/')
      }
    });
  }

  moveToPage(path: string) {
    this.router.navigate([path])
  }
}
