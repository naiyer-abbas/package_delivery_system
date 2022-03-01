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

  addUser(formObj: NgForm) {
    console.log(formObj.value);
    this.commonService.createUser(formObj.value).subscribe((Response) => {
      console.log("User has been added");
      this.router.navigate(['']);
    });
  }

}
