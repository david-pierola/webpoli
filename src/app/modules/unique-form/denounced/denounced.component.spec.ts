import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DenouncedComponent } from "./denounced.component";

describe("DenouncedComponent", () => {
  let component: DenouncedComponent;
  let fixture: ComponentFixture<DenouncedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DenouncedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenouncedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
