import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UniqueFormComponent } from "./unique-form.component";

describe("UniqueFormComponent", () => {
  let component: UniqueFormComponent;
  let fixture: ComponentFixture<UniqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniqueFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
