import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers:[
    UserService
  ]
})
export class AdminloginComponent implements OnInit {
  user: User;
  message: string = '';
  constructor(private router:Router, private userservice: UserService) {
    this.user = {
      userName: '',
      password: '',
      userType: 'admin',
    };
   }

  ngOnInit(): void {
  }
  goToCreateHospital(){
    if (
      this.user.userName != '' ||
      this.user.userName != null &&
      this.user.password != '' ||
      this.user.password != null
    ) {
      console.log(this.user);
      this.userservice
        .getUserByCredits(
          this.user.userName,
          this.user.password,
          this.user.userType = 'admin'
        )
        .subscribe(
          (data) => {
            this.user = data;
            console.log(data);
            if (Object.keys(data).length !== 0) {
              this.router.navigate(['/createhospital']);
            }
            else{
              this.message="Invalid Creaditals"
            }
          },
          (error) => {
            this.message = error;
          }
        );
    } else {
      this.message = 'Invalid Credits';
      console.log(this.message);
    }
  }
}
