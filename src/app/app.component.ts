import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  selected:any;
  result:number=0;

  calculateTemp(data:any){
  
    if(this.selected === "Fahrenheit")
    {
      data= parseFloat(data);
      this.result=+((data-32) / 1.8).toFixed(2);

     
    }

    if(this.selected==="Kelvin")
    {
      data= parseFloat(data);
      this.result = +(data - 273.15).toFixed(2);
    }
    console.log(this.result);
    console.log(typeof(this.result));

  }
}
