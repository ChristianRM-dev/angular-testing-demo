import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the counter', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement the counter', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });

  it('should display the count in the template', () => {
    component.increment();
    fixture.detectChanges(); // Update the DOM
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('1');
  });
});
