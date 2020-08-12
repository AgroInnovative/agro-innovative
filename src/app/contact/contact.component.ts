import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
import {
  fade,
  slide,
  slideBounceOut,
  bounceOutLeftAnimation,
  fadeInAnimation,
} from './../common/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fade, slide],
})
export class ContactComponent implements OnInit {
  message: Message = new Message('', '', '', '');
  constructor(private messageService: MessageService) {}

  email = 'hello@elzian.com';
  officeAddress = 'KandyRoad, Kurunegala';
  phoneNumber = '0768416637';
  ngOnInit(): void {}

  onAdd() {
    if (
      this.message.Name === '' ||
      this.message.Telephone === '' ||
      this.message.Email === '' ||
      this.message.Message === ''
    ) {
      window.alert('Add some useful messages and your details correctly');
    } else this.messageService.addMessage(this.message);
  }
}
