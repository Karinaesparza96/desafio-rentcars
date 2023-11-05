import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

export abstract class BaseService {
  protected BASE_URL = 'http://localhost:3333/'


  protected extrairErros(response: HttpErrorResponse) {
    debugger
    const error = response.error;
    return throwError(() => error)
  }

}