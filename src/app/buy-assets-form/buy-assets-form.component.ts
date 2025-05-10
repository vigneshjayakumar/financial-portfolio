import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import * as _VDBModel from '../shared/Virtual-DB.model';
import { UserBuyService } from './user-buy-assets.service';
import {
  ASSET_DROPDOWN_ARR,
  CURRENT_TRENDS_ARR,
} from '../shared/Virtual-DataBase';
import { DashboadService } from '../dashboard/dashboard.service';
import { MakeCaps } from '../shared/pipes/caps.pipe';

@Component({
  selector: 'app-buy-assets-form',
  standalone: true,
  imports: [ReactiveFormsModule, MakeCaps],
  templateUrl: './buy-assets-form.component.html',
  styleUrl: './buy-assets-form.component.css',
})
export class BuyAssetsFormComponent implements OnInit, OnDestroy {
  private numberOnly = /^[0-9]*$/;

  assetAllocationArr: _VDBModel.TKeyofAssets[] = ASSET_DROPDOWN_ARR;
  assetNamesArr: _VDBModel.TEquities[] | _VDBModel.TCommodity[] = [];
  marketTrendsArr = CURRENT_TRENDS_ARR;

  userForm!: FormGroup;

  assetTypeChangeSubs!: Subscription;

  onPopSubmit = false;
  isCurrentTrends = false;
  errorMsg: string | null = null;

  constructor(
    private userBuyService: UserBuyService,
    private dashboardService: DashboadService,
    private router: Router
  ) {}

  userFormSUBS = this.userBuyService.userAssetFormOBS
    .pipe(
      tap((s) => {
        this.isCurrentTrends = s.isCurrentTrends;
        this.assetNamesArr = s.assetDropDown;
      })
    )
    .subscribe();

  private initUserForm() {
    this.userForm = new FormGroup({
      assetType: new FormControl(''),
      currentTrends: new FormControl(''),
      assetDropDown: new FormControl(''),
      quantity: new FormControl(null, {
        validators: [Validators.pattern(this.numberOnly), Validators.required],
      }),
      purchasePrice: new FormControl(null, {
        validators: [Validators.pattern(this.numberOnly), Validators.required],
      }),
      date: new FormControl(new Date(), { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
    this.initUserForm();
  }

  onAssetTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.assetTypeChangeSubs = this.dashboardService
      .fetchAssetsDetails(target.value as _VDBModel.TKeyofAssets)
      .subscribe((res) => (this.assetNamesArr = res));
  }

  onSubmit() {
    if (!this.userForm.valid)
      return (this.errorMsg = 'Please Fill All Details');
    this.errorMsg = null;
    this.onPopSubmit = true;
    return this.userForm.value;
  }

  confirmPurchase() {
    alert('Thank You');
    this.onPopSubmit = false;
    this.router.navigate(['/']);
  }

  cancelPopup() {
    this.onPopSubmit = false;
  }

  onRouteBack() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.userFormSUBS) this.userFormSUBS.unsubscribe();
    if (this.assetTypeChangeSubs) this.assetTypeChangeSubs.unsubscribe();
  }
}
