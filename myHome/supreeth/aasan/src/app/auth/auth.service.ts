import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';


interface AthresponseData {

    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered: boolean
}

@Injectable()
export class Authservice {

    constructor(private http: HttpClient) {

    }
    signup(email: string, password: string) {
        return this.http.post<AthresponseData>(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key= AIzaSyCi8n5_cyCQypZsACGoaWB9ApYbr-ze-TU',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
            .pipe(tap(resData => {
                this.handleAuthntication(resData.email, resData.localId)
            }));
    }

    login(email: string, password: string) {

        return this.http.post<AthresponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key= AIzaSyCi8n5_cyCQypZsACGoaWB9ApYbr-ze-TU',
            {

                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(tap(resData => {
                this.handleAuthntication(resData.email, resData.localId)
            }));
    }

    handleAuthntication(email: string, localId: string) {
        const user = {
            email: email,
            token: localId
        };
        localStorage.setItem('userObj', JSON.stringify(user));
    }

    public isAuthenticated(): boolean {
        const userObjFromLocalStroage = JSON.parse(localStorage.getItem('userObj'));
        return (userObjFromLocalStroage && userObjFromLocalStroage.email && userObjFromLocalStroage.token)
    }

    logout(): void {
        localStorage.clear();
    }

}


