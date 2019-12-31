import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  audio = new Audio();
  audio2 = new Audio();
  name:string=''
  bothMessages = [{
    name: "Table #32",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Kichen",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Table #8",
    body: "May i please have some more celery on my plate, please. :)"
  }, {
    name: "Kitchen",
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
  }]
  getInput() {
    //this.name = 'Nancy';
    let newTMessage = {
      name: "Table 8",
      body: this.name,
      color:' col s12 l3 right-align   animated fadeIn green lighten-4',
      array:0
    }
    let newKMessage = {
      name: "Kitchen",
      body: this.name,
      color:' col s12 l3 right-align   animated fadeIn red lighten-4',
      array:1

    }
    let messageArray = [newTMessage,newKMessage]

   
      this.bothMessages.push(newTMessage)
      console.log(newKMessage.array+1)


    
    
    this.audio.src = "../assets/sendmessage.wav";
    this.audio.load();
    this.audio.play();
    window.navigator.vibrate(50);

    console.log(this.name)
  }
  getInput22() {
    //this.name = 'Nancy';
    let newTMessage = {
      name: "Table 8",
      body: this.name,
      color:' col s12 l3 right-align   animated fadeIn green lighten-4',
      array:0
    }
    let newKMessage = {
      name: "Kitchen",
      body: this.name,
      color:' col s12 l3 right-align   animated fadeIn red lighten-4',
      array:1

    }
    let messageArray = [newTMessage,newKMessage]

   
      this.bothMessages.push(newKMessage)
      console.log(newKMessage.array+1)

    
    
    this.audio.src = "../assets/sendmessage.wav";
    this.audio.load();
    this.audio.play();
    window.navigator.vibrate(50);

    console.log(this.name)
  }
  constructor() { }

  ngOnInit() {
  }

}
