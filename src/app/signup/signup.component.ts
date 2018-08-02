import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../services/usuario.services';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    datos: any = {};

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _usuarioService: UsuarioService) {
    }

    ngOnInit() {
    }

    login(inputEmail: String, inputPass: String) {
        const salida = {
            rutMail: inputEmail,
            clave: inputPass
        };

        this._usuarioService.iniciarSesion(salida).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}
