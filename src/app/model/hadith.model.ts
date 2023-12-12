export class Hadith {
  idHadith?: number;
  titreHadith?: string;
  descriptionHadith: string;
  rapporteur?: string;
  arabVersion?: string;


  constructor(idHadith: number, titreHadith: string, descriptionHadith: string, rapporteur: string, arabVersion: string) {
    this.idHadith = idHadith;
    this.titreHadith = titreHadith;
    this.descriptionHadith = descriptionHadith;
    this.rapporteur = rapporteur;
    this.arabVersion = arabVersion;
  }
}
