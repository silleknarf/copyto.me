import { Component, OnInit } from '@angular/core';
import { IPayPalConfig } from '../../../node_modules/ngx-paypal/dist/ngx-paypal';

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
            'plan_id': 'P-2UF78835G6983425GLSM44MA'
          });
        },
        onApprove: (data, actions) => {
          alert('You have successfully created subscription ' + data.subscriptionID);
        },
    };
  }
}
