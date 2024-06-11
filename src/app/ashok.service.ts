import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AshokService {

  constructor(private _httpClinet:HttpClient) { }
  getMail():Observable<any>{
    return this._httpClinet.get("https://jsonplaceholder.typicode.com/todos");
  }
  deletemail(id:number):Observable<any>{
    return this._httpClinet.delete("https://jsonplaceholder.typicode.com/todos/"+id);
  }
}
