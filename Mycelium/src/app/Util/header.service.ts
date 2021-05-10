import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: 'root' })
export class HeaderService{
    private autorizationHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.cookieService.get('user')}`
    });

    constructor(private cookieService: CookieService) {}

    getHeaders(): HttpHeaders {
        return this.autorizationHeader;
    }
}