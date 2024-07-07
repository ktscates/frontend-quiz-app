import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit {
  @Input() score: number = 0;
  @Input() subjectTitle: string | null = null;
  @Input() questions: any[] = [];
  subjects: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.score = history.state.score;
      this.subjectTitle = history.state.subjectTitle;
      this.questions = history.state.questions;
    });
    this.loadSubjects();
  }

  loadSubjects(): void {
    this.subjects = this.quizService.getSubjects();
  }

  playAgain(): void {
    this.router.navigate(['/']);
  }
}
