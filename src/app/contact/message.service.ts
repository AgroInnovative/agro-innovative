import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [];
  private AddMessageUrl = 'http://localhost:3000/message';

  private messagesUpdated = new Subject<Message[]>();
  private DeleteMessageUrl = 'http://localhost:3000/message/';
  constructor(private http: HttpClient) {}

  getMessagesUpdateListener() {
    return this.messagesUpdated.asObservable();
  }

  getMessage() {
    this.http.get(this.AddMessageUrl).subscribe(
      (res) => {
        this.messages = res as Message[];
        this.messagesUpdated.next([...this.messages]);
      },
      (err) => console.log(err)
    );
    return [...this.messages];
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.http.post(this.AddMessageUrl, message).subscribe(
      (res) => window.alert('Message Add successfully'),
      (err) => console.log(err)
    );
  }

  deleteMessage(_id: string) {
    this.http.delete(this.DeleteMessageUrl + _id).subscribe(
      (res) => {
        this.getMessage();
        window.alert('message delete successfully');
      },
      (err) => console.log(err)
    );
  }
}
