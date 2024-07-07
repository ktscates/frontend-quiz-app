import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../result/result.component';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
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
  correctAnswer: string | null = null;
  isAnswerCorrect: boolean | null = null;
  score = 0;
  answered: boolean | null = null;
  showErrorMessage = false;
  showNextButton = false;

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
    this.showNextButton = false;
  }

  selectAnswer(option: string): void {
    if (!this.answered) {
      this.selectedAnswer = option;
      this.showErrorMessage = false;
    }
    console.log('option', option);
  }

  submitAnswer(): void {
    if (this.selectedAnswer === null) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
      this.showResult = true;
      this.isAnswerCorrect = this.selectedAnswer === this.correctAnswer;
      this.answered = true;
      this.showNextButton = true;
      if (this.isAnswerCorrect) {
        this.score++;
      }
    }
  }

  nextQuestions(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.showErrorMessage = false;
      this.currentQuestionIndex++;
      this.loadQuestion(this.currentQuestionIndex);
    } else {
      this.router.navigate(['/result'], {
        state: {
          score: this.score,
          subjectTitle: this.subjectTitle,
          questions: this.questions,
        },
      });
    }
  }
}
