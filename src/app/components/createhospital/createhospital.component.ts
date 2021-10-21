import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/interfaces/hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-createhospital',
  templateUrl: './createhospital.component.html',
  styleUrls: ['./createhospital.component.css'],
  providers:[
    HospitalService
  ]
})
export class CreatehospitalComponent implements OnInit {
  message:string='';
  dhospital:Hospital={
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
  constructor(private hospitalService:HospitalService) { }

  ngOnInit(): void {
    
  }
  addHospital(){
    if(this.hospital.hospitalname==""||this.hospital.hospitalname===null
       && this.hospital.password==""||this.hospital.password===null
       &&this.hospital.address.area==""||this.hospital.address.area===null
       &&this.hospital.address.city===""||this.hospital.address.city===null
       && this.hospital.address.distrit!==""||this.hospital.address.distrit===null
       &&this.hospital.address.state==""||this.hospital.address.state===null
       &&this.hospital.address.street==""||this.hospital.address.street===null
       &&this.hospital.faclites.beds<1&&this.hospital.faclites.criticalCareUnit<1
      &&this.hospital.faclites.isolationWard<1&&this.hospital.faclites.ventilation<1){
        this.message='All Fields are required'; 
        console.log(this.message);
    }
    
    
    else{
    console.log(this.hospital);
    this.hospitalService.postHospital(this.hospital).subscribe((dbhospital)=>console.log(dbhospital));
    this.hospital=this.dhospital;
    this.message="Registration Successfully";
    }
    
  }
}
