import { Injectable } from '@angular/core';
import { QUIZZES } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor() {}

  //get subjects from QUIZZES
  getSubjects() {
    const quizzTitles = QUIZZES.map((quiz) => ({
      title: quiz.title,
      icon: quiz.icon,
    }));
    return quizzTitles;
  }

  getQuestions(subjectTitle: string) {
    const quizSubject = QUIZZES.find((quiz) => quiz.title === subjectTitle);
    return quizSubject ? quizSubject.questions : [];
  }
}
