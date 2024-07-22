import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-host',
  template: '<app-header [switchThemes]="switchThemes"></app-header>',
})
class HostComponent {
  switchThemes = jest.fn();
}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;
  let headerComponent: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    headerComponent = fixture.debugElement.query(
      By.directive(HeaderComponent)
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should create the host component', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should create the header component', () => {
    expect(headerComponent).toBeTruthy();
  });

  it('should call switchThemes when toggled', () => {
    const switchElement = fixture.debugElement.query(
      By.css('input[type="checkbox"]')
    );
    expect(switchElement).toBeTruthy();
    switchElement.triggerEventHandler('change', { target: { checked: true } });
    expect(hostComponent.switchThemes).toHaveBeenCalled();
  });
});
