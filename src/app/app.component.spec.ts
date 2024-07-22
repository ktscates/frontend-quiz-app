import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the title', () => {
    expect(component.title).toMatch('frontend-quiz-app');
  });

  it('should switch themes', () => {
    const body = document.querySelector('body');

    // initial state should not be dark mode
    expect(component.switchedToDarkMode).toBeFalsy();
    expect(body?.classList.contains('dark')).toBeFalsy();

    //should switch themes to dark
    component.switchThemes();
    expect(component.switchedToDarkMode).toBeTruthy();
    expect(body?.classList.contains('dark')).toBeTruthy();

    //should switch back to light
    component.switchThemes();
    expect(component.switchedToDarkMode).toBeFalsy();
    expect(body?.classList.contains('dark')).toBeFalsy();
  });

  it('should contain the header component', () => {
    const header = fixture.debugElement.query(By.directive(HeaderComponent));
    expect(header).toBeTruthy();
  });
});
