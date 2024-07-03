import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: QuizSelectionComponent,
  },
  {
    path: 'quiz/:subjectTitle',
    component: QuizComponent,
  },
];
