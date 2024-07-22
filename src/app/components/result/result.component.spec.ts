import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
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

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mockRouter: MockRouter;
  let mockQuizService: MockQuizService;

  // Mock history.state
  Object.defineProperty(window, 'history', {
    writable: true,
    value: {
      state: {
        score: 1,
        subjectTitle: 'Math',
        questions: [
          {
            question: 'What is 2+2?',
            options: ['3', '4', '5', '6'],
            answer: '4',
          },
          {
            question: 'What is 3+5?',
            options: ['7', '8', '9', '10'],
            answer: '8',
          },
        ],
      },
    },
  });

  beforeEach(async () => {
    mockRouter = new MockRouter();
    mockQuizService = new MockQuizService();

    await TestBed.configureTestingModule({
      imports: [ResultComponent],
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

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correct states', () => {
    component.ngOnInit();
    expect(component.score).toBe(1);
    expect(component.subjectTitle).toBe('Math');
    expect(component.questions).toEqual([
      { question: 'What is 2+2?', options: ['3', '4', '5', '6'], answer: '4' },
      { question: 'What is 3+5?', options: ['7', '8', '9', '10'], answer: '8' },
    ]);
  });

  it('should load subjects', () => {
    const loadSubjectsSpy = jest.spyOn(component, 'loadSubjects');
    component.ngOnInit();
    expect(loadSubjectsSpy).toHaveBeenCalled();
    expect(component.subjects.length).toBeGreaterThan(0);
  });

  it('should navigate to home to play again', () => {
    component.playAgain();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
