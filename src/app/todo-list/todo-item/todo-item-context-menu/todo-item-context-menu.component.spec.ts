import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemContextMenuComponent } from './todo-item-context-menu.component';

describe('TodoItemContextMenuComponent', () => {
  let component: TodoItemContextMenuComponent;
  let fixture: ComponentFixture<TodoItemContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemContextMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoItemContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
