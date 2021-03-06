import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {User} from "../../shared/models/user.model";
import {UsersService} from "../../shared/services/users.service";
import {Message} from "../../shared/models/message.model";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.message = new Message(' ', ' ');
    this.route.queryParams
      .subscribe((params: Params) => {
        //console.log(params)
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Теперь вы можете зайти в систему',
            type: 'success'
          })
        }
      });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  private showMessage(message: Message) {
    console.log(this);
    this.message = message;
    window.setTimeout(() => {
      this.message.text = ''
    }, 5000)
  }

  onSubmit() {
    //console.log(this.form)
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        console.log(user);
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['system', 'cabinet'])
            // Редирект на домашнюю страницу
          } else {
            this.showMessage({
              text: 'Пароль не верный!',
              type: 'danger'
            });
            // Показать сообщение об ошибке
          }
        } else {
          this.showMessage({
            text: 'Такого пользователя не существует',
            type: 'danger'
          })
        }
      });
  }

}
