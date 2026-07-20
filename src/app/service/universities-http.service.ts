import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ReplaySubject} from "rxjs";
import {University} from "../entity/university";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UniversitiesHttpService {

  public readonly universitiesReplaySubject : ReplaySubject<University[]>;
  private baseUrl: string = environment.baseUrl;

  // after inject you can publish universitiesReplaySubject observe
  constructor(private readonly http: HttpClient) {
    this.universitiesReplaySubject = new ReplaySubject<University[]>()
    this.http.get<University[]>(this.baseUrl+'/search?country=Thailand').subscribe((res) => {
      this.universitiesReplaySubject.next(res)
    })
  }

  public setUniversitiesByCountry(country : string)  {
    this.http.get<University[]>(this.baseUrl+`/search?country=${country}`).subscribe((res) => this.universitiesReplaySubject.next(res))
  }
}
