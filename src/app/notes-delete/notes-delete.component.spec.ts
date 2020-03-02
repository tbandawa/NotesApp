import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDeleteComponent } from './notes-delete.component';

describe('NotesDeleteComponent', () => {
  let component: NotesDeleteComponent;
  let fixture: ComponentFixture<NotesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
