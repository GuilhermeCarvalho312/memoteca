import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoComponent } from './pensamento.component';
import { By } from '@angular/platform-browser';

describe('PensamentoComponent', () => {
  let component: PensamentoComponent;
  let fixture: ComponentFixture<PensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PensamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "pensamento-g" for long content', () => {
    component.pensamento = {
      conteudo: 'Lorem ipsum dolor sit amet, ...',
      autoria: 'Author',
      modelo: 'Model',
    };
    expect(component.larguraPensamento()).toEqual('pensamento-g');
  });

  it('should return "pensamento-p" for short content', () => {
    component.pensamento = {
      conteudo: 'Short content',
      autoria: 'Author',
      modelo: 'Model',
    };
    expect(component.larguraPensamento()).toEqual('pensamento-p');
  });

  it('should display the correct content', () => {
    component.pensamento = {
      conteudo: 'Test Content',
      autoria: 'Author',
      modelo: 'Model',
    };
    fixture.detectChanges();

    const contentElement = fixture.debugElement.query(By.css('.conteudo'));
    expect(contentElement.nativeElement.textContent).toContain('Test Content');
  });
});
