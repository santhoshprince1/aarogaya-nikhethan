import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Address } from 'src/app/interfaces/address';
import { Facilites } from 'src/app/interfaces/facilites';
import { Hospital } from 'src/app/interfaces/hospital';
import { Reservation } from 'src/app/interfaces/reservation';
import { HospitalService } from 'src/app/services/hospital.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-findhospital',
  templateUrl: './findhospital.component.html',
  styleUrls: ['./findhospital.component.css'],
  providers:[
    HospitalService,
    ReservationService
  ]
})
export class FindhospitalComponent implements OnInit {
  city:string="";
  reservation:Reservation={
   otp:0,
   userId:0,
   hospitalId:0
  }
  hospitals:Array<Hospital>=new Array<Hospital>();
  address:Address={
    street:'',
    area:'',
    city:'',
    distrit:'',
    state:''
  }
  facilites:Facilites={
    beds:0,
    ventilation:0,
    criticalCareUnit:0,
    isolationWard:0,
  }
  constructor(private hospitalServices:HospitalService,private activedrouted:ActivatedRoute,
    private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.activedrouted.params.subscribe((params:Params)=> this.reservation.userId=params['id']);
  }
  getHospitals():void{
    console.log(this.hospitals.length);
    this.hospitalServices.getHospitalByCity(this.city).subscribe((hospiatlList)=>this.hospitals=hospiatlList);
  }
  getAddress(dbaddress:Address){
    console.log(dbaddress);
    this.address=dbaddress;
  }
  getFaclites(dbFacilites:Facilites){
    this.facilites=dbFacilites;
  }
  getHospitalId(hospitalid:any){
    this.reservation.hospitalId=hospitalid;
  }
  getReservation(){
    this.reservation.otp=Math.floor(Math.random()*1000000);
    this.reservationService.postReservation(this.reservation).subscribe((data)=>
    this.reservation.id=data.id
    ); 
  }
}
