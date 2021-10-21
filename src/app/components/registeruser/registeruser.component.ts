import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
  providers:[
    UserService
  ]
})
export class RegisteruserComponent implements OnInit {
  message:string='';
  user:User;
  constructor(private userService:UserService,private router:Router) {
    this.user={
      userName:'',
      password:'',
      userType:'user'
    }
   }

  ngOnInit(): void {
  }
  registerUser(){
    if(this.user.userName===''&& this.user.password===''||
     this.user.userName===null||this.user.password===null){
       this.message="Invalid Creditals";
     }
     else{
    this.userService.postUser(this.user).subscribe((data)=>console.log(data),
    (error) => {
      console.log(error);
      this.message = error;
    })
    this.message="Registration Successfully";
    this.router.navigate(["/userlogin"]);
  }
  }
}
