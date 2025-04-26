import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {UniversitiesHttpService} from "../../service/universities-http.service";
import {University} from "../../entity/university";

@Component({
  selector: 'app-universities-table',
  templateUrl: './universities-table.component.html',
  styleUrl: './universities-table.component.css'
})
export class UniversitiesTableComponent implements OnInit {
  protected countries : string [] = ['Haiti','Turkey','Philippines','Morocco','China','Brazil','Japan','Thailand']
  protected styleColors : string [] = [
    'bg-red-100 text-red-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 text-xs',
    'bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 text-xs',
    'bg-pink-100 text-pink-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300 text-xs',
    'bg-yellow-100 text-yellow-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 text-xs',
    'bg-purple-100 text-purple-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-30 text-xs' ,
    'bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 text-xs',
    'bg-red-100 text-red-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 text-xs',
    'bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 text-lg',
  ]
  protected universities : University[]
  protected enableSpinner : boolean = false

  constructor(private universitiesHttpService: UniversitiesHttpService,private changeDetectorRef: ChangeDetectorRef) {
    this.universities = []
  }

  /**
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges()
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges()

  }
  protected getStyleColor() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(this.styleColors.length);
    const index = Math.floor(Math.random() * (maxFloored - minCeiled));
    return this.styleColors[index]
  }
  */


  ngOnInit(): void {
    this.loadUniversities();
  }

  private loadUniversities() {
    this.universitiesHttpService.universitiesReplaySubject.subscribe((universities: University[]) => {
      this.universities = universities
    })
  }

  protected onUserClickedCountry(country: string) {
    this.enableSpinner = true;
    this.changeStyleColorsByCountry(country)
    this.universitiesHttpService.setUniversitiesByCountry(country) // this.universities will change because it's observe concept
    setTimeout(()=> {
      this.enableSpinner = false;
    },1800)
  }

  private changeStyleColorsByCountry(countrySearch : string) {
    const indexClicked = this.countries.findIndex((country) => country === countrySearch) // find index of countries by countrySearch
    for (let i = 0; i < this.countries.length; i++) {
      if (i === indexClicked) {
        this.styleColors[i] = this.styleColors[i].replace("text-xs","text-lg")
      } else  {
        this.styleColors[i] =  this.styleColors[i].replace("text-lg","text-xs")
      }
    }
  }

}
