import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../constants';
const httpOptions = {
  headers: new HttpHeaders({'X-Auth-Token' : 'bc351436147c4de28531de3f8fcafdb2'})
};

@Injectable({
  providedIn: 'root'
})
export class GamesService { 

  constructor(private http: HttpClient) {}

  getCompetitions(){
    return this.http.get(`${Constants.API_PREFIX}/competitions`, httpOptions); 
  }

  getSingleCompetition(id: number){
    return this.http.get(`${Constants.API_PREFIX}/competitions/${id}/matches`, httpOptions); 
  }

  getSingleMatch(id: number){
    return this.http.get(`${Constants.API_PREFIX}/matches/${id}`, httpOptions)    
  }

  getStandings(id: number){
    return this.http.get(`${Constants.API_PREFIX}/competitions/${id}/standings`, httpOptions)    
    
  }

  getTopDiscussions(){
    return this.http.get(`http://localhost:3000/topDiscussions`)
  }
  
  getFollowers(){
    return this.http.get(`http://localhost:3000/whoToFollow`)
  }

  getTeams(id: number){
    return this.http.get(`${Constants.API_PREFIX}/competitions/${id}/teams`, httpOptions)    
  }
}
