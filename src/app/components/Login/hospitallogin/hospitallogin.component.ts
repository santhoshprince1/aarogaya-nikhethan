import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/interfaces/hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospitallogin',
  templateUrl: './hospitallogin.component.html',
  styleUrls: ['./hospitallogin.component.css'],
  providers:[
    HospitalService
  ]
})
export class HospitalloginComponent implements OnInit {
  hospitalName:string='';
  password:string='';
  message:string='';
  constructor(private hospitalservice:HospitalService,private router:Router) { }

  ngOnInit(): void {
  }
  goToHospital(){
    if(this.hospitalName!==''||this.hospitalName!==null
    &&this.password!==''||this.password!==null){
        this.hospitalservice.getHospitalByCredits(this.hospitalName,this.password).subscribe((data)=>{
        Object.entries(data).forEach((index,value)=>{
          if(value===0){
            console.log(index[1].id);
            this.router.navigate(['/viewhospital/'+index[1].id]);
          }
        })
        }
        )
        this.message="Invalid Username & Password";
    }
    else{
      this.message="Invalid Credentials"
      console.log(this.message);
      
    }
  }
}
