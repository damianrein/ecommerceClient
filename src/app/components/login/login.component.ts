import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServiceService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    const email = loginForm.value.email;
    const password = loginForm.value.password;

    this.authServiceService.login(email, password).subscribe({
      next : (response) => {
        const token = response.token;

        localStorage.setItem("jwtToken", token);

        this.router.navigate(['/home']);
      },
      error: (error) =>{
        console.error('Error en el login', error);
        let errorMessage = 'Error en el inicio de sesión';
        
        if (error.status === 401) {
          errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        } else if (error.status === 0) {
          errorMessage = 'No se puede conectar al servidor. Intenta más tarde.';
        }

        alert(errorMessage);
      }
  });
  }
}
