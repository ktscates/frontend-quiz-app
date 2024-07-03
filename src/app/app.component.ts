import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection.component';
import { QuizService } from './services/quiz.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, QuizSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'frontend-quiz-app';
  switchedToDarkMode = false;
  subjects: any[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.fetchSubjects();
  }

  fetchSubjects(): void {
    this.quizService.getSubjects().subscribe((subjects) => {
      this.subjects = subjects.map((subject, index) => ({
        ...subject,
        backgroundColor: this.getIconBackground(index),
      }));
    });
    console.log('subs', this.subjects);
  }

  getIconBackground(index: number) {
    const colors = ['#FF7E35', '#2FD887', '#306AFF', '#A729F5'];
    return colors[index % colors.length];
  }

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
