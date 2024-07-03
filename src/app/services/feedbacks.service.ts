import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  url = 'http://localhost:3000/feedback';

  constructor(private http: HttpClient) { }
  

  getFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.url);
  }

  addFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.url, feedback);
  }

  deleteFeedback(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  update(feedback: any, id: string): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, feedback);
  }

}
