import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mvp-angular!';
  name: string = '';
  tableMessages = [{
    name: "Table #32",
    body:"May i please have some more celery on my plate, please. :)"}, {
      name: "Table #16",
      body:"May i please have some more celery on my plate, please. :)"}, {
        name: "Table #8",
        body:"May i please have some more celery on my plate, please. :)"}, {
          name: "Table #14",
          body:"May i please have some more celery on my plate, please. :)"}];
          kitchenMessages = [{
            name: "Kitchen",
            body:"May i please have some more celery on my plate, please. :)"}, {
              name: "Kitchen",
              body:"May i please have some more celery on my plate, please. :)"}, {
                name: "Kitchen",
                body:"May i please have some more celery on my plate, please. :)"}, {
                  name: "Kitchen",
                  body:"May i please have some more celery on my plate, please. :)"}];
                  getInput() { 
                    //this.name = 'Nancy';
                    let newTMessage = {
                      name: "Table 8",
                      body:this.name
                    }
                    this.tableMessages.push(newTMessage)
                    console.log(this.name)
                 }
}
