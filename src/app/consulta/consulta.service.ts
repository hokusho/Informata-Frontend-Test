import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  url = "https://us-central1-estudo-974fe.cloudfunctions.net"

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  listaProd() {
    return this.httpClient.get(this.url + "/front_end" , this.httpOptions)
      .pipe(tap((result: any) => result), take(1)).toPromise();
  }

}
