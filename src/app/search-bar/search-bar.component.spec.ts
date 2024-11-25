import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [FormsModule,SearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  it('should display all items by default', () => {
    component.items = ['Apple', 'Banana', 'Cherry'];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('li').length).toBe(3);
  });

  it('should filter items based on the search term', () => {
    component.items = ['Apple', 'Banana', 'Cherry'];
    component.searchTerm = 'Ba';
    component.filterItems();

    expect(component.filteredItems).toEqual(['Banana']);
  });
});
