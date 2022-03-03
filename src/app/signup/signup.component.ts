import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [CommonService]
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, public commonService: CommonService) { }

  ngOnInit(): void {
  }

  next = () =>{
    this.router.navigateByUrl('otp-verification');
  }

  // Add user to the database

  addUser(formObj: NgForm) {
    
    this.commonService.createUser(this.commonService.selectedUser).subscribe((res) => {
      console.log('User added to database');
    })
  }

}
