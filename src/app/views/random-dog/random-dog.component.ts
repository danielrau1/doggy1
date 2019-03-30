import { Component, OnInit } from '@angular/core';
import {DogService} from '../../models/dog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.scss']
})
export class RandomDogComponent implements OnInit {
dogUrl: string;
dogName: string;
now: Date = new Date();

  constructor(private dogFetcher: DogService, private route: ActivatedRoute) {
    // Note4: For this case have to manually write the name in the url of the RANDOM Component and this will fetch the dogName
    this.route.paramMap.subscribe(params => {
      this.dogName = params.get('name');
    });
  }

  ngOnInit() {
    // Note3: Immediately as the Random Dog Component opens fetch the random url
    this.dogFetcher.getRandomDog().subscribe(
      (result) => {
        this.dogUrl = result.message;
      }
    );
  }

}
