import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  public email: string;
  public password: string;

  constructor(private toastr: ToastrService) {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    const activeToast = this.toastr.success('Login successful!', 'Success!');
    activeToast.onHidden.subscribe(() => {
      this.toastr.remove(activeToast.toastId);
    });
  }

  ngOnInit(): void {}
}
