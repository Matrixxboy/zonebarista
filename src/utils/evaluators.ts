export interface Evaluation {
  text: string;
  type: 'poor' | 'good' | 'great' | 'neutral' | 'warning';
}

export function evaluateResult(formulaId: string, result: number): Evaluation | null {
  if (Number.isNaN(result) || result === 0) return null;

  switch (formulaId) {
    case 'f-01': // Brew Ratio (Result is X in 1:X)
      if (result < 1.5) return { text: 'Ristretto / Too Concentrated', type: 'warning' };
      if (result >= 1.5 && result <= 2.5) return { text: 'Standard Espresso (Balanced)', type: 'good' };
      if (result > 2.5 && result <= 4) return { text: 'Lungo', type: 'neutral' };
      if (result > 4 && result < 8) return { text: 'No Man\'s Land', type: 'poor' };
      if (result >= 8 && result < 15) return { text: 'Cold Brew / Aeropress', type: 'neutral' };
      if (result >= 15 && result <= 17) return { text: 'SCA Filter Target (Great)', type: 'great' };
      if (result > 17) return { text: 'Weak / Diluted', type: 'poor' };
      break;

    case 'f-02': // Extraction Yield %
      if (result < 18) return { text: 'Under-extracted (Sour/Weak)', type: 'poor' };
      if (result >= 18 && result <= 22) return { text: 'Optimal (Balanced/Sweet)', type: 'great' };
      if (result > 22) return { text: 'Over-extracted (Bitter/Dry)', type: 'poor' };
      break;

    case 'f-03': // Dissolved Coffee Solids Mass
      return { text: 'Absolute Yield Mass', type: 'neutral' };

    case 'f-07': // Total Hardness mg/L
      if (result < 60) return { text: 'Soft (May lack extraction power)', type: 'warning' };
      if (result >= 60 && result <= 120) return { text: 'Moderately Hard (Good)', type: 'good' };
      if (result > 120 && result <= 180) return { text: 'Hard (Mutes acidity)', type: 'warning' };
      if (result > 180) return { text: 'Very Hard (Scale risk/Poor)', type: 'poor' };
      break;

    case 'f-08': // Alkalinity mg/L
      if (result < 30) return { text: 'Low Buffer (Too Sharp/Sour)', type: 'warning' };
      if (result >= 30 && result <= 50) return { text: 'SCA Target (Balanced)', type: 'great' };
      if (result > 50 && result <= 80) return { text: 'High Buffer (Muted)', type: 'warning' };
      if (result > 80) return { text: 'Too High (Flat/Muddy)', type: 'poor' };
      break;

    case 'f-11': // DTR %
      if (result < 15) return { text: 'Underdeveloped (Grassy)', type: 'poor' };
      if (result >= 15 && result < 20) return { text: 'Light Roast', type: 'neutral' };
      if (result >= 20 && result <= 25) return { text: 'Medium Roast (Balanced)', type: 'good' };
      if (result > 25 && result <= 35) return { text: 'Dark Roast', type: 'neutral' };
      if (result > 35) return { text: 'Baked/Burnt', type: 'poor' };
      break;

    case 'f-12': // Roast Loss %
      if (result < 12) return { text: 'Under-roasted', type: 'warning' };
      if (result >= 12 && result < 15) return { text: 'Light Roast', type: 'neutral' };
      if (result >= 15 && result <= 18) return { text: 'Medium Roast (Balanced)', type: 'good' };
      if (result > 18 && result <= 20) return { text: 'Medium-Dark Roast', type: 'neutral' };
      if (result > 20) return { text: 'Dark Roast', type: 'warning' };
      break;

    case 'f-13': // RoR
      if (result > 25) return { text: 'Too Fast (Scorching Risk)', type: 'poor' };
      if (result >= 15 && result <= 25) return { text: 'Drying Phase Speed', type: 'good' };
      if (result >= 8 && result < 15) return { text: 'Maillard Phase Speed', type: 'good' };
      if (result >= 4 && result < 8) return { text: 'Development Phase Speed', type: 'good' };
      if (result < 4) return { text: 'Stalling / Baked Risk', type: 'poor' };
      break;

    case 'f-14': // Beverage Cost %
      if (result < 20) return { text: 'Highly Profitable (Great)', type: 'great' };
      if (result >= 20 && result <= 35) return { text: 'Target Range (Good)', type: 'good' };
      if (result > 35 && result <= 40) return { text: 'Squeezed Margin', type: 'warning' };
      if (result > 40) return { text: 'Too Expensive (Poor Profit)', type: 'poor' };
      break;

    case 'f-15': // Menu Price from Target
      return { text: 'Calculated Price Target', type: 'neutral' };

    case 'f-18': // Prime Cost %
      if (result < 55) return { text: 'Highly Profitable (Great)', type: 'great' };
      if (result >= 55 && result <= 65) return { text: 'Target Range (Balanced)', type: 'good' };
      if (result > 65 && result <= 70) return { text: 'Danger Zone', type: 'warning' };
      if (result > 70) return { text: 'Unsustainable (Poor)', type: 'poor' };
      break;

    case 'f-23': // SCA Cupping
      if (result < 80) return { text: 'Commercial Grade (Poor)', type: 'poor' };
      if (result >= 80 && result < 85) return { text: 'Specialty (Good)', type: 'good' };
      if (result >= 85 && result < 90) return { text: 'Premium Specialty (Great)', type: 'great' };
      if (result >= 90) return { text: 'Outstanding (Best)', type: 'great' };
      break;
  }

  return null;
}
