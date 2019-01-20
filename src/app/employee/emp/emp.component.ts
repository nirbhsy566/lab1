import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {
  headee: string = 'Employee Details';
  emee: any[];
 constructor(){
this.emee = [
{name: 'tom', lname: 'misra', age: 32},
{name: 'dick', lname: 'jah', age: 74},
{name: 'hary', lname: 'tiwari', age: 42},
];
}
geeme(): void {
  this.emee = [
    {name: 'tom', lname: 'misra', age: 32},
    {name: 'dick', lname: 'jah', age: 74},
    {name: 'hary', lname: 'tiwari', age: 42},
    {name: 'kite', lname: 'kr', age: 12},
    {name: 'pranjal', lname: 'tri', age: 22},
    ];
}}