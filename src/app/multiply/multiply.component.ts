import { Component } from '@angular/core';

@Component({
selector:'multiply-multiplication',
templateUrl:'./multiply.component.html',
styleUrls: ['./multiply.component.css']
})







export class MultiplyComponent{

        allowMultiplication = false;
        multiplyCreationStatus = 'no math was performed';
        multiplicationExercises ="";
    
      constructor() {
       
        setTimeout(() => {
          this.allowMultiplication = true;
          this.multiplyCreationStatus = 'no math was performed'
        },2000);
    
       }
    
      ngOnInit() {
          
      }
      onCreateMultiplication() {
          this.multiplyCreationStatus = 'math was performed';
          setTimeout(() => {
            this.multiplyCreationStatus = 'no math was performed'
          },2000);
      
         }

         onUpdateMultiplicationExercises(event: Event) {
            this.multiplicationExercises = (<HTMLInputElement>event.target).value;
         }


      }
    

