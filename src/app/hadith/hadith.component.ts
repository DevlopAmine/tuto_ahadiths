import {Component, OnInit} from '@angular/core';
import {HadithService} from "../services/hadith.service";
import {Hadith} from "../model/hadith.model";

@Component({
  selector: 'app-hadith',
  templateUrl: './hadith.component.html',
  styleUrls: ['./hadith.component.css']
})
export class HadithComponent implements OnInit {

  hadiths: Hadith[] = []
  filteredHadiths: Hadith[] = []
  motCle: string = ''

  constructor(private hadithService: HadithService) {
  }

  ngOnInit(): void {
    this.hadithService.listeAhadiths().subscribe((listHad) => {
      this.hadiths = listHad
      this.filteredHadiths = listHad
    })

  }

  searchHadith() {
    console.log('Motclé value:', this.motCle);
    if (this.motCle.trim() !== '') {
      this.filteredHadiths = this.hadiths.filter(had =>
        had.descriptionHadith.toLowerCase().includes(this.motCle.toLowerCase())
      )
    } else {
      this.filteredHadiths = this.hadiths // Show all hadiths if the keyword is empty
    }
  }


}
