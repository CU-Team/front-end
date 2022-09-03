import type { LocationType } from '@hooks/useGeolocation/types';

export interface SelectedAddDataType {
  location: LocationType;
  keyword: string;
  address: string;
}
