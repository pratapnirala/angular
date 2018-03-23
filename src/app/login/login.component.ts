import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {
	public user;
  	sub: any;
  	model: any = {};
    loading = false;
    returnUrl: string;
    showhide=false;
    


  constructor(public _auth:AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.returnUrl = this.route.snapshot.queryParams['returnUrl '] || '/profile';
   document.body.classList.add('login-body')
    
  }

googleloginfunction(){ 			//******************  GOOGLE LOGIN FUNCTION   ******************
    
   this.sub = this._auth.login("google").subscribe(
      (data) => {alert(JSON.stringify(data));this.user=data;return this.router.navigateByUrl(this.returnUrl);}
    )
     ;                
  }
  facebookloginfunction(){        //******************  FACEBOOK LOGIN FUNCTION   ******************
  	this.sub = this._auth.login("facebook").subscribe(
      (data) => {alert(JSON.stringify(data));this.user=data;return this.router.navigateByUrl(this.returnUrl);}
    );
    
    
    
  }
 sendOtpFunction(formvalue,status){  //******************     SEND OTP FUNCTION   ******************
 alert(JSON.stringify(formvalue.mobilenumber));
 this.showhide = true;
 }
 loginFunction(formvalue,status){  //******************     LOGIN FUNCTION   ******************
 alert(JSON.stringify(formvalue));
 this.showhide = true;
 }
  //logout(){
   // this._auth.logout().subscribe(
      //(data)=>{//return a boolean value.} 
    //)
  //}
}
