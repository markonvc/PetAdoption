import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetsResults } from 'src/app/model/petResults.model';
import {map} from 'rxjs/operators';
import { Pet } from 'src/app/model/pet.model';
import { Adoption } from 'src/app/model/adoption.model';
import { Adopters } from 'src/app/model/adopters.model';

const URL = "http://localhost:3000/api/pets";
const URLADOPTER = "http://localhost:3000/api/adoptions"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getPets(parameters): Observable<PetsResults>{
    let obj = {};
    if(parameters){
      obj = {
        params: new HttpParams()
        .set('filter', parameters.filter && JSON.stringify(parameters.filter) || '')
        .set('sort', parameters.sort || '')
      }
    }

    return this.http.get(URL, obj).pipe(map(
      data =>{return new PetsResults(data)}
    ))
  }

  getPet(id): Observable<Pet>{
    return this.http.get(`${URL}/${id}`).pipe(map(
      data => {return new Pet(data)}
    ))
  }

  postAdopter(adopter): Observable<Adoption>{
    return this.http.post(URLADOPTER, adopter).pipe(map(
      data =>{return new Adoption(data)}
    ))
  }

  getAdopters(): Observable<Adopters>{
    return this.http.get(URLADOPTER).pipe(map(
      data=>{return new Adopters(data)}
    ))
  }

  deleteFromAdoptList(id: number): Observable<Adoption>{
    return this.http.delete(`${URLADOPTER}/${id}`).pipe(map(
      data=>{return new Adoption(data)}
    ))
  }
}
