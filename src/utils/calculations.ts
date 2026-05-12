import { RewardCalculation, GrowthDataPoint } from '../types';

export function calculateRewards(
  stakedAtom: number,
  apr: number,
  validatorCommission: number,
  compoundingFrequency: string
): RewardCalculation {
  const netApr = apr * (1 - validatorCommission / 100);
  const dailyRate = netApr / 100 / 365;

  const dailyRewards = stakedAtom * dailyRate;
  const weeklyRewards = dailyRewards * 7;
  const monthlyRewards = dailyRewards * 30.44;
  const yearlyRewards = stakedAtom * (netApr / 100);

  let compoundedYearlyRewards = yearlyRewards;

  if (compoundingFrequency !== 'none' && stakedAtom > 0) {
    let periods: number;
    switch (compoundingFrequency) {
      case 'daily':
        periods = 365;
        break;
      case 'weekly':
        periods = 52;
        break;
      case 'monthly':
        periods = 12;
        break;
      default:
        periods = 1;
    }
    const ratePerPeriod = (netApr / 100) / periods;
    const finalAmount = stakedAtom * Math.pow(1 + ratePerPeriod, periods);
    compoundedYearlyRewards = finalAmount - stakedAtom;
  }

  return {
    dailyRewards,
    weeklyRewards,
    monthlyRewards,
    yearlyRewards,
    netApr,
    compoundedYearlyRewards,
  };
}

export function projectGrowth(
  stakedAtom: number,
  apr: number,
  validatorCommission: number,
  compoundingFrequency: string,
  days: number
): GrowthDataPoint[] {
  const netApr = apr * (1 - validatorCommission / 100);
  const dailyRate = netApr / 100 / 365;
  const points: GrowthDataPoint[] = [];

  let periods: number;
  switch (compoundingFrequency) {
    case 'daily':
      periods = 365;
      break;
    case 'weekly':
      periods = 52;
      break;
    case 'monthly':
      periods = 12;
      break;
    default:
      periods = 0;
  }

  const interval = Math.max(1, Math.floor(days / 60));

  for (let d = 0; d <= days; d += interval) {
    const withoutCompounding = stakedAtom + stakedAtom * dailyRate * d;

    let withCompounding: number;
    if (periods > 0) {
      const ratePerPeriod = (netApr / 100) / periods;
      const periodsElapsed = (d / 365) * periods;
      withCompounding = stakedAtom * Math.pow(1 + ratePerPeriod, periodsElapsed);
    } else {
      withCompounding = withoutCompounding;
    }

    let label: string;
    if (d === 0) label = 'Now';
    else if (d < 30) label = `${d}d`;
    else if (d < 365) label = `${Math.round(d / 30)}mo`;
    else label = `${(d / 365).toFixed(1)}y`;

    points.push({
      day: d,
      label,
      withCompounding: Math.round(withCompounding * 10000) / 10000,
      withoutCompounding: Math.round(withoutCompounding * 10000) / 10000,
    });
  }

  // Ensure last point
  if (points.length === 0 || points[points.length - 1].day !== days) {
    const d = days;
    const withoutCompounding = stakedAtom + stakedAtom * dailyRate * d;
    let withCompounding: number;
    if (periods > 0) {
      const ratePerPeriod = (netApr / 100) / periods;
      const periodsElapsed = (d / 365) * periods;
      withCompounding = stakedAtom * Math.pow(1 + ratePerPeriod, periodsElapsed);
    } else {
      withCompounding = withoutCompounding;
    }
    let label: string;
    if (d < 30) label = `${d}d`;
    else if (d < 365) label = `${Math.round(d / 30)}mo`;
    else label = `${(d / 365).toFixed(1)}y`;

    points.push({
      day: d,
      label,
      withCompounding: Math.round(withCompounding * 10000) / 10000,
      withoutCompounding: Math.round(withoutCompounding * 10000) / 10000,
    });
  }

  return points;
}

export function formatCurrency(value: number, currency: string = 'USD'): string {
  const symbol = currency === 'EUR' ? '€' : '$';
  if (Math.abs(value) >= 1000000) {
    return `${symbol}${(value / 1000000).toFixed(2)}M`;
  }
  if (Math.abs(value) >= 100000) {
    return `${symbol}${(value / 1000).toFixed(1)}K`;
  }
  return `${symbol}${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatAtom(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(4)}M`;
  }
  return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 });
}
