import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Color } from './color';
import { Direction } from './direction';

import { Employee } from './employee';
import { MessageService } from './message.service';
import { Num } from './num';
import { PersonService } from './person.service';
import { StudentClass } from './studentclass';

interface emp {
  Id: number;
  Name: string;
}

class Abc {
  constructor() {
    console.log('abc constructor called ..');
  }
  display(name: string) {
    console.log('Hello : ' + name + 'from Abc Class');
  }
}

class EmployeeSameAppComp {
  private empCode: String;
  empName: String;

  private fun() {
    let name = 'Tom';
    console.log(name);
  }
}

class MyClass {
  name1: String; //Here, name1 is public by default

  private name2: string;

  protected name3: string;

  fun3() {
    console.log(this.name2);
  }
}

class MySubClass extends MyClass {
  fun() {
    console.log(this.name1);
    //console.log(this.name2); //Give error because name2 is private
    console.log(this.name3);
  }
}

class MySubChildClass extends MySubClass {
  fun2() {
    console.log(this.name3);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  viewProviders: [Employee, Abc, EmployeeSameAppComp],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myapp';

  constructor() {}

  ngOnInit() {
 
    console.log(this.greet("Hi", "Tom"));
    console.log(this.greet("Hi", "Tom","Singh"));
    console.log(this.greet("Hi", "Tom","Singh","Patel","Yadav","Gupta"));
   // console.log(this.greet("Hi")); //this will give error

   console.log("Sum result = "+this.sum(10));
   console.log("Sum result = "+this.sum(10,20));
   console.log("Sum result = "+this.sum(10,20,30));

   //console.log(this.multiply(1)); //give error
   console.log("Multiply result = "+this.multiply(1,2));
   console.log("Multiply result = "+this.multiply(1,2,3));

   this.greetOpt("Om");
   this.greetOpt("Ku","Op");

   console.log(this.greetspaceopt("ABC"));
   console.log(this.greetspaceopt("ZZ","KLM"));


  }

  //Rest Operator have 3 dots ...
  greet(greeting:string,names:string,...val:string[])
  {
       console.log("\n");
    
       console.log(greeting +" "+names+" "+val);

       console.log(...val); //Spread operator to take values out from array.
  }

  //A rest parameter must be last in a parameter list.
  //Below function will give error.
  // greet(greeting:string,...val:string[],names:string)
  // {
  //      console.log(greeting +" "+names+" "+val);
  // }


  //  greet(greeting: string,...names : string[]) {
  //   // console.log(names);
  //   //return greeting + ' ' + names.join(',') ;
  //   return greeting + ' ' + names.join(' : ') ;
  // }


  //Default argument
  sum(a: number, b: number = 0, c: number = 0) {
    return a + b + c;
  }

  multiply(a:number,b:number,c:number=1)
  {
    return a*b*c;
  }

  //Optional Parameter
  greetOpt(greeting:string,name?:string)
  {
    console.log("\n");
    
    console.log("Optional Parameter example = "+greeting + " "+name);

   let msg='';

   if(name==undefined)
   {
    name='abc';

    msg = greeting + ' '+ name;

    console.log(msg);
   }
   else
   {
     msg = greeting +' ' + name + ' ' + "!";
     console.log(msg);
   }

  }

  greetspaceopt(greeting:string,nam:string="")
  {
   return greeting + ' '+nam + ' !';

  }

}
