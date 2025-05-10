import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { userFormDataType } from '../shared/Virtual-DB.model';
import { INIT_USER_FORM_DATA } from '../shared/Virtual-DataBase';

@Injectable({ providedIn: 'root' })
export class UserBuyService {
  private userAssetFormData: userFormDataType = INIT_USER_FORM_DATA;
  private userAssetFormListener = new BehaviorSubject<userFormDataType>(
    this.userAssetFormData
  );
  public readonly userAssetFormOBS = this.userAssetFormListener.asObservable();

  updateApplicantDetailsObj<
    TObj extends Partial<typeof this.userAssetFormData>
  >(Obj: TObj) {
    for (const oj in Obj) {
      this.userAssetFormData = { ...this.userAssetFormData, [oj]: Obj[oj] };
    }
    this.userAssetFormListener.next(this.userAssetFormData);
  }
}
