import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://l314s2-production.up.railway.app/';  // Backend

  constructor(private http: HttpClient) {}

   // Obtenir la liste des utilisateurs
   getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer un utilisateur par ID
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  // Ajouter un utilisateur
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  // Modifier un utilisateur
  updateUser(userId: number, user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${userId}`, user);
  }

  // Supprimer un utilisateur
  deleteUser(userIdDelete: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${userIdDelete}`);
  }
}
