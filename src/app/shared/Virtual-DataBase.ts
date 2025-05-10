import {
  TCommodity,
  TCurrentTrends,
  TEquities,
  TKeyofAssets,
  userFormDataType,
} from './Virtual-DB.model';

export const ASSET_DROPDOWN_ARR: TKeyofAssets[] = ['equaties', 'Commodities'];
export const EQUITIES_INIT: TEquities[] = [
  {
    currentPrice: '13934.00',
    priceToEarn: '63.10',
    marketCaptializ: '45171.22',
    dividentYldInPercent: '1.40',
    netProfitlastQuatar: '268.59',
    qtrProfitGrowth: '17.34',
    salesLastestQuater: '1247.63',
    yoySalesGrowth: '10.08',
    returnOfCap: '112.44',
    name: 'P & G Hygiene',
  },
  {
    currentPrice: '2550.50',
    priceToEarn: '47.52',
    marketCaptializ: '69462.54',
    dividentYldInPercent: '1.88',
    netProfitlastQuatar: '322.78',
    qtrProfitGrowth: '-2.22',
    salesLastestQuater: '1461.84',
    yoySalesGrowth: '4.74',
    returnOfCap: '96.80',
    name: 'Colgate-Palmoliv',
  },
  {
    currentPrice: '2325.40',
    priceToEarn: '72.36',
    marketCaptializ: '224166.80',
    dividentYldInPercent: '0.73',
    netProfitlastQuatar: '885.41',
    qtrProfitGrowth: '-4.45',
    salesLastestQuater: '5503.88',
    yoySalesGrowth: '4.49',
    returnOfCap: '73.27',
    name: 'Nestle India',
  },
  {
    currentPrice: '786.95',
    priceToEarn: '11.57',
    marketCaptializ: '498159.85',
    dividentYldInPercent: '1.27',
    netProfitlastQuatar: '11008.68',
    qtrProfitGrowth: '16.69',
    salesLastestQuater: '203751.32',
    yoySalesGrowth: '-4.81',
    returnOfCap: '72.95',
    name: 'Life Insurance',
  },
  {
    currentPrice: '3440.30',
    priceToEarn: '25.66',
    marketCaptializ: '1245254.18',
    dividentYldInPercent: '1.60',
    netProfitlastQuatar: '12293.00',
    qtrProfitGrowth: '-1.69',
    salesLastestQuater: '64479.00',
    yoySalesGrowth: '5.29',
    returnOfCap: '64.63',
    name: 'TCS',
  },
  {
    currentPrice: '408.35',
    priceToEarn: '16.69',
    marketCaptializ: '172604.15',
    dividentYldInPercent: '7.10',
    netProfitlastQuatar: '2976.00',
    qtrProfitGrowth: '45.74',
    salesLastestQuater: '9041.00',
    yoySalesGrowth: '19.75',
    returnOfCap: '60.81',
    name: 'Hindustan Zinc',
  },
  {
    currentPrice: '7807.50',
    priceToEarn: '53.70',
    marketCaptializ: '25457.39',
    dividentYldInPercent: '0.83',
    netProfitlastQuatar: '125.97',
    qtrProfitGrowth: '21.18',
    salesLastestQuater: '685.55',
    yoySalesGrowth: '7.21',
    returnOfCap: '58.91',
    name: 'Gillette India',
  },
  {
    currentPrice: '722.55',
    priceToEarn: '46.85',
    marketCaptializ: '57788.12',
    dividentYldInPercent: '0.97',
    netProfitlastQuatar: '341.21',
    qtrProfitGrowth: '9.90',
    salesLastestQuater: '1224.66',
    yoySalesGrowth: '9.51',
    returnOfCap: '53.77',
    name: 'I R C T C',
  },
  {
    currentPrice: '5436.00',
    priceToEarn: '59.59',
    marketCaptializ: '130881.38',
    dividentYldInPercent: '1.35',
    netProfitlastQuatar: '559.13',
    qtrProfitGrowth: '4.20',
    salesLastestQuater: '4432.19',
    yoySalesGrowth: '8.92',
    returnOfCap: '53.01',
    name: 'Britannia Inds.',
  },
  {
    currentPrice: '1734.10',
    priceToEarn: '23.68',
    marketCaptializ: '140894.62',
    dividentYldInPercent: '0.00',
    netProfitlastQuatar: '1124.09',
    qtrProfitGrowth: '-19.31',
    salesLastestQuater: '16241.53',
    yoySalesGrowth: '-2.10',
    returnOfCap: '51.41',
    name: 'Hyundai Motor I',
  },
];

