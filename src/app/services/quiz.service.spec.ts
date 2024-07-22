import { TestBed } from '@angular/core/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get subjects', () => {
    const subjects = service.getSubjects();
    expect(subjects.length).toBeGreaterThan(0);
  });

  it('should get question from one subject', () => {
    const subject = service.getSubjects()[3];
    const questions = service.getQuestions(subject.title);
    expect(questions.length).toBeGreaterThan(0);
  });

  it('should return an empty array for a nonexistent subject', () => {
    const questions = service.getQuestions('Nonexistent Subject');
    expect(questions).toEqual([]);
  });
});
