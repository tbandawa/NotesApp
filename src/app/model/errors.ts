import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'

@Injectable({
    providedIn: "root"
})
export class Errors {

    private error = new Subject<String>()

    setError(error: String) {
        this.error.next(error)
    }

    getError(): Observable<String> {
        return this.error.asObservable()
    }

}
