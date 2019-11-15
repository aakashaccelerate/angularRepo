import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  projectRegisterForm: FormGroup;
  techRegisterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectRegisterForm = this.formBuilder.group({
      projectName: ['',Validators.required],
      projectCode: ['',Validators.required],
      projectType: ['',Validators.required],
      projectRunMode: ['',Validators.required],
      portfolioAnchor: ['',Validators.required]
    })

    this.techRegisterForm = this.formBuilder.group({
      almTool: ['',Validators.required],
      unitTestFramework: ['',Validators.required],
      codeProfilingTool: ['',Validators.required],
      regressionAutomation: ['',Validators.required],
      deployment: ['',Validators.required],
      applicationHealthCheck: ['',Validators.required]
    })
  }

  
}
