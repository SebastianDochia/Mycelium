import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WorkingEnvService {
    private id = new Subject<String>();

    constructor() {}

    setId(id: string) {
        this.id.next(id);
    }

    getId() {
        return this.id;
    }
}