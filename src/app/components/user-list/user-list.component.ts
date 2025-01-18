import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[] = [];
  userDetails: any;
  userId: number = 1;
  newUser: any = {};
  editUser: any = {};
  userIdEdit: number = 1;
  userIdDelete: number = 1;
  isAddUserVisible: boolean = false;  // Ajout de cette propriété
  // J'aurai peut-être dû faire un composant par action, pour mieux séparer le code

  constructor(private usersService: UsersService) { }

  // Récupérer la liste des utilisateurs
  getAll() {
    this.usersService.getUsers().subscribe(
      data => {
        this.users = data;
        console.log("Utilisateurs chargés", data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Appel de la méthode getAll() dès que le composant est chargé
  ngOnInit(): void {
    this.getAll();
  }

  // Récupérer un utilisateur par ID
  getOne() {
    this.usersService.getUserById(this.userId).subscribe(
      (data) => {
        this.userDetails = data;
        console.log("Utilisateur chargé", data, this.userId);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Afficher le formulaire d'ajout d'un utilisateur
  showAddUserForm() {
    this.isAddUserVisible = true;
  }

  // Ajouter un utilisateur
  createUser() {
    this.usersService.createUser(this.newUser).subscribe(
      (data) => {
        console.log("Utilisateur ajouté", data);
        alert("Utilisateur ajouté");
        this.isAddUserVisible = false;  // Cacher le formulaire après ajout
        this.getAll();  // Mettre à jour la liste des utilisateurs
      },
      error => {
        console.log(error);
      }
    );
  }

  // Modifier un utilisateur
  updateUser() {
    this.usersService.updateUser(this.userIdEdit, this.editUser).subscribe(
      (data) => {
        console.log("Utilisateur modifié", data);
        alert("Utilisateur modifié");
      },
      error => {
        console.log(error);
      }
    );
  }

  // Supprimer un utilisateur
  deleteUser() {
    this.usersService.deleteUser(this.userIdDelete).subscribe(
      (data) => {
        console.log("Utilisateur supprimé", data);
        alert("Utilisateur supprimé");
      },
      error => {
        console.log(error);
      }
    );
  }
}
