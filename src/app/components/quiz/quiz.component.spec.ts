import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { QuizComponent } from './quiz.component';
import { QuizService } from '../../services/quiz.service';

class MockRouter {
  navigate = jest.fn();
}

class MockQuizService {
  getQuestions(subjectTitle: string) {
    return [
      { question: 'What is 2+2?', options: ['3', '4', '5', '6'], answer: '4' },
      { question: 'What is 3+5?', options: ['7', '8', '9', '10'], answer: '8' },
      {
        question: 'What is 2*5?',
        options: ['30', '14', '5', '10'],
        answer: '10',
      },
      { question: 'What is 4-1?', options: ['7', '3', '9', '10'], answer: '3' },
    ];
  }
}

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  let mockRouter: MockRouter;
  let mockQuizService: MockQuizService;

  beforeEach(async () => {
    mockRouter = new MockRouter();
    mockQuizService = new MockQuizService();

    await TestBed.configureTestingModule({
      imports: [QuizComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: QuizService, useValue: mockQuizService },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => (key === 'subjectTitle' ? 'Math' : null),
            }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize based on the route parameter', () => {
    component.ngOnInit();
    expect(component.subjectTitle).toBe('Math');
    expect(component.questions.length).toBe(4);
    expect(component.currentQuestion).toEqual(component.questions[0]);
  });

  it('should load a question', () => {
    component.loadQuestion(1);
    expect(component.currentQuestion).toEqual(component.questions[1]);
    expect(component.correctAnswer).toBe('8');
  });

  it('should select an answer', () => {
    component.selectAnswer('8');
    expect(component.selectedAnswer).toBe('8');
    expect(component.showErrorMessage).toBe(false);
  });

  it('should show error on empty selection', () => {
    component.submitAnswer();
    expect(component.showErrorMessage).toBe(true);
  });

  it('should submit an answer', () => {
    component.selectAnswer('4');
    component.submitAnswer();
    expect(component.showResult).toBe(true);
    expect(component.isAnswerCorrect).toBe(true);
    expect(component.score).toBe(1);
  });

  it('should reset showErrorMessage', () => {
    component.currentQuestionIndex = 1;
    component.showErrorMessage = true;
    component.nextQuestions();
    expect(component.showErrorMessage).toBe(false);
  });

  it('should load the next question', () => {
    component.currentQuestionIndex = 0;
    const loadQuestionSpy = jest.spyOn(component, 'loadQuestion');
    component.nextQuestions();
    expect(loadQuestionSpy).toHaveBeenCalledWith(1);
  });

  it('should navigate to result', () => {
    component.selectAnswer('3');
    component.submitAnswer();
    component.currentQuestionIndex = 3;
    component.nextQuestions();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/result'], {
      state: {
        score: component.score,
        subjectTitle: 'Math',
        questions: component.questions,
      },
    });
  });
});
