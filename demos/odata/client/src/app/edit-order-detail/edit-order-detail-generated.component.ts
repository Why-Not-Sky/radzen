/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-order-detail.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { NotificationService } from '@radzen/angular';
import { FormComponent } from '@radzen/angular';

import { SampleService } from '../sample.service';

export class EditOrderDetailGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild(FormComponent) form0: FormComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  _location: Location;

  _subscription: Subscription;

  sample: SampleService;

  orderdetail: any;

  getOrdersResult: any;

  getProductsResult: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.sample = this.injector.get(SampleService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      this.parameters = parameters;
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.sample.getOrderDetailById(this.parameters.Id)
    .subscribe((result: any) => {
      this.orderdetail = result;
    }, (result: any) => {

    });

    this.sample.getOrders(null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getOrdersResult = result.value;
    }, (result: any) => {

    });

    this.sample.getProducts(null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getProductsResult = result.value;
    }, (result: any) => {

    });
  }

  form0Cancel(event: any) {
    this._location.back();
  }

  form0Submit(event: any) {
    this.sample.updateOrderDetail(this.parameters.Id, event)
    .subscribe((result: any) => {
      this.router.navigate([{ outlets: { popup: null } }]).then(() => this.router.navigate(['order-details']));
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to update OrderDetail` });
    });
  }
}