export const COMMODITY_INIT: TCommodity[] = [
  {
    lastPrice: '87,056.00',
    Change: '-20.00',
    avgPrice: '86,781.57',
    volumeInlots: '21,044',
    openInt: '105,202',
    name: 'SILVERMIC',
  },
  {
    lastPrice: '181.00',
    Change: '1.30',
    avgPrice: '180.71',
    volumeInlots: '16,723',
    openInt: '47,112',
    name: 'NATURALGAS',
  },
  {
    lastPrice: '181.10',
    Change: '1.50',
    avgPrice: '180.68',
    volumeInlots: '9,731',
    openInt: '35,200',
    name: 'NATGASMINI',
  },
  {
    lastPrice: '87,060.00',
    Change: '-17.00',
    avgPrice: '86,777.10',
    volumeInlots: '5,849',
    openInt: '33,682',
    name: 'SILVERM',
  },
  {
    lastPrice: '7,070.00',
    Change: '-7.00',
    avgPrice: '7,066.32',
    volumeInlots: '5,819',
    openInt: '90,826',
    name: 'GOLDPETAL',
  },
  {
    lastPrice: '72,089.00',
    Change: '-57.00',
    avgPrice: '71,962.33',
    volumeInlots: '5,270',
    openInt: '18,035',
    name: 'GOLDM',
  },
  {
    lastPrice: '87,040.00',
    Change: '-9.00',
    avgPrice: '86,720.84',
    volumeInlots: '3,898',
    openInt: '24,163',
    name: 'SILVER',
  },
  {
    lastPrice: '6,414.00',
    Change: '47.00',
    avgPrice: '6,403.36',
    volumeInlots: '3,880',
    openInt: '6,553',
    name: 'CRUDEOILM',
  },
  {
    lastPrice: '813.50',
    Change: '6.00',
    avgPrice: '810.91',
    volumeInlots: '2,908',
    openInt: '10,666',
    name: 'COPPER',
  },
];

export const CURRENT_TRENDS_ARR: TCurrentTrends[] = [
  'Titan Company',
  'Tata Motors',
  'Larsen & Toubro',
  'ABB India',
  'Canara Bank',
  'Hindustan Aeronautics',
  'Varun Beverages',
  'Info Edge (India)',
  'Hero MotoCorp',
  'State Bank of India',
];

const CURRENT_TRENDS_DATA: {
  [key in TCurrentTrends]: {
    markerPrice: string;
    WLow: string;
    WHigh: string;
  };
} = {
  'Titan Company': {
    markerPrice: '3,510.30',
    WLow: '2,925.00',
    WHigh: '3,867.00',
  },
  'Tata Motors': {
    markerPrice: '708.50',
    WLow: '535.75',
    WHigh: '1,179.00',
  },
  'Larsen & Toubro': {
    markerPrice: '3,443.00',
    WLow: '2,965.30',
    WHigh: '3,963.50',
  },
  'ABB India': {
    markerPrice: '5,440.50',
    WLow: '4,684.45',
    WHigh: '9,149.95',
  },
  'Canara Bank': {
    markerPrice: '97.64',
    WLow: '78.60',
    WHigh: '128.90',
  },
  'Hindustan Aeronautics': {
    markerPrice: '4,501.20',
    WLow: '3,046.05',
    WHigh: '5,674.75',
  },
  'Varun Beverages': {
    markerPrice: '496.21',
    WLow: '419.05',
    WHigh: '681.22',
  },
  'Info Edge (India)': {
    markerPrice: '1,357.00',
    WLow: '1,050.00',
    WHigh: '1,825.78',
  },
  'Hero MotoCorp': {
    markerPrice: '3,853.90',
    WLow: '3,344.50',
    WHigh: '6,246.80',
  },
  'State Bank of India': {
    markerPrice: '779.00',
    WLow: '680.90',
    WHigh: '912.00',
  },
};

export function GET_TRENDS_VALUE<TKey extends keyof typeof CURRENT_TRENDS_DATA>(
  key: TKey
) {
  return CURRENT_TRENDS_DATA[key];
}

export const INIT_USER_FORM_DATA: userFormDataType = {
  assetType: 'equity',
  isCurrentTrends: false,
  assetDropDown: EQUITIES_INIT,
  date: new Date(),
  dropDownCurrentTrends: CURRENT_TRENDS_ARR[0],
  purchasePrice: 0,
  quantity: 0,
};
