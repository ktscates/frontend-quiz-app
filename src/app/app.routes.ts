import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { Routes } from '@angular/router';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  {
    path: '',
    component: QuizSelectionComponent,
  },
  {
    path: 'quiz/:subjectTitle',
    component: QuizComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
];
