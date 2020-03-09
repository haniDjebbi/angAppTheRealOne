import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { Observable } from 'rxjs';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  private baseUrl ="http://localhost:3000/employee" ;

  constructor(private http:HttpClient) { }


  getEmployee(id:number): Observable<object>{
    return this.http.get(this.baseUrl+"?id="+id) ;
  }

  createEmployee(employee:object):Observable<object>{
    return this.http.post(this.baseUrl,employee) ;
  }
  delteEmployee(id:number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });

  }
  listEmployee():Observable<any>{
    return this.http.get(this.baseUrl) ;
  }
}
