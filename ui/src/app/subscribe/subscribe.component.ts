import { Component, OnInit } from '@angular/core';
import { IPayPalConfig } from '../../../node_modules/ngx-paypal/ngx-paypal';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;

  constructor() { }

  ngOnInit() {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'USD',
        clientId: 'sb',
        createSubscription: (data, actions ) => {
          return actions.subscription.create({
            'plan_id': 'P-7GT61738G39013536LZXLEEQ'
          });
        },
        onApprove: (data, actions) => {
          alert('You have successfully created subscription ' + data.subscriptionID);
        },
    };
  }
}
