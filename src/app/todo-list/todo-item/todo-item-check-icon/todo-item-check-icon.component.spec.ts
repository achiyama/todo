import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemCheckIconComponent } from './todo-item-check-icon.component';

describe('TodoItemCheckComponent', () => {
  let component: TodoItemCheckIconComponent;
  let fixture: ComponentFixture<TodoItemCheckIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemCheckIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemCheckIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
