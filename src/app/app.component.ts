import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { generate } from 'rxjs';
import { message } from './Model/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imggen';
  Search: string = '';
  response:string = '';
  messages = [
    
      {
        "role": "system",
        "content": "You are a helpful assistant."
      }
    
  ]

  constructor(private ser:CommonService) {}

    generateImage() {
      
      console.log(this.Search);
      let msg = {
        "role":"user",
        "content":this.Search
      }
     
      this.messages.push(msg);

      console.log(this.messages);
      this.Search = ''

      this.ser.GenerateImage(this.messages).subscribe({
        next:(data) => {

          console.log(data.choices[0].message.content)

         let response = data.choices[0].message.content;

         this.response = response;

          let chatMessage =  {
            "role":"assistant",
            "content":response
          }

          console.log(chatMessage);
          console.log(chatMessage.content)

          this.messages.push(chatMessage);
         
        }

      })
    }

  
}
