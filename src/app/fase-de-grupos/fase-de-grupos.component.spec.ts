import { Selecoes } from './../selecoes/selecoes';
import { SelecoesService } from 'src/app/copadomundo/selecoes.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { FaseDeGruposComponent } from './fase-de-grupos.component';

describe('FaseDeGruposComponent', () => {
  let component: FaseDeGruposComponent;
  let fixture: ComponentFixture<FaseDeGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaseDeGruposComponent ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); }}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseDeGruposComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    const comp = new FaseDeGruposComponent(new SelecoesService());
    expect(component).toBeTruthy();
  });
});
