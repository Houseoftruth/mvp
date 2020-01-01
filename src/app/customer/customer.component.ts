import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChildren("tmessageDiv") tmessageDivs: QueryList<ElementRef>;
  @ViewChildren("tmessageDiv2") tmessageDivs2s: QueryList<ElementRef>;


  ngAfterViewInit() {
    this.tmessageDivs.changes.subscribe(() => {
      if (this.tmessageDivs && this.tmessageDivs.last) {
        this.tmessageDivs.last.nativeElement.focus();
      }
    });
    this.tmessageDivs2s.changes.subscribe(() => {
      if (this.tmessageDivs2s && this.tmessageDivs2s.last) {
        this.tmessageDivs2s.last.nativeElement.focus();
      }
    });
  }
  title = 'mvp-angular!';
  name: string = '';
  options: boolean = false;
  chatInputOpen: boolean = false;
  messageSelected: boolean = false;
  messagePressed: boolean = false;
  messageNotPressed: boolean = true;
  receiptPressed: boolean = false;
  audio = new Audio();
  audio2 = new Audio();
  audio3 = new Audio();
  audio4 = new Audio();

  bothMessages = [{
    name: "Table #32",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Kichen",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Table #8",
    body: "May i please have some more celery on my plate, please. :)",

  }, {
    name: "Kitchen",
    body: "May i please have some more celery on my plate, please. :)",
    color: ' col s12 l3 right-align   animated fadeIn grey lighten-4',
    colorposition: 'grey'
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
  }]
  selecto(loopindex) {
    console.log(loopindex)
    console.log(this.bothMessages[loopindex])
    this.openChatBox() 
    if (this.bothMessages[loopindex].colorposition == 'red') {

      this.bothMessages[loopindex].color = ' col s12 l3 right-align   animated fadeIn grey lighten-4'
      this.bothMessages[loopindex].colorposition = 'grey'
      console.log(this.bothMessages[loopindex].colorposition)

    } else if (this.bothMessages[loopindex].colorposition == 'green') {

      this.bothMessages[loopindex].color = ' col s12 l3 right-align   animated fadeIn red lighten-4'
      this.bothMessages[loopindex].colorposition = 'red'
      console.log(this.bothMessages[loopindex].colorposition)
      console.log("Here")

    }else if (this.bothMessages[loopindex].colorposition == 'grey') {

      this.bothMessages[loopindex].color = ' col s12 l3 right-align   animated fadeIn green lighten-4'
      this.bothMessages[loopindex].colorposition = 'green'
      console.log(this.bothMessages[loopindex].colorposition)

    }


    this.audio2.src = "../assets/tap.wav";
    
    this.audio2.load();
    this.audio2.play();

    if (!this.options) {
      this.options = true;
      this.messageSelected = true;
    } else {
      this.options = false;
      this.messageSelected = false;

    }
    //window.navigator.vibrate(50);
  }
  getInput() {
    //this.name = 'Nancy';
    let newTMessage = {
      name: "Table #8",
      body: this.name,
      color: ' col s12 l3 right-align   animated fadeIn green lighten-4',
      array: 0,
      colorposition:'green'
    }
    let newKMessage = {
      name: "Kitchen",
      body: this.name,
      color: ' col s12 l3 right-align   animated fadeIn red lighten-4',
      array: 1
      ,
      colorposition:'red'

    }
    let messageArray = [newTMessage, newKMessage]


    this.bothMessages.push(newTMessage)
    console.log(newKMessage.array + 1)

if(this.messagePressed){
  this.messagePressed=false;

}else{
  this.messagePressed=true;

}


    this.audio.src = "../assets/send.wav";
    this.audio.load();
    this.audio.play();
    window.navigator.vibrate(50);

    console.log(this.name)
  }
  openChatBox() {
    
    this.audio3.src = "../assets/swoosh.wav";
    
    this.audio3.load();
    this.audio3.play();

    if(this.chatInputOpen){
      this.chatInputOpen=false;
      window.navigator.vibrate(50);

      
    }else{
      this.chatInputOpen=true;
      window.navigator.vibrate(50);

    
    }
  }
  getInput22() {
    //this.name = 'Nancy';
    let newTMessage = {
      name: "Table 8",
      body: this.name,
      color: ' col s12 l3 right-align   animated fadeIn green lighten-4',
      array: 0,
      colorposition:'green'
    }
    let newKMessage = {
      name: "Kitchen",
      body: this.name,
      color: ' col s12 l3 right-align   animated fadeIn red lighten-4',
      array: 1
      ,
      colorposition:'red'

    }
    let messageArray = [newTMessage, newKMessage]

if(this.receiptPressed){
  this.receiptPressed=false;
  
}else{
  this.receiptPressed=true;

}

    this.bothMessages.push(newKMessage)
    console.log(newKMessage.array + 1)



    this.audio4.src = "../assets/kitchen.wav";
    this.audio4.load();
    this.audio4.play();
    window.navigator.vibrate(50);

    console.log(this.name)
  }
  constructor() { }

  ngOnInit() {
  }

}
