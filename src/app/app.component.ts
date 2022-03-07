import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  imageUrl="../assets/bridgelabz-logo.png";
  url="https://bridgelabz.com/";
  userName: string="";

  ngOnInit(): void{
    this.title="Hello from bridgelabz";
  }
  onClick($event: any){
    console.log("Save button is clicked!",$event);
    window.open(this.url,"_blank");
  }
}
