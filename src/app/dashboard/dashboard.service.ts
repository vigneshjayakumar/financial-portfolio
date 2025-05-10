import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as _VDBModel from '../shared/Virtual-DB.model';
import { COMMODITY_INIT, EQUITIES_INIT } from '../shared/Virtual-DataBase';

@Injectable({
  providedIn: 'root',
})
export class DashboadService {
  assets: {
    [assetKey in _VDBModel.TKeyofAssets]:
      | _VDBModel.TEquities[]
      | _VDBModel.TCommodity[];
  } = {
    equaties: EQUITIES_INIT,
    Commodities: COMMODITY_INIT,
  };

  fetchAssetsDetails<T extends keyof typeof this.assets>(data: T) {
    return of(this.assets[data]); //simulate as Observerable.
  }
}
