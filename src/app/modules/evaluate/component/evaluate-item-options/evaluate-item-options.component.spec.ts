import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { EvaluateItemOptionsComponent } from './evaluate-item-options.component';


describe('EvaluateItemOptionsComponent', () => {
  let component: EvaluateItemOptionsComponent;
  let fixture: ComponentFixture<EvaluateItemOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateItemOptionsComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateItemOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
