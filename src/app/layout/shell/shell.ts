import { Component } from '@angular/core';
import { AsideBar } from "./components/aside-bar/aside-bar";
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-shell',
  imports: [AsideBar, RouterOutlet],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {

}
