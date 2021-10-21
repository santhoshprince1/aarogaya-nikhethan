import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [UserService],
})
export class UserloginComponent implements OnInit {
  user: User;
  message: string = '';
  constructor(private router: Router, private userservice: UserService) {
    this.user = {
      userName: '',
      password: '',
      userType: 'user',
    };
  }

  ngOnInit(): void {}
  goToFindHospital() {
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
          this.user.userType = 'user'
        )
        .subscribe(
          (data) => {
            this.user = data;
            if (Object.keys(data).length !== 0) {
              Object.entries(data).forEach((index,value)=>{
                if(value==0){
                  console.log(index[1].id);
                  this.router.navigate(['/findhospital/'+index[1].id]);
                }
              })
              
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
