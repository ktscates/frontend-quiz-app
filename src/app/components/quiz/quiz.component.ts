import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  subjectTitle: string | null = null;
  questions: any[] = [];
  currentQuestionIndex = 0;
  currentQuestion: any = null;
  selectedAnswer: string | null = null;
  showResult = false;
  correctAnswer: boolean | null = null;
  score = 0;
  answered: boolean | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.subjectTitle = params.get('subjectTitle');
      if (this.subjectTitle) {
        this.questions = this.quizService.getQuestions(this.subjectTitle);
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.correctAnswer = this.currentQuestion.answer;
      }
    });
  }

  loadQuestion(index: number): void {
    this.currentQuestion = this.questions[index];
    this.correctAnswer = this.currentQuestion.answer;
    this.selectedAnswer = null;
    this.showResult = false;
    this.answered = false;
  }

  selectAnswer(option: string): void {
    if (!this.answered) {
      this.selectedAnswer = option;
      this.showResult = true;
      this.correctAnswer = this.selectedAnswer === this.currentQuestion.answer;
      this.answered = true;

      if (this.correctAnswer) {
        this.score++;
      }
    }
  }

  submitAnswer(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.loadQuestion(this.currentQuestionIndex);
    } else {
      console.log('Quiz completed! Score:', this.score);
      this.router.navigate(['/result']);
    }
  }
}
