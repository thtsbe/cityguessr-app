import { City } from './city.model';

export interface GuessDto {
  id: string;
  lat: string;
  lng: string;
  options: City[];
}
