import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { QuizComponent } from './quiz.component';
import { QuizService } from '../../services/quiz.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  let quizServiceMock: jest.Mocked<QuizService>;

  beforeEach(async () => {
    quizServiceMock = {
      getQuestions: jest.fn().mockReturnValue([]), // Mock implementation
    } as any;

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, QuizComponent],
      declarations: [],
      providers: [
        { provide: QuizService, useValue: quizServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                if (key === 'subjectTitle') return 'math';
                return null;
              },
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

  // Add more tests here as needed
});
