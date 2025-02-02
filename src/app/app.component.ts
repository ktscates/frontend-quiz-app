import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { QuizService } from './services/quiz.service';
import { QuizComponent } from './components/quiz/quiz.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-quiz-app';
  switchedToDarkMode = false;

  switchThemes = () => {
    this.switchedToDarkMode = !this.switchedToDarkMode;
    const body = document.querySelector('body');
    if (this.switchedToDarkMode) {
      body?.classList.add('dark');
    } else {
      body?.classList.remove('dark');
    }
  };
}
