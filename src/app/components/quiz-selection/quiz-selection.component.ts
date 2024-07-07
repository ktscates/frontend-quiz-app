import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-selection.component.html',
  styleUrl: './quiz-selection.component.css',
})
export class QuizSelectionComponent implements OnInit {
  subjects: any[] = [];
  questions: any[] = [];
  selectedSubject = new EventEmitter<string>();

  constructor(private router: Router, private quizService: QuizService) {}

  ngOnInit(): void {
    this.fetchSubjects();
  }

  fetchSubjects(): void {
    this.subjects = this.quizService.getSubjects();
  }

  onSubjectSelected(subjectTitle: string) {
    this.selectedSubject.emit(subjectTitle);
    this.router.navigate(['/quiz', subjectTitle]);
  }
}
