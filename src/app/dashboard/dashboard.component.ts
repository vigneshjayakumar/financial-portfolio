import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs/internal/operators/tap';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

import { DashboadService } from './dashboard.service';
import {
  ASSET_DROPDOWN_ARR,
  CURRENT_TRENDS_ARR,
  GET_TRENDS_VALUE,
} from '../shared/Virtual-DataBase';
import * as _VDBModel from '../shared/Virtual-DB.model';
import { MakeCaps } from '../shared/pipes/caps.pipe';
import { UserBuyService } from '../buy-assets-form/user-buy-assets.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, MakeCaps],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  assetAllocationArr: _VDBModel.TKeyofAssets[] = ASSET_DROPDOWN_ARR;
  assetType: 'equity' | 'commodity' | 'CurrentTrends' = 'equity';
  marketTrendsArr = CURRENT_TRENDS_ARR;

  marketTrends: {
    name: _VDBModel.TCurrentTrends;
    value: {
      markerPrice: string;
      WLow: string;
      WHigh: string;
    };
  } = {
    name: 'Titan Company',
    value: GET_TRENDS_VALUE('Titan Company'),
  };

  isShowMarketTrend = false;
  assetForm = new FormControl<_VDBModel.TKeyofAssets>('equaties');
  marketTrendsForm = new FormControl('Titan Company');

  asset: _VDBModel.TKeyofAssets = 'equaties';
  equityinfoData: _VDBModel.TEquities[] = [];
  commodityinfoData: _VDBModel.TCommodity[] = [];

  assetChangeSUBS = this.assetForm.valueChanges
    .pipe(
      tap((asset) => (this.asset = asset!)),
      switchMap((s) =>
        this.dashboardService.fetchAssetsDetails(s as _VDBModel.TKeyofAssets)
      )
    )
    .subscribe((res) => this.mapInfo(res));

  marketTrendsSUBS = this.marketTrendsForm.valueChanges
    .pipe(
      tap((s) => {
        this.marketTrends = {
          name: s as _VDBModel.TCurrentTrends,
          value: GET_TRENDS_VALUE(s as _VDBModel.TCurrentTrends),
        };
        this.equityinfoData = [];
        this.commodityinfoData = [];
        this.isShowMarketTrend = true;
        const obj: Partial<_VDBModel.userFormDataType> = {
          isCurrentTrends: true,
          dropDownCurrentTrends: s as _VDBModel.TCurrentTrends,
        };
        this.assetType = 'CurrentTrends';
        this.updateUserBuyAssetDetails(obj);
      })
    )
    .subscribe();

  constructor(
    private dashboardService: DashboadService,
    private userBuyService: UserBuyService,
    private router: Router
  ) {}

  private updateUserBuyAssetDetails(obj: Partial<_VDBModel.userFormDataType>) {
    this.userBuyService.updateApplicantDetailsObj(obj);
  }

  private mapInfo(data: _VDBModel.TEquities[] | _VDBModel.TCommodity[]) {
    this.isShowMarketTrend = false;
    const obj: Partial<_VDBModel.userFormDataType> = {
      assetType: 'commodity',
      assetDropDown: [],
      isCurrentTrends: false,
    };
    if (this.asset === 'Commodities') {
      this.equityinfoData = [];
      this.commodityinfoData = data as _VDBModel.TCommodity[];
      obj.assetDropDown = this.commodityinfoData;
      this.assetType = 'commodity';
    } else {
      this.commodityinfoData = [];
      this.equityinfoData = data as _VDBModel.TEquities[];
      obj.assetType = 'equity';
      obj.assetDropDown = this.equityinfoData;
      this.assetType = 'equity';
    }
    this.updateUserBuyAssetDetails(obj);
  }

  ngOnInit(): void {
    this.assetChangeSUBS = this.dashboardService
      .fetchAssetsDetails('equaties')
      .subscribe((res) => this.mapInfo(res));
  }

  onRouteToBuy() {
    this.router.navigate(['/buyForm']);
  }

  ngOnDestroy(): void {
    if (this.assetChangeSUBS) this.assetChangeSUBS.unsubscribe();
    if (this.marketTrendsSUBS) this.marketTrendsSUBS.unsubscribe();
  }
}
