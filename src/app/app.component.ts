import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';


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
  options: boolean = false;
  messageSelected: boolean=false;
  audio = new Audio();
  audio2 = new Audio();


  tableMessages = [{
    name: "Table #32",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Table #16",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Table #8",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Table #14",
    body: "May i please have some more celery on my plate, please. :)"
  }];
  kitchenMessages = [{
    name: "Kitchen",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Kitchen",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Kitchen",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Kitchen",
    body: "May i please have some more celery on my plate, please. :)"
  }];
  getInput2() {
    //this.name = 'Nancy';
    let newKMessage = {
      name: "Table 8",
      body: this.name
    }
    this.kitchenMessages.push(newKMessage)
    this.audio.src = "../assets/sendmessage.wav";
    this.audio.load();
    this.audio.play();
    window.navigator.vibrate(50);

    console.log(this.name)
  }
  getInput() {
    //this.name = 'Nancy';
    let newTMessage = {
      name: "Table 8",
      body: this.name
    }
    this.tableMessages.push(newTMessage)
    this.audio.src = "../assets/sendmessage.wav";
    this.audio.load();
    this.audio.play();
    window.navigator.vibrate(50);

    console.log(this.name)
  }
  selecto() {

    this.audio2.src = "../assets/tap.wav";
    this.audio2.load();
    this.audio2.play();
    
    if(!this.options){
      this.options = true;
      this.messageSelected = true;
    }else{
      this.options = false;
      this.messageSelected = false;

    }
    //window.navigator.vibrate(50);
  }
}
