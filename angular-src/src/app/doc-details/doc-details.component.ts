//import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css']
})
export class DocDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //var p = this.route.paramMap.pipe(
    //  switchMap((params: ParamMap) =>
    //    this.service.getHero(params.get('id')))
    //);
  }

  //gotoHeroes(hero: Hero) {
  //  let heroId = hero ? hero.id : null;
  //  // Pass along the hero id if available
  //  // so that the HeroList component can select that hero.
  //  // Include a junk 'foo' property for fun.
  //  this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
  //}
}

//export class HeroDetailComponent implements OnInit {
//  hero$: Observable<Hero>;

//  constructor(
//    private route: ActivatedRoute,
//    private router: Router,
//    private service: HeroService
//  ) { }

//  ngOnInit() {
//    this.hero$ = this.route.paramMap.pipe(
//      switchMap((params: ParamMap) =>
//        this.service.getHero(params.get('id')))
//    );
//  }

//  gotoHeroes(hero: Hero) {
//    let heroId = hero ? hero.id : null;
//    // Pass along the hero id if available
//    // so that the HeroList component can select that hero.
//    // Include a junk 'foo' property for fun.
//    this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
//  }
//}
