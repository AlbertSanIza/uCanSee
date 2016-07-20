//------------------------------------------------------------------------------
angular.module('starter.translate', ['pascalprecht.translate'])
//------------------------------------------------------------------------------
.config(function($translateProvider) {
  $translateProvider.translations('en', {
      '_REGISTER': 'REGISTER',
      '_REGISTER_2': 'Register',
      '_SIGN_IN': 'SIGN IN',
      '_SELECT_TEAM': 'Select your team',
      '_ENTER_PASSWORD': 'Enter your team password',
      '_SIGN_IN_NOW': 'SIGN IN NOW',
      '_PBS': 'Provided by uCanSee Staff',

    });
    $translateProvider.translations('es', {
      '_REGISTER': 'REGISTRO',
      '_REGISTER_2': 'Registro',
      '_SIGN_IN': 'INICIAR SESION',
      '_SELECT_TEAM': 'Selecciona a tu equipo',
      '_ENTER_PASSWORD': 'Ingresa la contraseña de tu equipo',
      '_SIGN_IN_NOW': 'INICIAR SESION YA',
      '_PBS': 'Proveida por uCanSee Staff',
    });
    $translateProvider.preferredLanguage('es');
})
//------------------------------------------------------------------------------
