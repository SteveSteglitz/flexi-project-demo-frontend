import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicInformationBlockComponent } from '@flexi-project-demo/ui-common';

describe('UiCommonComponent', () => {
  let component: DynamicInformationBlockComponent;
  let fixture: ComponentFixture<DynamicInformationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicInformationBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicInformationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
