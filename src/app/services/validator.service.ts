import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public static name_pattern = '^[a-zA-Z]+$';
  constructor() { }
}
