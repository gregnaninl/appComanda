import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationServiceProvider } from './../../providers/authentication-service/authentication-service';
import { IniciarsesionPage } from './../iniciarsesion/iniciarsesion';
import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage   implements OnInit {

  usuarioOnline: string = "usuario@usuario.com";
  
  
  


  constructor( private navCtrl : NavController,
    private MiAuth: AngularFireAuth,
    private error : ErrorsHandlerProvider,
    private autenticationService: AuthenticationServiceProvider,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerProvider) {

  }

  ionViewDidLoad() {
    this.usuarioOnline = this.MiAuth.auth.currentUser.email;
    
    
   
  }


  ngOnInit() {
    console.log("on init");
  
    
  }

  fotosLindasClick() {
   
   let spiner = this.spinnerHandler.presentLoadingCustom();
   spiner.present();
  }

  fotosFeasClick() {
  
    let spiner = this.spinnerHandler.presentLoadingCustom1();
    spiner.present();
  }

  
  listadoIconos: any = [
    {
        nombre: "pedidos",
        imagen: "assets/imgs/home/pedidos.png",
        accion: "PedidosPage"
    },
    {
        nombre: "empleados",
        imagen: "assets/imgs/home/empleados.png",
        accion: "EmpleadosPage"
    },
    {
        nombre: "mesas",
        imagen: "assets/imgs/home/mesas.png",
        accion: "MesasPage"
    },
    {
        nombre: "menu",
        imagen: "assets/imgs/home/menu.png",
        accion: "menu"
    }
]

iconosClick(icono){

}


  cerrarSesionClick(){
    this.autenticationService.logOut();
    this.navCtrl.push( IniciarsesionPage);

}



}
