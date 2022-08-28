import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo:string;
  contrasenia:string;

  constructor() { }

  ngOnInit(): void {
  }

  logear(){

    let user = {
      correo: this.correo,
      contrasenia: this.contrasenia,
    }
    
  }

}
