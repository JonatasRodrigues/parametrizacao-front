import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Parametros } from './parametros';
import { ParamService } from './parametros.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-param',
  templateUrl: './cadastro-param.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class CadastroParamComponent implements OnInit {

  paramForm: FormGroup;
  paramService: ParamService;
  submitted = false;

  constructor(paramService: ParamService, private router: Router, private formBuilder: FormBuilder,
     private toastr: ToastrService) {
    this.paramService = paramService;
  }

  ngOnInit(): void {
    this.createForm();  
  }

  createForm(){
    this.paramForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      value: ['', [Validators.required]],
      application: ['', [Validators.required]],
      key: ['', Validators.required], 
      description:''
    });
  }

  // convenience getter for easy access to form fields
  get field() {
    return this.paramForm.controls;
  }

  addParam() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.paramForm.invalid) {
      return;
    }

    const newParams = this.paramForm.getRawValue() as Parametros;
    this.paramService.add(newParams)
      .subscribe((dados) => {
        this.clean();
        this.toastr.success('Cadastro  realizado com sucesso.');
        this.router.navigate(['/cadastrar']),
          erro => console.log(erro)
      });

  }

  clean() {
    this.paramForm.reset();
    this.submitted = false;
  }

}
