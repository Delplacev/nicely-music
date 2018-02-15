import { Component, OnInit } from '@angular/core';

import { MusiquesService} from '../../services/musiques.service';
import { Musique } from '../../models/musique';


@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})

export class MusiqueComponent implements OnInit {
  musiques: Musique[];
  p: 0;

  constructor(private musiqueService: MusiquesService
              ) { }

  ngOnInit() {
    this.getMusiques();
  }

  getMusiques(): void {
    this.musiqueService.getMusiques()
      .subscribe(musiques => this.musiques = musiques);
  }

  isAuthenticated(): Boolean {
    return true;
  }

}
