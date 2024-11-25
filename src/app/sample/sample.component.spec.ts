import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default title', () => {
    expect(component.title).toBe('sample'); // Replace 'sample' with your actual title.
  });

  it('should update title on change', () => {
    component.title = 'new title';
    fixture.detectChanges();
    expect(component.title).toBe('new title');
  });

  it('should validate form controls', () => {
    const nameControl = component.form.get('name');
    expect(nameControl?.valid).toBeFalse();
  
    nameControl?.setValue('John Doe');
    expect(nameControl?.valid).toBeTrue();
  });
});
