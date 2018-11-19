import { Component, OnInit } from '@angular/core';
import {VerifyService} from '../verify.service';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
  providers: [MessageService]
})
export class VerifyComponent implements OnInit {
  testString: string;
  msgs: Message[] = [];
  msgs1: Message[] = [];
  msgs2: Message[] = [];
  msgs3: Message[] = [];
  msgs4: Message[] = [];
  
  constructor(private verifyService: VerifyService, private messageService: MessageService) { 

  }

  ngOnInit() {
  }


    testQueryBartender() {
          this.verifyService.getTestBartender().subscribe(
      data => {
          this.testString = data;
      }
    )
    if (this.testString === undefined || this.testString.length == 0) {
      //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
      console.log("TRUE")
      this.msgs = [];
      this.msgs.push({severity:'success', summary:'Success', detail:'Query returned true'});
    } else {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Fail', detail:'Query returned false'});

    }
  }
  testQueryBeer() {
          this.verifyService.getTestBeer().subscribe(
      data => {
          this.testString = data;
      }
    )
    if (this.testString === undefined || this.testString.length == 0) {
      //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
      console.log("TRUE")
      this.msgs4 = [];
      this.msgs4.push({severity:'success', summary:'Success', detail:'Query returned true'});
    } else {
      this.msgs4 = [];
      this.msgs4.push({severity:'error', summary:'Fail', detail:'Query returned false'});

    }

     }
testQueryDrinkers() {
      this.verifyService.getTestDrinkers().subscribe(
  data => {
      this.testString = data;
  }
)
if (this.testString === undefined || this.testString.length == 0) {
  //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
  console.log("TRUE")
  this.msgs2 = [];
  this.msgs2.push({severity:'success', summary:'Success', detail:'Query returned true'});
} else {
  this.msgs2 = [];
  this.msgs2.push({severity:'error', summary:'Fail', detail:'Query returned false'});

}

 }
 testQueryTrans() {
  this.verifyService.getTestTrans().subscribe(
data => {
  this.testString = data;
}
)
if (this.testString === undefined || this.testString.length == 0) {
//this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
console.log("TRUE")
this.msgs1 = [];
this.msgs1.push({severity:'success', summary:'Success', detail:'Query returned true'});
} else {
this.msgs1 = [];
this.msgs1.push({severity:'error', summary:'Fail', detail:'Query returned false'});

}

}  
testQueryTwoBeers() {
  this.verifyService.getTestTwoBeers().subscribe(
data => {
  this.testString = data;
}
)
if (this.testString === undefined || this.testString.length == 0) {
//this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
console.log("TRUE")
this.msgs3 = [];
this.msgs3.push({severity:'success', summary:'Success', detail:'Query returned true'});
} else {
this.msgs3 = [];
this.msgs3.push({severity:'error', summary:'Fail', detail:'Query returned false'});

}

}


}
