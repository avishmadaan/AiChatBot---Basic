import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private hc:HttpClient) { }

  GenerateImage(Parms:any):Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer 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'
    });

    const data = {
      "model": "gpt-3.5-turbo",
      "messages":Parms
      
    };
    return this.hc.post('https://api.openai.com/v1/chat/completions', data, {headers})
 }
}
