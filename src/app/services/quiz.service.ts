import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QUIZZES } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor() {}

  //get subjects from QUIZZES
  getSubjects(): Observable<any[]> {
    const quizzTitles = QUIZZES.map((quiz) => ({
      title: quiz.title,
      icon: quiz.icon,
    }));
    return new Observable((observer) => {
      observer.next(quizzTitles);
    });
  }
}
