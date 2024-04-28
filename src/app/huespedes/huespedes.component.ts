import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Huesped } from '../model/huesped';
import { HuespedService } from '../shared/huesped.service';

@Component({
  selector: 'app-huespedes',
  templateUrl: './huespedes.component.html',
  styleUrls: ['./huespedes.component.css']
})
export class HuespedesComponent implements OnInit{

  listaHuespedes: Huesped[] = [];

  constructor(
    private service: HuespedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.service.huespedList$.subscribe(huespedes => this.listaHuespedes = huespedes);
      this.service.refreshHuespedList();
  }

  getHuespedes(){
    this.service.getAllHuespedes().subscribe(huespedes => this.listaHuespedes = huespedes);
  }

}
