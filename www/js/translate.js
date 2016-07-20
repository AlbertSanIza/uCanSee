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
      '_REGISTER_INFO_1': 'If you are interested in participating, please send an e-mail with the following information:',
      '_REGISTER_INFO_2': 'Team Name',
      '_REGISTER_INFO_3': 'Members list with their "Student Number"',
      '_REGISTER_INFO_4': 'The e-mail should be sent to albert.sanchez@cetys.mx',
      '_RULES': 'Rules',
      '_RULES_INFO_1': 'Teams must be composed of six members. All participants must be students of CETYS University and must follow the organizers instructions. Physical or verbal violence will result in immediate disqualification of all the members of the team',
      '_SPONSORS': 'Sponsors',
      '_SPONSORS_INFO_1': 'To be defined...',
      '_HELP': 'Help',
      '_HELP_INFO_1': 'For any questions please contact albert.sanchez@cetys.mx',
      '_CREDITS': 'Provided by uCanSee Staff',
      '_CREDITS_INFO_1': 'This app was made by students of CETYS University using amazing technologies like Ionic, Proximi.io, Firebase and Cordova',
      '_DASHBOARD': 'Dashboard',
      '_TEAM': 'Team',
      '_TEAM_MEMBERS': 'Team Members',
      '_CHALLENGE': 'Challenge',
      '_LOCATION': 'Location',
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
    $translateProvider.preferredLanguage('en');
})
//------------------------------------------------------------------------------
