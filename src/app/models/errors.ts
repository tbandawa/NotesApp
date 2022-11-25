import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class Errors {

  private error = new Subject<String | null>()

  setError(error: String) {
    this.error.next(error)
  }

  resetError() {
    this.error.next(null)
  }

  getError(): Observable<String | null> {
    return this.error!.asObservable()
  }
}
