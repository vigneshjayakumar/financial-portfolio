export type TKeyofAssets = 'equaties' | 'Commodities';
export type TCurrentTrends =
  | 'Titan Company'
  | 'Tata Motors'
  | 'Larsen & Toubro'
  | 'ABB India'
  | 'Canara Bank'
  | 'Hindustan Aeronautics'
  | 'Varun Beverages'
  | 'Info Edge (India)'
  | 'Hero MotoCorp'
  | 'State Bank of India';
export type TEquities = {
  currentPrice: string;
  priceToEarn: string;
  marketCaptializ: string;
  dividentYldInPercent: string;
  netProfitlastQuatar: string;
  qtrProfitGrowth: string;
  salesLastestQuater: string;
  yoySalesGrowth: string;
  returnOfCap: string;
  name: string;
};

export type TCommodity = {
  lastPrice: string;
  Change: string;
  avgPrice: string;
  volumeInlots: string;
  openInt: string;
  name: string;
};



export type userFormDataType = {
  assetType: 'equity' | 'commodity' | 'CurrentTrends';
  isCurrentTrends:boolean;
  assetDropDown: TEquities[] | TCommodity[];
  dropDownCurrentTrends: TCurrentTrends;
  quantity: number;
  purchasePrice: number;
  date: Date;
};
