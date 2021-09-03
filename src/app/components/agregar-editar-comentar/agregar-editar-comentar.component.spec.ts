import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarComentarComponent } from './agregar-editar-comentar.component';

describe('AgregarEditarComentarComponent', () => {
  let component: AgregarEditarComentarComponent;
  let fixture: ComponentFixture<AgregarEditarComentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarComentarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarComentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
