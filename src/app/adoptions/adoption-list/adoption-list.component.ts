import { Component, OnInit } from '@angular/core';
import { Adopters } from 'src/app/model/adopters.model';
import { Adoption } from 'src/app/model/adoption.model';
import { ServiceService } from 'src/app/service/pets/service.service';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {
adopters: Adopters;
id: number;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.update();
    
  }

  update(){
    this.service.getAdopters().subscribe(data=>{
      this.adopters = data;
      

    })
  }

  aproveAdoption(adopter: Adoption){
    console.log(adopter);
    this.service.deleteFromAdoptList(adopter._id).subscribe(data=>{
      console.log(data);
      this.update();

    })
  }

}
