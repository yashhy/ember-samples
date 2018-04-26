import { helper } from '@ember/component/helper';

export function rentalPropertyCategorize(params/*, hash*/) {
  if (params > 5) {
    return `${params} (Larger)`;
  } else {
    return `${params} (Smaller)`;
  }
}

export default helper(rentalPropertyCategorize);
