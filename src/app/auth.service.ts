import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean
  user = new BehaviorSubject<any>('')
  userId = new BehaviorSubject<any>('')
  token = new BehaviorSubject<any>('')
  
  constructor(private http: HttpClient) { }

  register(userInfo: object){
    return this.http.post(environment.API_URL + `/api/users/`, userInfo)
  }

  login(credentials){
    return this.getAuthToken(credentials)
  }

  getAuthToken(credentials){
    console.log(credentials)
    return this.http.post(environment.API_URL + `/api/get-auth-token/`, {username: credentials.username, password: credentials.password})
  }

  saveToLocalStorage(token, userId){
    localStorage.setItem('Lenax-token', token)
    localStorage.setItem('Lenax-user-id', userId)
  }

  retrieveFromLocalStorage(){
    this.token.next(localStorage.getItem('Lenax-token'))
    this.userId.next(localStorage.getItem('Lenax-user-id'))
  }

  getUserFromLocalStorage(){
    this.retrieveFromLocalStorage()
    return this.getUser(this.userId.value)
  }

  getUser(id){
    return this.http.get(environment.API_URL + `/api/users/${id}/`)
  }

  isLoggedIn(){
    return this.user.value && this.user.value.hasOwnProperty('username')
  }
}
