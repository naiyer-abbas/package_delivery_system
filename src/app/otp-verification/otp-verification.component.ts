import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService) {
    // setTimeout(() => {
    //   let elem: any = document.getElementById('alert_msg');
    //   elem.setAttribute("style", "display: none;");
    // }, 3000);
   }

  ngOnInit(): void {
  }

  next = () =>{
    //console.log(this.commonService.selectedUser.email)
    this.router.navigateByUrl('/dashboard')
  }
}
