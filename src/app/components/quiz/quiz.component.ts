import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HeaderComponent],
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

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.subjectTitle = params.get('subjectTitle');
      if (this.subjectTitle) {
        this.questions = this.quizService.getQuestions(this.subjectTitle);
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        console.log('questions', this.questions);
      }
    });
  }
}
