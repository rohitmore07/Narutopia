import { baseVillages } from './base-villages';
import { generatePaginatedData } from '../../utils/data-utils';

// Generate 50 additional villages for pagination
export const mainVillages = generatePaginatedData(baseVillages, 50);