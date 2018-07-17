import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        let lang = window.navigator.language.substr(0, 2) == "ja" ? "ja" : "en";
        this.router.navigate(["/" + lang]);
    }
}
