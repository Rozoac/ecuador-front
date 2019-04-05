import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../service/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import Swal from 'sweetalert2';
import {Expo } from 'gsap/all';
import {TweenMax, Power1} from 'gsap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

emailFormulario;
passwordFormulario;
  recuerdame: boolean = null;
  token;
  identity;
  carga = false;
  correo: string;
  editor: any;
  email;
    password;
     mySVG;
     armL;
     armR;
     eyeL;
     eyeR;
     nose;
     mouth;
     mouthBG;
     mouthSmallBG;
     mouthMediumBG;
     mouthLargeBG;
      mouthMaskPath;
     mouthOutline;
     tooth;
     tongue;
     chin;
      face;
      eyebrow;
      outerEarL;
     outerEarR;
      earHairL;
      earHairR;
     hair;
     caretPos;
     curEmailIndex;
      screenCenter ;
     svgCoords ;
     eyeMaxHorizD = 20;
      eyeMaxVertD = 10;
      noseMaxHorizD = 23;
      noseMaxVertD = 10;
      dFromC;
      eyeDistH;
      eyeLDistV;
      eyeRDistV;
      eyeDistR;
      mouthStatus = 'small';
  constructor(public router: Router, public _usuarioService: UsuarioService) {}

// LOGIN


onEmailInput(e, thatt) {
  thatt.getCoord(e, thatt);
const value = e.target.value;
thatt.curEmailIndex = value.length;
// very crude email validation for now to trigger effects
if (thatt.curEmailIndex > 0) {
  if (thatt.mouthStatus === 'small') {
  thatt.mouthStatus = 'medium';
  // tslint:disable-next-line:max-line-length
  // TweenMax.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthMediumBG, shapeIndex: 8, ease: Expo.easeOut});
  TweenMax.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
  TweenMax.to(this.tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
  TweenMax.to([this.eyeL, this.eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
  }
  if (value.includes('@')) {
    this.mouthStatus = 'large';
    TweenMax.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthLargeBG, ease: Expo.easeOut});
    TweenMax.to(this.tooth, 1, {x: 3, y: -2, ease: Expo.easeOut});
    TweenMax.to(this.tongue, 1, {y: 2, ease: Expo.easeOut});
    TweenMax.to([this.eyeL, this.eyeR], 1, {scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: 'center center'});
    } else {
      this.mouthStatus = 'medium';
      TweenMax.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthMediumBG, ease: Expo.easeOut});
      TweenMax.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
      TweenMax.to(this.tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
      TweenMax.to([this.eyeL, this.eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
    }
 } else {
    this.mouthStatus = 'small';
    // tslint:disable-next-line:max-line-length
    TweenMax.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthSmallBG, shapeIndex: 9, ease: Expo.easeOut});
    TweenMax.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
    TweenMax.to(this.tongue, 1, {y: 0, ease: Expo.easeOut});
    TweenMax.to([this.eyeL, this.eyeR], 1, {scaleX: 1, scaleY: 1, ease: Expo.easeOut});
  }
}

 onEmailFocus(e) {
  e.target.parentElement.classList.add('focusWithText');
  this.getCoord(e);
}
 getCoord( e , that?) {
    let carPos = that.email.selectionEnd,
      div = document.createElement('div'),
      span = document.createElement('span'),
      copyStyle = getComputedStyle(that.email),
      emailCoords, caretCoords, centerCoords: any = {}
    ;
    [].forEach.call(copyStyle, function(prop) {
      div.style[prop] = copyStyle[prop];
    });
    div.style.position = 'absolute';
    document.body.appendChild(div);
    div.textContent = that.email.value.substr(0, carPos);
    span.textContent = that.email.value.substr(carPos) || '.';
    div.appendChild(span);
    emailCoords = that.getPosition(that.email);
    caretCoords = that.getPosition(span);							//console.log("caretCoords.x " + caretCoords.x + ", caretCoords.y: " + caretCoords.y);
    centerCoords = that.getPosition(that.mySVG);							//console.log("centerCoords.x: " + centerCoords.x);
    that.svgCoords = that.getPosition(that.mySVG);
    that.screenCenter = centerCoords.x + (that.mySVG.offsetWidth / 2);		//console.log("screenCenter: " + screenCenter);
    that.caretPos = caretCoords.x + emailCoords.x;					//console.log("caretPos: " + caretPos);
    that.dFromC = that.screenCenter - that.caretPos; 							//console.log("dFromC: " + dFromC);
    let pFromC = Math.round((that.caretPos / that.screenCenter) * 100) / 100;
    if (pFromC < 1) {
    } else if (pFromC > 1) {
      pFromC -= 2;
      pFromC = Math.abs(pFromC);
    }
    that.eyeDistH = -that.dFromC * .05;
    if (that.eyeDistH > that.eyeMaxHorizD) {
      that.eyeDistH = that.eyeMaxHorizD;
    } else if (that.eyeDistH < -that.eyeMaxHorizD) {
      that.eyeDistH = -that.eyeMaxHorizD;
    }
    const eyeLCoords = {x: that.svgCoords.x + 84, y: that.svgCoords.y + 76};
    const eyeRCoords = {x: that.svgCoords.x + 113, y: that.svgCoords.y + 76};
    const noseCoords = {x: that.svgCoords.x + 97, y: that.svgCoords.y + 81};
    const mouthCoords = {x: that.svgCoords.x + 100, y: that.svgCoords.y + 100};
    const eyeLAngle = that.getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
    const eyeLX = Math.cos(eyeLAngle) * that.eyeMaxHorizD;
    const eyeLY = Math.sin(eyeLAngle) * that.eyeMaxVertD;
    const eyeRAngle = that.getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
    const eyeRX = Math.cos(eyeRAngle) * that.eyeMaxHorizD;
    const eyeRY = Math.sin(eyeRAngle) * that.eyeMaxVertD;
    const noseAngle = that.getAngle(noseCoords.x, noseCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
    const noseX = Math.cos(noseAngle) * that.noseMaxHorizD;
    const noseY = Math.sin(noseAngle) * that.noseMaxVertD;
    const mouthAngle = that.getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
    const mouthX = Math.cos(mouthAngle) * that.noseMaxHorizD;
    const mouthY = Math.sin(mouthAngle) * that.noseMaxVertD;
    const mouthR = Math.cos(mouthAngle) * 6;
    const chinX = mouthX * .8;
    const chinY = mouthY * .5;
    let chinS = 1 - ((that.dFromC * .15) / 100);
    if (chinS > 1) {chinS = 1 - (chinS - 1); }
    const faceX = mouthX * .3;
    const faceY = mouthY * .4;
    const faceSkew = Math.cos(mouthAngle) * 5;
    const eyebrowSkew = Math.cos(mouthAngle) * 25;
    const outerEarX = Math.cos(mouthAngle) * 4;
    const outerEarY = Math.cos(mouthAngle) * 5;
    const hairX = Math.cos(mouthAngle) * 6;
    const hairS = 1.2;
    TweenMax.to(that.eyeL, 1, {x: -eyeLX , y: -eyeLY, ease: Expo.easeOut});
    TweenMax.to(that.eyeR, 1, {x: -eyeRX , y: -eyeRY, ease: Expo.easeOut});
    TweenMax.to(that.nose, 1, {x: -noseX, y: -noseY, rotation: mouthR, transformOrigin: 'center center', ease: Expo.easeOut});
    TweenMax.to(that.mouth, 1, {x: -mouthX , y: -mouthY, rotation: mouthR, transformOrigin: 'center center', ease: Expo.easeOut});
    TweenMax.to(that.chin, 1, {x: -chinX, y: -chinY, scaleY: chinS, ease: Expo.easeOut});
    TweenMax.to(that.face, 1, {x: -faceX, y: -faceY, skewX: -faceSkew, transformOrigin: 'center top', ease: Expo.easeOut});
    TweenMax.to(that.eyebrow, 1, {x: -faceX, y: -faceY, skewX: -eyebrowSkew, transformOrigin: 'center top', ease: Expo.easeOut});
    TweenMax.to(that.outerEarL, 1, {x: outerEarX, y: -outerEarY, ease: Expo.easeOut});
    TweenMax.to(that.outerEarR, 1, {x: outerEarX, y: outerEarY, ease: Expo.easeOut});
    TweenMax.to(that.earHairL, 1, {x: -outerEarX, y: -outerEarY, ease: Expo.easeOut});
    TweenMax.to(that.earHairR, 1, {x: -outerEarX, y: outerEarY, ease: Expo.easeOut});
    TweenMax.to(that.hair, 1, {x: hairX, scaleY: hairS, transformOrigin: 'center bottom', ease: Expo.easeOut});
    document.body.removeChild(div);
}

 onEmailBlur(e, that) {
  if (e.target.value === '') {
    e.target.parentElement.classList.remove('focusWithText');
 }
  this.resetFace();
}

 onPasswordFocus(e, that) {
  that.coverEyes();
}

 onPasswordBlur(e, that) {
  that.uncoverEyes();
}

 coverEyes() {
  TweenMax.to(this.armL, .45, {x: -93, y: 2, rotation: 0, ease: Power1.easeOut});
  TweenMax.to(this.armR, .45, {x: -93, y: 2, rotation: 0, ease: Power1.easeOut, delay: .1});
}

 uncoverEyes() {
  TweenMax.to(this.armL, 1.35, {y: 220, ease: Power1.easeOut});
  TweenMax.to(this.armL, 1.35, {rotation: 105, ease: Power1.easeOut, delay: .1});
  TweenMax.to(this.armR, 1.35, {y: 220, ease: Power1.easeOut});
  TweenMax.to(this.armR, 1.35, {rotation: -105, ease: Power1.easeOut, delay: .1});
}

resetFace() {
  TweenMax.to([this.eyeL, this.eyeR], 1, {x: 0, y: 0, ease: Expo.easeOut});
  TweenMax.to(this.nose, 1, {x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut});
  TweenMax.to(this.mouth, 1, {x: 0, y: 0, rotation: 0, ease: Expo.easeOut});
  TweenMax.to(this.chin, 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
  TweenMax.to([this.face, this.eyebrow], 1, {x: 0, y: 0, skewX: 0, ease: Expo.easeOut});
  TweenMax.to([this.outerEarL, this.outerEarR, this.earHairL, this.earHairR, this.hair], 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
}

 getAngle(x1, y1, x2, y2) {
  const angle = Math.atan2(y1 - y2, x1 - x2);
  return angle;
}

 getPosition(el) {
  let xPos = 0;
  let yPos = 0;

  while (el) {
    if (el.tagName === 'BODY') {
    // deal with browser quirks with body/window/document and page scroll
    const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
    const yScroll = el.scrollTop || document.documentElement.scrollTop;

    xPos += (el.offsetLeft - xScroll + el.clientLeft);
    yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
    // for all other non-BODY elements
    xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

  // LOGIN

  ingresar(forma: NgForm) {
    this.carga = true;
    const usuario = new Usuario(
      forma.value.correo,
      forma.value.clave
    );

    this._usuarioService.login(usuario, null, forma.value.recuerdame).subscribe(
      (resp: any) => {
        // Token
        if (resp.ok !== 'false') {
          this.token = resp.token;
          localStorage.setItem( 'token', this.token);
          // Objeto usuario identificado
          this._usuarioService
            .login(usuario, true, forma.value.recuerdame)
            .subscribe(
              resp2 => {
                this.carga = false;
                this.identity = resp2;
                localStorage.setItem('identity', JSON.stringify(this.identity));
                // redireccion
                const identity2 = JSON.parse(localStorage.getItem('identity'));
                // console.log(identity2);
                Swal({
                  type: 'success',
                  title: `Bienvenido ${identity2.usuario.nombre} ${identity2.usuario.apellido} `,
                  showConfirmButton: false,
                  timer: 3000
                });
              this.router.navigate([`admin/${identity2.usuario.id_rol.menu[0].url}`]);
              },
              error => {
                console.log(<any>error);
              }
            );
        }
      },
      error => {
        const mensaje = error.error.mensaje;
        Swal({
          type: 'error',
          title: mensaje,
          showConfirmButton: false,
          timer: 3000
        });
        this.carga = false;
        console.log(this.carga);
      }
    );
    // this.router.navigate(['/admin/dashboard']);
  }

  ngOnInit() {
    this.mySVG = document.querySelector('.svgContainer');
    this.armL = document.querySelector('.armL');
    this.armR = document.querySelector('.armR');
    this.eyeL = document.querySelector('.eyeL');
    this.eyeR = document.querySelector('.eyeR');
    this.nose = document.querySelector('.nose');
    this.mouth = document.querySelector('.mouth');
    this.mouthBG = document.querySelector('.mouthBG');
    this.mouthSmallBG = document.querySelector('.mouthSmallBG');
    this.mouthMediumBG = document.querySelector('.mouthMediumBG');
    this.mouthLargeBG = document.querySelector('.mouthLargeBG');
    this. mouthMaskPath = document.querySelector('#mouthMaskPath');
    this.mouthOutline = document.querySelector('.mouthOutline');
    this.tooth = document.querySelector('.tooth');
    this.tongue = document.querySelector('.tongue');
    this.chin = document.querySelector('.chin');
    this. face = document.querySelector('.face');
    this. eyebrow = document.querySelector('.eyebrow');
    this. outerEarL = document.querySelector('.earL .outerEar');
    this.outerEarR = document.querySelector('.earR .outerEar');
    this. earHairL = document.querySelector('.earL .earHair');
    this. earHairR = document.querySelector('.earR .earHair');
    this.hair = document.querySelector('.hair');
    if (this.email === null) {
    } else {
      this.email = document.querySelector('#email');
      this.password = document.querySelector('#password');
    }
    // init_plugins();
    this.correo = localStorage.getItem('correo') || '';
    if (this.correo.length > 1) {
      this.recuerdame = true;
    }
    const user = this._usuarioService.getIdentity();
    // desde aca
      if (this.email === null) {
      } else {
        console.log(this.email);
        console.log('ayuda');
        const that = this;
        this.email.addEventListener('focus', function(e) {
          e.target.parentElement.classList.add('focusWithText');
          that.getCoord(e, that);
        });
        this.email.addEventListener('blur', function(e) {
          that.onEmailBlur(e, that);
        });
        this.email.addEventListener('input', function(e) {
          that.onEmailInput(e, that);
        });
        this.password.addEventListener('focus', function(e) {
          that.onPasswordFocus(e, that);
        });
        this.password.addEventListener('blur', function(e) {
          that.onPasswordBlur(e, that);
        });
        TweenMax.set(this.armL, {x: -93, y: 220, rotation: 105, transformOrigin: 'top left'});
        TweenMax.set(this.armR, {x: -93, y: 220, rotation: -105, transformOrigin: 'top right'});
      }
  }


  saveEmail(evento) {
console.log(evento);
  }
  handleRefusalToSetEmail(evento) {
console.log(evento);
  }

}
