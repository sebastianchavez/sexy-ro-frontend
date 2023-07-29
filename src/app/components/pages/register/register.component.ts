import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { IRequestRegister } from 'src/app/models/interfaces/user.interfaces';
import { AlertService } from 'src/app/services/alert/alert.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  idLog: string = 'RegisterComponent'
  registerForm: FormGroup = new FormGroup({})
  submitted: boolean = false;
  btnLoad: boolean = false;
  genres: {
    value: string;
    text: string;
  } [] = [
    {
      text: 'Femenino',
      value: 'F'
    },
    {
      text: 'Masculino',
      value: 'M'
    }
  ]
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.clearForm()
  }

  get f(){
    return this.registerForm.controls
  }

  clearForm(){
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['' ,[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      genre: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  async register(values: any){
    this.submitted = true;

    if(this.registerForm.invalid){
      return
    }

    this.btnLoad = true
    try {
      const { email, genre, password, user } = values
      const request: IRequestRegister = {
        email,
        genre,
        password,
        user
      }
      await this.userService.register(request) 
      this.alertService.toast('Usuario registrado con éxito')
      this.clearForm()
    } catch (error: any) {
      let msg = error.error && error.error.message ? error.error.message : 'Problemas al registrar usuario, si el problema persiste contacte a administrador'
      this.alertService.alert(msg, 'error')
    } finally {
      this.btnLoad = false
    }
  }  
}
