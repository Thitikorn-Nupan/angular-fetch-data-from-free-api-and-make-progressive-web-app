import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ReplaySubject} from "rxjs";
import {University} from "../entity/university";

@Injectable({
  providedIn: 'root'
})
export class UniversitiesHttpService {

  public universitiesReplaySubject : ReplaySubject<University[]>;

  // after inject you can publish universitiesReplaySubject observe
  constructor(private http: HttpClient) {
    this.universitiesReplaySubject = new ReplaySubject<University[]>()
    this.http.get<University[]>('http://universities.hipolabs.com/search?country=Thailand').subscribe((res) => {
      this.universitiesReplaySubject.next(res)
    })
  }

  public setUniversitiesByCountry(country : string)  {
    this.http.get<University[]>(`http://universities.hipolabs.com/search?country=${country}`).subscribe((res) => {
      this.universitiesReplaySubject.next(res)
    })
  }
}
