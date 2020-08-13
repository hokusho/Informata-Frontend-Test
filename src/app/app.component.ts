import { Component, OnInit, DoCheck } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './login/auth.service';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { MenuItemContent } from 'primeng/menu';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements MenuItem, OnInit, DoCheck {

    isLogin 

    title = "menu";
    constructor( private authService: AuthService) { }

    items: MenuItem[];
    activeItem: MenuItem;
   

    ngOnInit(): void {
        
        this.isLogin = window.location.href.includes('login');

        this.items = [

            { items: [{ label: 'Home', icon: 'pi pi-fw pi-home',routerLink:'/home' }]},

        {
                label: 'Produtos',
                items: [
                    { label: 'Consulta', icon: 'pi pi-fw pi-search',routerLink:'/consulta'  },
                    
                ]
            },

            {
                label: 'Usuário',
                items: [
                    { label: 'Cadastro', icon: 'pi pi-fw pi-plus', routerLink:'/cadastro' },
                    { label: 'Logout', icon: 'pi pi-sign-out', routerLink:'/login', command: this.setUser},
                ]
            }];
    }
    ngDoCheck() {
        this.isLogin = window.location.href.includes('login');
     }

     setUser() {
        window.localStorage.setItem('userName','')
        window.localStorage.setItem('userPass','')
    }
}

