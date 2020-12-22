import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/model/pet.model';
import { PetsResults } from 'src/app/model/petResults.model';
import { ServiceService } from 'src/app/service/pets/service.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
pets: PetsResults;
parameters = {
  filter: {
    sex: '',
    category: ''
  },
  sort: ""
}
  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit(): void {
    this.update();
  }

  update(){
    this.service.getPets(this.parameters).subscribe(data=>{
      this.pets = data;
      console.log(this.pets.results);
      console.log(this.pets.count);
    })
  }

  setCategory(){
    this.update();
  }

  petDetails(id){
    this.route.navigate(['pets/', id]);
  }
}
