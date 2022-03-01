import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  constructor(private router: Router) {
    // setTimeout(() => {
    //   let elem: any = document.getElementById('alert_msg');
    //   elem.setAttribute("style", "display: none;");
    // }, 3000);
   }

  ngOnInit(): void {
  }

  next = () =>{
    this.router.navigateByUrl('/user-details')
  }
}
