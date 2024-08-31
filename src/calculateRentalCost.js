/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const pricePerDay = 40;
  const calcCount = pricePerDay * days;
  const sailForThreeMore = 20;
  const sailForSevenMore = 50;

  if (days >= 7) {
    return calcCount - sailForSevenMore;
  }

  if (days >= 3) {
    return calcCount - sailForThreeMore;
  }

  if (days > 0) {
    return calcCount;
  }
}

module.exports = calculateRentalCost;
