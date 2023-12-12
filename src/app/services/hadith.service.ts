import {Injectable} from '@angular/core';
import {Hadith} from "../model/hadith.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HadithService {

  private hadidthsUrl = 'assets/ahadiths.json';

  constructor(private http: HttpClient) {
  }

  listeAhadiths(): Observable<Hadith[]> {
    return this.http.get<Hadith[]>(this.hadidthsUrl)
  }
}
