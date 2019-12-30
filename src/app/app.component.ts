import { Component,ViewChildren, QueryList, ElementRef, AfterViewInit  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren("tmessageDiv") tmessageDivs: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.tmessageDivs.changes.subscribe(() => {
      if (this.tmessageDivs && this.tmessageDivs.last) {
        this.tmessageDivs.last.nativeElement.focus();
      }
    });
  }
  title = 'mvp-angular!';
  name: string = '';
  audio = new Audio('../assets/sendmessage.wav');
  
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
                    this.audio.play()
                    console.log(this.name)
                 }
}
