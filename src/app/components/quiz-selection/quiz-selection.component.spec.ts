import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizSelectionComponent } from './quiz-selection.component';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

class MockRouter {
  navigate = jest.fn();
}

class MockQuizService {
  getSubjects() {
    return [
      { title: 'Math', icon: 'math-icon' },
      { title: 'French', icon: 'french-icon' },
      { title: 'English', icon: 'english-icon' },
      {
        title: 'Geography',
        icon: 'geo-icon',
      },
    ];
  }
}

describe('QuizSelectionComponent', () => {
  let component: QuizSelectionComponent;
  let fixture: ComponentFixture<QuizSelectionComponent>;
  let mockRouter: MockRouter;
  let mockQuizService: MockQuizService;

  beforeEach(async () => {
    mockRouter = new MockRouter();
    mockQuizService = new MockQuizService();

    await TestBed.configureTestingModule({
      imports: [QuizSelectionComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: QuizService, useValue: mockQuizService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch subjects', () => {
    component.fetchSubjects();
    expect(component.subjects).not.toBeNull;
  });

  it('should a select a subject', () => {
    const emitSpy = jest.spyOn(component.selectedSubject, 'emit');
    const subject = component.subjects[1];
    component.onSubjectSelected(subject.title);
    expect(emitSpy).toHaveBeenCalledWith(subject.title);
    expect(mockRouter.navigate(['/quiz', subject.title]));
  });
});
