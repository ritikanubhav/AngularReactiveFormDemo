import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CustomValidator } from './Validators/custom.validators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

fb=inject(FormBuilder);


//1. create structure of form using FormGroup and Form control- binds the data to component
  reactiveForm=new FormGroup({
    firstName:new FormControl('',[Validators.required,CustomValidator.noSpaceAllowed]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl(),
    skills: new FormArray([new FormControl('',[Validators.required,CustomValidator.noSpaceAllowed])])
  });

  // reactiveForm =this.fb.group({
  //   firstName:['',Validators.required],
  //   lastName:['',Validators.required],
  //   email:['',[Validators.required,Validators.email]],
  //   mobile:['',[Validators.required]],
  //   skills:[]
  // })

  //creating property to access firstname more easily
  get FirstName() //read/get property add get as prefix - now it must have a return 
  {
    return this.reactiveForm.get("firstName");
  }

  get Email()
  {
    return this.reactiveForm.get("email");
  }
  get Skills()
  {
    return this.reactiveForm.get("skills") as FormArray;
  }

  onSubmit() {
    console.log(this.reactiveForm);
    }

    addSkill() {
      this.Skills.push(new FormControl('',[Validators.required,Validators.email]));
      }
    removeSkill(i:number){
      this.Skills.removeAt(i);
    }      

}
