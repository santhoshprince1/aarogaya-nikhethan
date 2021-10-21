import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hospital } from 'src/app/interfaces/hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-viewhospital',
  templateUrl: './viewhospital.component.html',
  styleUrls: ['./viewhospital.component.css'],
  providers:[
    HospitalService
  ]
})
export class ViewhospitalComponent implements OnInit {
  hospitalid:number=0;
  message:string='';
  hospital:Hospital={
    hospitalname:'',
    password:'',
    address:{
      street:'',
      area:'',
      city:'',
      distrit:'',
      state:''
    },
    faclites:{
      beds:0,
      ventilation:0,
      criticalCareUnit:0,
      isolationWard:0,
    }
};
  constructor(private hospitalService:HospitalService,private activedroute:ActivatedRoute) {

   }

  ngOnInit(): void {
        this.activedroute.params.subscribe((params:Params)=>{
      this.hospitalid=params['id'];
    })
    this.hospitalService.getHospitalById(this.hospitalid).subscribe(
      (data)=>this.hospital=data
    )
  }
  updateHospital(){
    this.hospitalService.updateHospital(this.hospitalid,this.hospital)
    .subscribe((data)=>console.log(data)
    )
    this.message="Updated Successfully"
  }
}
