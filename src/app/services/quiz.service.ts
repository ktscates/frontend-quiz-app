import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizData = '../../data.json';

  constructor(private http: HttpClient) {}

  quizes(): Observable<any> {
    return this.http.get(this.quizData);
  }
}
