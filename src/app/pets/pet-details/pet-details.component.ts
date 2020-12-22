import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adoption } from 'src/app/model/adoption.model';
import { Pet } from 'src/app/model/pet.model';
import { ServiceService } from 'src/app/service/pets/service.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet: Pet;
  id: number;
  adoptForm: FormGroup;
  show: boolean = false;

  constructor(private service: ServiceService, private router: ActivatedRoute, private fb: FormBuilder, private route: Router) { 
    this.createForm();
  }

  createForm(){
    this.adoptForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    this.service.getPet(this.id).subscribe(data=>{
      this.pet = data;
      console.log(this.pet);
    })
  }

  onSubmit(){
    console.log(this.adoptForm.value);
    let adopter: Adoption = new Adoption(this.adoptForm.value);
    adopter.petId = this.pet._id;
    adopter.petName = this.pet.name;
      this.service.postAdopter(adopter).subscribe(data=>{
      console.log(data);
      this.adoptForm.reset();
      this.route.navigate(['adoptions']);
      })
  }

}
