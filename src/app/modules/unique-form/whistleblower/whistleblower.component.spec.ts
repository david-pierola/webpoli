import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WhistleblowerComponent } from "./whistleblower.component";

describe("WhistleblowerComponent", () => {
  let component: WhistleblowerComponent;
  let fixture: ComponentFixture<WhistleblowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhistleblowerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhistleblowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
