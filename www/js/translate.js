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
      '_TRY_AGAIN': 'Please try again, or contact uCanSee support',
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
      '_TASK_TITLE_0': 'Sack Relay Run',
      '_TASK_DESCRIPTION_0': 'Team must complete, a Sack Relay Run, one lap per team member.',
      '_TASK_TITLE_1': 'Flour Basket',
      '_TASK_DESCRIPTION_1': 'Team will sit in a straight line, in the form of a caterpillar. Teams must pass backwards a drilled basket full of flour above their heads and if the basket is dropped activity starts again.',
      '_TASK_TITLE_2': 'Water Balloon Harvest',
      '_TASK_DESCRIPTION_2': 'Organizers will throw water balloons, teams will need to catch them with a basket. At least 10 successful balloon catch are necessary to complete the stage.',
      '_TASK_TITLE_3': 'Obstacle Run',
      '_TASK_DESCRIPTION_3': 'Teams will be divided in pairs and each pair will tie themselves by the feet. All pairs must complete the obstacle run.',
      '_TASK_TITLE_4': 'Balloon Popping',
      '_TASK_DESCRIPTION_4': 'Each team member must complete a lap and blow up a balloon with another team member by pressing their chest.',
      '_TASK_TITLE_5': 'Orange Kiss',
      '_TASK_DESCRIPTION_5': 'Team will form a line, team members must pass an orange using their necks. If the orange falls the team must begin at the start of the line.',
      '_TASK_TITLE_6': 'Clothes Line',
      '_TASK_DESCRIPTION_6': 'Team must use all of their usable clothes (if they want) to make a line of clothes in order to reach the other side of the field.',
      '_SWIPE_TG_STARTED': 'Swipe to get started!',
      '_INFORMATION': 'Information',
      '_SCAN_QR': 'Scan QR',
      '_COMPLETED': 'Completed',
      '_GO_TO_START': 'Run to start point to finish!',
      '_FIND_ME': 'Find me!',
      '_DTNC': 'Distance to next Challenge',
      '_UNITS': 'Units',
      '_PLEASE_COMPLETE': 'Please complete all Challenges!',
    });
    $translateProvider.translations('es', {
      '_REGISTER': 'REGISTRO',
      '_REGISTER_2': 'Registro',
      '_SIGN_IN': 'INICIAR SESION',
      '_SELECT_TEAM': 'Selecciona a tu equipo',
      '_ENTER_PASSWORD': 'Ingresa la contraseña de tu equipo',
      '_SIGN_IN_NOW': 'INICIAR SESION YA',
      '_PBS': 'Proveida por uCanSee Staff',
      '_TRY_AGAIN': 'Por favor intenta de nuevo o contacta a uCanSee para asistencia',
      '_REGISTER_INFO_1': 'Si deseas participar envia un correo con la siguiente información:',
      '_REGISTER_INFO_2': 'Nombre del Equipo',
      '_REGISTER_INFO_3': 'Lista de los integrantes con sus matriculas',
      '_REGISTER_INFO_4': 'El correo deberá ser enviado a albert.sanchez@cetys.mx',
      '_RULES': 'Reglas',
      '_RULES_INFO_1': 'El equipo debe ser de 6 integrantes. Todos deben ser estudiantes de CETYS universidad y deben seguir las instrucciones de los organizadores. Cualquier tipo de agresión fisica o verbal resultará en la descalificación de todo el equipo ',
      '_SPONSORS': 'Patrocinadores',
      '_SPONSORS_INFO_1': 'Por definirse...',
      '_HELP': 'AIUUDA',
      '_HELP_INFO_1': 'Para cualquier aclaración contactar a albert.sanchez@cetys.mx',
      '_CREDITS': 'Proveida por uCanSee Staff',
      '_CREDITS_INFO_1': 'Esta app fue creada por estudiantes de CETYS Universidad usando tecnologia de punta como Ionic, Proximi.io, Firebase y Cordova ',
      '_DASHBOARD': 'Tablero',
      '_TEAM': 'Equipo',
      '_TEAM_MEMBERS': 'Miembros del equipo',
      '_CHALLENGE': 'Desafío',
      '_LOCATION': 'Localización',
      '_TASK_TITLE_0': 'Carrera de relevos con sacos',
      '_TASK_DESCRIPTION_0': 'El equipo debe completar la carrera, una vuelta por cada miembro del equipo.',
      '_TASK_TITLE_1': 'Canasta de harina',
      '_TASK_DESCRIPTION_1': 'El equipo se sentará en el piso de manera que se forme una línea. Deberán parar hacia atrás una canasta perforada llena de harina sobre sus cabezas, si la canasta llega a caer, habrá que empezar de nuevo.',
      '_TASK_TITLE_2': 'Cosecha de globos de agua',
      '_TASK_DESCRIPTION_2': 'Los organizadores lanzarán globos de agua, los participantes deberán atraparlos ayudándose de una canasta. Al menos 10 globos sin reventar son necesarios para completar esta fase',
      '_TASK_TITLE_3': 'Carrera de obstáculos',
      '_TASK_DESCRIPTION_3': 'Carrera de obstáculos Los equipos serán divididos en pares, cada par se amarrará los pies y juntos deberán completar una carrera de obstáculos.',
      '_TASK_TITLE_4': 'Reventar de globos',
      '_TASK_DESCRIPTION_4': 'Cada miembro deberá completar una vuelta y reventar un globo presionándolo entre su pecho y el de algún otro miembro del equipo.',
      '_TASK_TITLE_5': 'Besos de naranja',
      '_TASK_DESCRIPTION_5': 'El equipo formara una línea, los miembros deberán pasar una naranja haciendo solamente uso de su cuello. Si la naranja llega a caer, habrá que empezar de nuevo.',
      '_TASK_TITLE_6': 'Cadena de ropa',
      '_TASK_DESCRIPTION_6': 'El equipo deberá hacer uso de la ropa con la que cuentan para crear una cadena lo más larga posible e intentar llegar de un extremo a otro del campo.',
      '_SWIPE_TG_STARTED': '¡Desliza para comenzar!',
      '_INFORMATION': 'Información',
      '_SCAN_QR': 'Escanear código',
      '_COMPLETED': 'Completado',
      '_GO_TO_START': '¡Corre al punto de inicio para terminar!',
      '_FIND_ME': '¡Encuentrame!',
      '_DTNC': 'Distancia al próximo desafío',
      '_UNITS': 'Unidades',
      '_PLEASE_COMPLETE': 'Porfavor completa todos los retos!',
    });
    $translateProvider.preferredLanguage('en');
})
//------------------------------------------------------------------------------
