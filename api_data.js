define({ api: [
  {
    "type": "post",
    "url": "/bank/balance",
    "title": "balance",
    "name": "balance",
    "group": "bank",
    "version": "0.2.0",
    "description": "<p>Вызывается клиентом для обновления баланса пользователя в игровой валюте.</p>",
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 588930,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Юзер с одним только полем (не считая общих, типа почты) – количеством валюты</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tcoins: 78,\n\t\t\t\tmail: [ // почта юзера, если она обновилась\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          }
        ]
      }
    },
    "filename": "./controllers/BankController.php"
  },
  {
    "type": "post",
    "url": "/bank/balance",
    "title": "balance",
    "name": "balance",
    "group": "bank",
    "version": "0.1.6",
    "description": "<p>Вызывается клиентом для обновления баланса пользователя в игровой валюте.</p>",
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 588930,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Юзер с одним только полем (не считая общих, типа почты) – количеством валюты</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tcoins: 78,\n\t\t\t\tmail: [ // почта юзера, если она обновилась\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_BankController.php"
  },
  {
    "type": "post",
    "url": "/bank/vkcallback",
    "title": "vkcallback",
    "name": "vkcallback",
    "group": "bank",
    "version": "0.1.4",
    "description": "<p>Это коллбек для API платежей ВКонтакте, ссылка на него устанавливается в настройках приложения. Здесь все как по API вконтакте, и вызывается оно тоже только сервером ВК. Надо сохранять все id платежей, которые нам ВК присылает.</p>",
    "filename": "./controllers/BankController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.3.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя, не только установивших приложение.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "referrer",
            "optional": false,
            "description": "<p>это обозначение места откуда пользователь перешёл в приложение</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfriends: \"7678774,324353,4825225,8981008\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\",\n\treferrer: \"user_apps\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты, pic_url не передается, он генерируется клиентом по шаблону &quot;/images/bank/{id}.png&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>ID сессии, должен сохраняться на стороне клиента и затем передаваться в каждом запросе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\tzone_timeout: 1416229411, // если юзер не может пройти 15й уровень, здесь будет время, когда можно уже показывать следующую зону\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tsettings: \"{}\" // точно в таком же виде, как они были переданы в user/settings\n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89,\n\t\t\t\t\tlast_invited: 1416225351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55,\n\t\t\t\t\tlast_invited: 1416239351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32,\n\t\t\t\t\tlast_invited: 1416229354\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14,\n\t\t\t\t\tlast_invited: 1416229378\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\t// name: \"zone.name.1\",\n\t\t\t\t\t// description: \"zone.description.1\",\n\t\t\t\t\t// background: \"/images/maps/map_1.jpg\",\n\t\t\t\t\t// level_background: \"/images/levels/1100.jpg\",\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\tsid: 1,\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя, не только установивших приложение.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "referrer",
            "optional": false,
            "description": "<p>это обозначение места откуда пользователь перешёл в приложение</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfriends: \"7678774,324353,4825225,8981008\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\",\n\treferrer: \"user_apps\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты, pic_url не передается, он генерируется клиентом по шаблону &quot;/images/bank/{id}.png&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>ID сессии, должен сохраняться на стороне клиента и затем передаваться в каждом запросе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\tzone_timeout: 1416229411, // если юзер не может пройти 15й уровень, здесь будет время, когда можно уже показывать следующую зону\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89,\n\t\t\t\t\tlast_invited: 1416225351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55,\n\t\t\t\t\tlast_invited: 1416239351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32,\n\t\t\t\t\tlast_invited: 1416229354\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14,\n\t\t\t\t\tlast_invited: 1416229378\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\t// name: \"zone.name.1\",\n\t\t\t\t\t// description: \"zone.description.1\",\n\t\t\t\t\t// background: \"/images/maps/map_1.jpg\",\n\t\t\t\t\t// level_background: \"/images/levels/1100.jpg\",\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\tsid: 1,\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.2.6",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя, не только установивших приложение.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "referrer",
            "optional": false,
            "description": "<p>это обозначение места откуда пользователь перешёл в приложение</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfriends: \"7678774,324353,4825225,8981008\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\",\n\treferrer: \"user_apps\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты, pic_url не передается, он генерируется клиентом по шаблону &quot;/images/bank/{id}.png&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>ID сессии, должен сохраняться на стороне клиента и затем передаваться в каждом запросе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89,\n\t\t\t\t\tlast_invited: 1416225351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55,\n\t\t\t\t\tlast_invited: 1416239351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32,\n\t\t\t\t\tlast_invited: 1416229354\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14,\n\t\t\t\t\tlast_invited: 1416229378\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\t// name: \"zone.name.1\",\n\t\t\t\t\t// description: \"zone.description.1\",\n\t\t\t\t\t// background: \"/images/maps/map_1.jpg\",\n\t\t\t\t\t// level_background: \"/images/levels/1100.jpg\",\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\tsid: 1,\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.2.5",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя, не только установивших приложение.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfriends: \"7678774,324353,4825225,8981008\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты, pic_url не передается, он генерируется клиентом по шаблону &quot;/images/bank/{id}.png&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89,\n\t\t\t\t\tlast_invited: 1416225351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55,\n\t\t\t\t\tlast_invited: 1416239351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32,\n\t\t\t\t\tlast_invited: 1416229354\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14,\n\t\t\t\t\tlast_invited: 1416229378\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\t// name: \"zone.name.1\",\n\t\t\t\t\t// description: \"zone.description.1\",\n\t\t\t\t\t// background: \"/images/maps/map_1.jpg\",\n\t\t\t\t\t// level_background: \"/images/levels/1100.jpg\",\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.2.4",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя, не только установивших приложение.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfriends: \"7678774,324353,4825225,8981008\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты, pic_url не передается, он генерируется клиентом по шаблону &quot;/images/bank/{id}.png&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\t// name: \"zone.name.1\",\n\t\t\t\t\t// description: \"zone.description.1\",\n\t\t\t\t\t// background: \"/images/maps/map_1.jpg\",\n\t\t\t\t\t// level_background: \"/images/levels/1100.jpg\",\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.2.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты, pic_url не передается, он генерируется клиентом по шаблону &quot;/images/bank/{id}.png&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 45768,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 457322,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\t// name: \"zone.name.1\",\n\t\t\t\t\t// description: \"zone.description.1\",\n\t\t\t\t\t// background: \"/images/maps/map_1.jpg\",\n\t\t\t\t\t// level_background: \"/images/levels/1100.jpg\",\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.2.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1,\n\t\t\t\t\tpic_url: \"/images/bank_item_01.png\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2,\n\t\t\t\t\tpic_url: \"/images/bank_item_02.png\"\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 45768,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 457322,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tname: \"items.boosts.names.1001\", // идентификатор локали\n\t\t\t\t\tdescription: \"items.boosts.descriptions.1001\",\n\t\t\t\t\tpicture: \"/boosts/1001.png\",\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"zone.names.1\",\n\t\t\t\t\tdescription: \"zone.description.1\",\n\t\t\t\t\tbackground: \"/zone/1000.png\",\n\t\t\t\t\tlevel_background: \"/zone/1100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"shop.name.1\",\n\t\t\t\t\tdescription: \"shop.desc.1\",\n\t\t\t\t\tpicture: \"shop/1.png\",\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.2.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1,\n\t\t\t\t\tpic_url: \"/images/bank_item_01.png\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2,\n\t\t\t\t\tpic_url: \"/images/bank_item_02.png\"\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,1,5], // id, stars, score\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 45768,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t\t[1002,1,10],\t// id, stars, score\n\t\t\t\t\t\t[2001,2,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 457322,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,1,6],\n\t\t\t\t\t\t[1003,1,5],\n\t\t\t\t\t\t[2002,2,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tname: \"items.boosts.names.1001\", // идентификатор локали\n\t\t\t\t\tdescription: \"items.boosts.descriptions.1001\",\n\t\t\t\t\tpicture: \"/boosts/1001.png\",\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"zone.names.1\",\n\t\t\t\t\tdescription: \"zone.description.1\",\n\t\t\t\t\tbackground: \"/zone/1000.png\",\n\t\t\t\t\tlevel_background: \"/zone/1100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\", // закодированная в base64 строка\n\t\t\t\t\t\t\tlimits: {\n\t\t\t\t\t\t\t\ttime: 600,\n\t\t\t\t\t\t\t\tturns: 30\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"shop.name.1\",\n\t\t\t\t\tdescription: \"shop.desc.1\",\n\t\t\t\t\tpicture: \"shop/1.png\",\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: \"7678774,324353,4825225\",\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1,\n\t\t\t\t\tpic_url: \"/images/bank_item_01.png\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2,\n\t\t\t\t\tpic_url: \"/images/bank_item_02.png\"\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,5],\n\t\t\t\t\t[1002,10],\n\t\t\t\t\t[2001,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: [\n\t\t\t\t{\n\t\t\t\t\tuid: 45768,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,5],\n\t\t\t\t\t\t[1002,10],\n\t\t\t\t\t\t[2001,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 457322,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,6],\n\t\t\t\t\t\t[1003,5],\n\t\t\t\t\t\t[2002,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1001,\n\t\t\t\t\tname: \"items.boosts.names.1001\", // идентификатор локали\n\t\t\t\t\tdescription: \"items.boosts.descriptions.1001\",\n\t\t\t\t\tpicture: \"/boosts/1001.png\",\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"zone.names.1\",\n\t\t\t\t\tdescription: \"zone.description.1\",\n\t\t\t\t\tbackground: \"/zone/1000.png\",\n\t\t\t\t\tlevel_background: \"/zone/1100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\", // закодированная в base64 строка\n\t\t\t\t\t\t\tlimits: {\n\t\t\t\t\t\t\t\ttime: 600,\n\t\t\t\t\t\t\t\tturns: 30\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"shop.name.1\",\n\t\t\t\t\tdescription: \"shop.desc.1\",\n\t\t\t\t\tpicture: \"shop/1.png\",\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.1.7",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: [7678774,324353,4825225,...],\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1,\n\t\t\t\t\tpic_url: \"/images/bank_item_01.png\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2,\n\t\t\t\t\tpic_url: \"/images/bank_item_02.png\"\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\tboosts: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 12,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 13,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 15,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tbuffs: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3,\n\t\t\t\t\t\tcount: 5\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 4,\n\t\t\t\t\t\tcount: 7\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,5],\n\t\t\t\t\t[1002,10],\n\t\t\t\t\t[2001,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: []\n\t\t\t\t{\n\t\t\t\t\tuid: 45768,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,5],\n\t\t\t\t\t\t[1002,10],\n\t\t\t\t\t\t[2001,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 457322,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,6],\n\t\t\t\t\t\t[1003,5],\n\t\t\t\t\t\t[2002,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"items.boost1\", // идентификатор локали\n\t\t\t\t\tdescription: \"items.boosts.description1\",\n\t\t\t\t\tpicture: \"/boosts/1.png\",\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"zone.names.1\",\n\t\t\t\t\tdescription: \"zone.description.1\",\n\t\t\t\t\tbackground: \"/zone/1000.png\",\n\t\t\t\t\tlevel_background: \"/zone/1100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\turl: \"/levels/1001.json\" // информация об уровнях хранится в файлах на сервере, клиент должен отдельно за ними обратиться\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\t\turl: \"/levels/1002.json\",\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"shop.name.1\",\n\t\t\t\t\tdescription: \"shop.desc.1\",\n\t\t\t\t\tpicture: \"shop/1.png\",\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.1.5",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Страна, текст</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6709810,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlang: \"ru\",\n\tsex: 0,\n\tcountry: \"Russia\",\n\tcity: \"Москва\",\n\tapp_friends: [7678774,324353,4825225,...],\n\tfirst_name: \"Александр\",\n\tlast_name: \"Иванов\",\n\tbirthdate: \"11.17.1994\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "user",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tlocale: {\n\t\t\t\t\"ru_RU\": {\n\t\t\t\t\t\"welcome.greeting1\": \"Привет, друг!\",\n\t\t\t\t\t\"welcome.greeting2\": \"Привет, дружище!\"\n\t\t\t\t}\n\t\t\t},\n\t\t\tbank: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcoins: 5,\n\t\t\t\t\tvotes: 1,\n\t\t\t\t\tpic_url: \"/images/bank_item_01.png\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 2,\n\t\t\t\t\torder: 2,\n\t\t\t\t\tcoins: 15,\n\t\t\t\t\tvotes: 2,\n\t\t\t\t\tpic_url: \"/images/bank_item_02.png\"\n\t\t\t\t}\n\t\t\t],\n\t\t\tuser: {\n\t\t\t\tuid: 577098,\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\treg_date: 1416210047, // timestamp\n\t\t\t\tcoins: 70,\n\t\t\t\tlevel_progress: [\n\t\t\t\t\t[1001,5],\n\t\t\t\t\t[1002,10],\n\t\t\t\t\t[2001,305]\n\t\t\t\t],\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tbpc: 3, // bank purchase count, сколько раз покупал в банке\n\t\t\t\tvisits: 8, // сколько раз заходил в игру\n\t\t\t\ttype: 0, // 0 - игрок, 1 - админ, 2 - тестер\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tfriends: []\n\t\t\t\t{\n\t\t\t\t\tuid: 45768,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,5],\n\t\t\t\t\t\t[1002,10],\n\t\t\t\t\t\t[2001,305]\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 457322,\n\t\t\t\t\tlevel_progress: [\n\t\t\t\t\t\t[1001,6],\n\t\t\t\t\t\t[1003,5],\n\t\t\t\t\t\t[2002,34]\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"items.boost1\", // идентификатор локали\n\t\t\t\t\tdescription: \"items.boosts.description1\",\n\t\t\t\t\tpicture: \"/boosts/1.png\",\n\t\t\t\t\tvalue: 5, // для тех итемов, которые имеют численное значение\n\t\t\t\t\ttype: 1\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tconstants: {\n\t\t\t\tconstant1: 4,\n\t\t\t\tconstant2: \"some value\"\n\t\t\t},\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"zone.names.1\",\n\t\t\t\t\tdescription: \"zone.description.1\",\n\t\t\t\t\tbackground: \"/zone/1000.png\",\n\t\t\t\t\tlevel_background: \"/zone/1100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t\"levels/1001.json\", // информация об уровнях хранится в файлах на сервере, клиент должен отдельно за ними обратиться\n\t\t\t\t\t\t\"levels/1002.json\",\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\tshop: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tname: \"shop.name.1\",\n\t\t\t\t\tdescription: \"shop.desc.1\",\n\t\t\t\t\tpicture: \"shop/1.png\",\n\t\t\t\t\torder: 1,\n\t\t\t\t\tcond: [[1,5],[2,3]], // условия для показа. Массив пар тип-значение\n\t\t\t\t\tcoins: 5, // цена во внутриигровой валюте\n\t\t\t\t}\n\t\t\t],\n\t\t\ttargeting:{\n\t\t\t\t// TODO: определить этот тип\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "get",
    "url": "/init",
    "title": "default",
    "name": "init",
    "group": "init",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lang",
            "optional": false,
            "description": "<p>Двухбуквенный код языка</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sex",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>Пол, для сбора БД юзеров</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Город, текстом</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "app_friends",
            "optional": false,
            "description": "<p>Список ВК uid друзей пользователя, установивших приложение. Сервер не может его сам взять. Как вариант – список вообще всех друзей пользователя. Тогда на карте будут показываться больше друзей, т.к. будут показываться даже те, кто уже удалил игру.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "first_name",
            "optional": false,
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "last_name",
            "optional": false,
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "field": "birthdate",
            "optional": false,
            "description": "<p>Дата рождения ДД.ММ.ГГГГ</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Локаль",
            "field": "locale",
            "optional": false,
            "description": "<p>key-value пары. В коте также грамматические правила прописываются в отдельной флешке и тут возвращается ссылка на нее. Вполне можно засунуть грамматические правила внутрь основной флешки. Неплохо бы сделать это (менеджер локалей) в форме отдельной swc библиотеки.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Банковских Итемов",
            "field": "bank",
            "optional": false,
            "description": "<p>Список всех итемов для покупки за голоса ВК – т.е. кучек внутриигровой валюты</p>"
          },
          {
            "group": "Success 200",
            "type": "Юзер",
            "field": "viewer",
            "optional": false,
            "description": "<p>Информация по текущему юзеру. Как минимум, нужно знать сколько у него денег и на каком он уровне - блокирует</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends",
            "optional": false,
            "description": "<p>Список друзей пользователя для отображения их прогресса в игре. Отправляются сразу все друзья в игре.</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Итемов",
            "field": "items",
            "optional": false,
            "description": "<p>Все доступные в игре бусты, буффы и прочие вещи (бонусы к жизням, ходам). Здесь в отличие от магазина хранятся записи об игровых характеристиках итемов.</p>"
          },
          {
            "group": "Success 200",
            "type": "Объект с константами",
            "field": "constants",
            "optional": false,
            "description": "<p>Все, что настраивается через админку и нужно клиенту</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Присылаем только зону, на которой сейчас юзер +- 1 зона (т.е. 2 или 3 зоны изначально)</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Lot",
            "field": "shop",
            "optional": false,
            "description": "<p>Лоты из магазина</p>"
          },
          {
            "group": "Success 200",
            "type": "Массив Targeting",
            "field": "targeting",
            "optional": false,
            "description": "<p>Группы таргетинга и их критерии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tlocale: {\n\t},\n\tbank: {\n\t},\n\tviewer: {\n \n\t},\n\tfriends: {\n \n\t},\n\titems: {\n \n\t},\n\tconstants: {\n \n\t},\n\tzones: {\n \n\t},\n\tshop: {\n \n\t},\n\ttargeting:{\n \n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_InitController.php"
  },
  {
    "type": "post",
    "url": "/level/fail",
    "title": "fail",
    "name": "fail",
    "group": "level",
    "version": "0.2.7",
    "description": "<p>Игрок завалил уровень. Уведомить сервер об этом, чтобы он внес этот факт в лог.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Сколько очков было к моменту проигрыша, необязательный параметр, чисто для лога</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "add_turns",
            "optional": false,
            "description": "<p>Необязательный параметр. Сколько ходов докупил игрок</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "spent_turns",
            "optional": false,
            "description": "<p>Необязательный параметр. Сколько в итоге ходов сделал игрок</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "reason",
            "optional": false,
            "description": "<p>Причина проигрыша. Игрок может покинуть уровень сам. На некоторых уровнях он может проиграть по разным причинам. Полезно знать, почему проигрывают тот или иной уровень. Значение поля int enumeration 0 – вышел сам 1 – кончились ходы 2 – кончилось время Пока вроде все, надо знать механики (например – взорвалась бомба с таймером). Всё это описано в специальной карточке trello</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "boosts",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бусты игрок искользовал на уровне - для лога</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "buffs",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бафы игрок брал на уровнеь - для лога</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 3458973,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 1001,\n\tadd_turns: 0,\n\tspent_turns: 15,\n\tboosts: '[{\"id\":1001,\"count\":2}]',\n\tbuffs: '[{\"id\":1001,\"count\":2}]',\n\treason: 1,\n\tsid: 47\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и итемами (потратил бусты на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: 0, // режим бесконечных жизней, 0 если нет, timestamp времени окончания если есть\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tmail: [ // почта, только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/fail",
    "title": "fail",
    "name": "fail",
    "group": "level",
    "version": "0.2.6",
    "description": "<p>Игрок завалил уровень. Уведомить сервер об этом, чтобы он внес этот факт в лог.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Сколько очков было к моменту проигрыша, необязательный параметр, чисто для лога</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "add_turns",
            "optional": false,
            "description": "<p>Необязательный параметр, по-умолчанию 0. Получал ли доп. игровые ходы (0 - не покупал, 1 - покупал только ходы, 2 - купил ходы с бонусом, 3 - получил бесплатно за приглашение друга)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "reason",
            "optional": false,
            "description": "<p>Причина проигрыша. Игрок может покинуть уровень сам. На некоторых уровнях он может проиграть по разным причинам. Полезно знать, почему проигрывают тот или иной уровень. Значение поля int enumeration 0 – вышел сам 1 – кончились ходы 2 – кончилось время Пока вроде все, надо знать механики (например – взорвалась бомба с таймером). Всё это описано в специальной карточке trello</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 3458973,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 1001,\n\tadd_turns: 0,\n\treason: 1\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и итемами (потратил бусты на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tmail: [ // почта, только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/fail",
    "title": "fail",
    "name": "fail",
    "group": "level",
    "version": "0.1.6",
    "description": "<p>Игрок завалил уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "reason",
            "optional": false,
            "description": "<p>Причина проигрыша. Игрок может покинуть уровень сам. На некоторых уровнях он может проиграть по разным причинам. Полезно знать, почему проигрывают тот или иной уровень. Значение поля int enumeration 0 – вышел сам 1 – кончились ходы 2 – кончилось время Пока вроде все, надо знать механики (например – взорвалась бомба с таймером)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 3458973,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\treason: 1\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и бустами (потратил на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 12,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 13,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 15,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tmail: [ // почта, только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/fail",
    "title": "fail",
    "name": "fail",
    "group": "level",
    "version": "0.1.5",
    "description": "<p>Игрок завалил уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "reason",
            "optional": false,
            "description": "<p>Причина проигрыша. Игрок может покинуть уровень сам. На некоторых уровнях он может проиграть по разным причинам. Полезно знать, почему проигрывают тот или иной уровень. Значение поля int enumeration 0 – вышел сам 1 – кончились ходы 2 – кончилось время Пока вроде все, надо знать механики (например – взорвалась бомба с таймером)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 3458973,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\treason: 1\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и бустами (потратил на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 12,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 13,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 15,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tmail: [ // почта, только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/fail",
    "title": "fail",
    "name": "fail",
    "group": "level",
    "version": "0.1.4",
    "description": "<p>Игрок завалил уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "reason",
            "optional": false,
            "description": "<p>Причина проигрыша. Игрок может покинуть уровень сам. На некоторых уровнях он может проиграть по разным причинам. Полезно знать, почему проигрывают тот или иной уровень. Значение поля int enumeration 0 – вышел сам 1 – кончились ходы 2 – кончилось время Пока вроде все, надо знать механики (например – взорвалась бомба с таймером)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tlevel_id: 1001,\n\treason: 1\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и бустами (потратил на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "get",
    "url": "/level/fail",
    "title": "fail",
    "name": "fail",
    "group": "level",
    "version": "0.1.1",
    "description": "<p>Игрок завалил уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "reason",
            "optional": false,
            "description": "<p>Причина проигрыша. Игрок может покинуть уровень сам. На некоторых уровнях он может проиграть по разным причинам. Полезно знать, почему проигрывают тот или иной уровень. Значение поля int enumeration 0 – вышел сам 1 – кончились ходы 2 – кончилось время Пока вроде все, надо знать механики (например – взорвалась бомба с таймером)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и бустами (потратил на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tuser: {\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/start",
    "title": "start",
    "name": "start",
    "group": "level",
    "version": "0.2.7",
    "description": "<p>Игрок зашёл на уровень, т.е. начал его проходить. Сервер надо уведомить об этом, чтобы он обновил итемы игрока в базе, а также для ведения статистики.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "buffs",
            "optional": false,
            "description": "<p>Баффы, а также другие итемы, которые игрок взял на уровень – баффы будут сразу потрачены, остальные итемы (и бафы тоже) будут просто залогированы</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 676763081,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tsid: 4,\n\tlevel_id: 1001,\n\tbuffs: \"[[1,1],[2,1],[3,5]]\" // Игрок взял один бафф №1, один бафф №2, и пять баффов №3\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Здесь возвращается юзер с обновленными монетами, жизнями, почтой и итемами. Итемы приходят только те, которые изменились, если итема не стало - он все равно приходит, с count=0</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "attempt",
            "optional": false,
            "description": "<p>Который раз юзер заходит на этот уровень. На первый раз на некоторых уровнях показывается туториал. Также на будущее это значение может быть полезно для некоторых других условий (послабления для застрявших юзеров)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\titems: [ // здесь только те итемы, которые были переданы - остальные по идее не изменились\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: 0, // режим бесконечных жизней, 0 либо timestamp когда этот режим кончится\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tattempt: 1,\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/start",
    "title": "start",
    "name": "start",
    "group": "level",
    "version": "0.2.0",
    "description": "<p>Игрок зашёл на уровень, т.е. начал его проходить. Сервер надо уведомить об этом, в основном для ведения статистики.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "buffs",
            "optional": false,
            "description": "<p>Баффы, которые игрок взял на уровень – они будут потрачены</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 676763081,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tbuffs: \"[[1,1],[2,1],[3,5]]\" // Игрок взял один бафф №1, один бафф №2, и пять баффов №3\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Здесь возвращается юзер со всеми его итемами. TODO: возвращать только итемы, начинающиеся с 1000, только баффы</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "attempt",
            "optional": false,
            "description": "<p>Который раз юзер заходит на этот уровень. На первый раз на некоторых уровнях показывается туториал. Также на будущее это значение может быть полезно для некоторых других условий (послабления для застрявших юзеров)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tattempt: 1,\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/start",
    "title": "start",
    "name": "start",
    "group": "level",
    "version": "0.1.6",
    "description": "<p>Игрок зашёл на уровень, т.е. начал его проходить. Сервер надо уведомить об этом, в основном для ведения статистики.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "buffs",
            "optional": false,
            "description": "<p>Баффы, которые игрок взял на уровень – они будут потрачены</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 676763081,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tbuffs: \"[[1,1],[2,1],[3,5]]\" // Игрок взял один бафф №1, один бафф №2, и пять баффов №3\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Здесь возвращается юзер с полями, которые изменились от начала уровня. Пока это единственное поля – баффы. Также можно присылать жизни и валюту.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "attempt",
            "optional": false,
            "description": "<p>Который раз юзер заходит на этот уровень. На первый раз на некоторых уровнях показывается туториал. Также на будущее это значение может быть полезно для некоторых других условий (послабления для застрявших юзеров)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tbuffs: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3,\n\t\t\t\t\t\tcount: 5\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 4,\n\t\t\t\t\t\tcount: 7\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tattempt: 1,\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/start",
    "title": "start",
    "name": "start",
    "group": "level",
    "version": "0.1.4",
    "description": "<p>Игрок зашёл на уровень, т.е. начал его проходить. Сервер надо уведомить об этом, в основном для ведения статистики.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "buffs",
            "optional": false,
            "description": "<p>Баффы, которые игрок взял на уровень – они будут потрачены</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 676763081,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tbuffs: [[1,1],[2,1],[3,5]] // Игрок взял один бафф №1, один бафф №2, и пять баффов №3\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Здесь возвращается юзер с полями, которые изменились от начала уровня. Пока это единственное поля – баффы. Также можно присылать жизни и валюту.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "attempt",
            "optional": false,
            "description": "<p>Который раз юзер заходит на этот уровень. На первый раз на некоторых уровнях показывается туториал. Также на будущее это значение может быть полезно для некоторых других условий (послабления для застрявших юзеров)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tattempt: 1,\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/start",
    "title": "start",
    "name": "start",
    "group": "level",
    "version": "0.1.4",
    "description": "<p>Игрок зашёл на уровень, т.е. начал его проходить. Сервер надо уведомить об этом, в основном для ведения статистики.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "buffs",
            "optional": false,
            "description": "<p>Баффы, которые игрок взял на уровень – они будут потрачены</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tlevel_id: 1001,\n\tbuffs: [[1,1],[2,1],[3,5]] // Игрок взял один бафф №1, один бафф №2, и пять баффов №3\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Здесь возвращается юзер с полями, которые изменились от начала уровня. Пока это единственное поля – баффы. Также можно присылать жизни и валюту.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "attempt",
            "optional": false,
            "description": "<p>Который раз юзер заходит на этот уровень. На первый раз на некоторых уровнях показывается туториал. Также на будущее это значение может быть полезно для некоторых других условий (послабления для застрявших юзеров)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\tattempt: 1\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "get",
    "url": "/level/start",
    "title": "start",
    "name": "start",
    "group": "level",
    "version": "0.1.1",
    "description": "<p>Игрок зашёл на уровень, т.е. начал его проходить. Сервер надо уведомить об этом, в основном для ведения статистики.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "buffs",
            "optional": false,
            "description": "<p>Баффы, которые игрок взял на уровень – они будут потрачены</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Здесь возвращается юзер с полями, которые изменились от начала уровня. Пока это единственное поля – баффы. Также можно присылать жизни и валюту.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "field": "attempt",
            "optional": false,
            "description": "<p>Который раз юзер заходит на этот уровень. На первый раз на некоторых уровнях показывается туториал. Также на будущее это значение может быть полезно для некоторых других условий (послабления для застрявших юзеров)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tuser: {\n\t},\n\tattempt: {\n\t},\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.3.0",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом. В случае обновления рекорда сервер присылает весь level_progress. В случае прохождения 14го уровня в первый раз, сервер присылает zone_timeout - время, когда можно разблокировать следующую зону</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "add_turns",
            "optional": false,
            "description": "<p>Необязательный параметр. Сколько ходов докупил игрок</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "spent_turns",
            "optional": false,
            "description": "<p>Необязательный параметр. Сколько в итоге ходов сделал игрок</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "boosts",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бусты игрок искользовал на уровне</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "buffs",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бафы игрок брал на уровнеь</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 67829891,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 57,\n\tadd_turns: 1,\n\tspent_turns: 10,\n\tboosts: '[{\"id\":1001,\"count\":2}]',\n\tbuffs: '[{\"id\":1001,\"count\":2}]',\n\tsid: 47\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>is always true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\ttimestamp: 1416229351,\n\t\t\tuser: {\n\t\t\t\tlevel_progress: [\t// если рекорд был побит - присылаю обновленный level_progress\n\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305] // id, stars, score\n\t\t\t\t],\n\t\t\t\tzone_timeout: 1416232951, // когда открывать следующую зону - в данном примере на 3600 больше текущего времени\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.2.7",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом. В случае обновления рекорда сервер присылает весь level_progress</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "add_turns",
            "optional": false,
            "description": "<p>Необязательный параметр. Сколько ходов докупил игрок</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "spent_turns",
            "optional": false,
            "description": "<p>Необязательный параметр. Сколько в итоге ходов сделал игрок</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "boosts",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бусты игрок искользовал на уровне</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "buffs",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бафы игрок брал на уровнеь</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 67829891,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 57,\n\tadd_turns: 1,\n\tspent_turns: 10,\n\tboosts: '[{\"id\":1001,\"count\":2}]',\n\tbuffs: '[{\"id\":1001,\"count\":2}]',\n\tsid: 47\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>is always true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\ttimestamp: 1416229351,\n\t\t\tuser: {\n\t\t\t\tlevel_progress: [\t// если рекорд был побит - присылаю обновленный level_progress\n\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305] // id, stars, score\n\t\t\t\t],\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.2.6",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом. В случае обновления рекорда сервер присылает весь level_progress</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "add_turns",
            "optional": false,
            "description": "<p>Необязательный параметр. Докупал ли игрок доп. ходы в течение игры. 0 - не покупал, 1 - покупал только ходы, 2 - купил ходы с бонусом, 3 - получил бесплатно за приглашение друга</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "boosts",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бусты игрок искользовал на уровне</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "buffs",
            "optional": false,
            "description": "<p>Необязательный параметр. Какие бафы игрок брал на уровнеь</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 67829891,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 57,\n\tadd_turns: 1,\n\tboosts: \"[{\"id\":1001,\"count\":2}]\",\n\tbuffs: \"[{\"id\":1001,\"count\":2}]\",\n\tsid: 47\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>is always true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\ttimestamp: 1416229351,\n\t\t\tuser: {\n\t\t\t\tlevel_progress: [\t// если рекорд был побит - присылаю обновленный level_progress\n\t\t\t\t\t[1001,1,5],\n\t\t\t\t\t[1002,2,10],\n\t\t\t\t\t[2001,3,305] // id, stars, score\n\t\t\t\t],\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.2.0",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 67829891,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 57\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>is always true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\ttimestamp: 1416229351,\n\t\t\tuser: {\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.1.6",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 67829891,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 57\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>=true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\ttimestamp: 1416229351,\n\t\t\tuser: {\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.1.5",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 67829891,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\tscore: 57\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>=true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\ttimestamp: 1416229351,\n\t\t\tuser: {\n\t\t\t\tmail: [ // почта только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.1.4",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tlevel_id: 1001,\n\tscore: 57\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>=true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "get",
    "url": "/level/success",
    "title": "success",
    "name": "success",
    "group": "level",
    "version": "0.1.1",
    "description": "<p>Игрок выиграл уровень. Уведомить сервер об этом.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "score",
            "optional": false,
            "description": "<p>Набранное кол-во очков</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": "<p>=true. Ответ обрабатывать надо, т.к. тут сервер может прислать ошибку о том, что юзер не мог пройти этот уровень (подделал запрос)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tsuccess: true\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/use",
    "title": "use",
    "name": "use",
    "group": "level",
    "version": "0.2.7",
    "description": "<p>Юзер использовал итем</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID использованного буста</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6783642,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tsid: 47,\n\tlevel_id: 1001,\n\titem_id: 1004\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и итемами (потратил бусты на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tmail: [ // только если юзер получил новую почту\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/use",
    "title": "use",
    "name": "use",
    "group": "level",
    "version": "0.2.6",
    "description": "<p>Юзер использовал итем</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID использованного буста</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "sid",
            "optional": false,
            "description": "<p>Номер сессии</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6783642,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\titem_id: 1004\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и итемами (потратил бусты на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tmail: [ // только если юзер получил новую почту\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/use",
    "title": "use",
    "name": "use",
    "group": "level",
    "version": "0.1.6",
    "description": "<p>Юзер использовал итем</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID использованного буста</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6783642,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\titem_id: 4\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и бустами (потратил на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tmail: [ // только если юзер получил новую почту\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/use",
    "title": "use",
    "name": "use",
    "group": "level",
    "version": "0.1.6",
    "description": "<p>Юзер использовал итем</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Номер уровня</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID использованного буста</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6783642,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tlevel_id: 1001,\n\titem_id: 4\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Новый юзер, с изменившимися жизнями и бустами (потратил на уровне)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 12,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 13,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 15,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tmail: [ // только если юзер получил новую почту\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_LevelController.php"
  },
  {
    "type": "post",
    "url": "/mail/check",
    "title": "check",
    "name": "check",
    "group": "mail",
    "version": "0.2.0",
    "description": "<p>Периодический запрос 1 раз в минуту с целью проверки входящей почты</p>",
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Notification",
            "field": "mail",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          }
        ]
      }
    },
    "filename": "./controllers/MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/check",
    "title": "check",
    "name": "check",
    "group": "mail",
    "version": "0.1.5",
    "description": "<p>Периодический запрос 1 раз в минуту с целью проверки входящей почты</p>",
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Notification",
            "field": "mail",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/check",
    "title": "check",
    "name": "check",
    "group": "mail",
    "version": "0.1.4",
    "description": "<p>Периодический запрос 1 раз в минуту с целью проверки входящей почты</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Notification",
            "field": "mail",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tmail: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t}\n\t\t\t] \n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "get",
    "url": "/mail/check",
    "title": "check",
    "name": "check",
    "group": "mail",
    "version": "0.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Notification",
            "field": "mail",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tmail: {\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/read",
    "title": "read",
    "name": "read",
    "group": "mail",
    "version": "0.3.0",
    "description": "<p>Юзер увидел почту. Теперь он в курсе что она есть и надо уменьшить счетчик, и пометить письмо как &quot;прочитанное&quot;, чтобы не высылать его снова и снова.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "notifications",
            "optional": false,
            "description": "<p>ID сообщений, которые игрок увидел. Разделены запятыми. Если список пуст – помечаем все непрочитанные сообщения как прочитанные.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 672943,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tnotifications: \"1,2,3\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "field": "success",
            "optional": false,
            "description": "<p>должен быть всегда true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\tuser: { // только в случае прихода новой почты\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/receive",
    "title": "receive",
    "name": "receive",
    "group": "mail",
    "version": "0.2.0",
    "description": "<p>При просмотре почты юзер должен вручную принимать сообщения. Этот метод позволяет принять одно или все сообщения (как у нас интерфейс построен) и (если юзер выбрал галочку) отправить ответы.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "notifications",
            "optional": false,
            "description": "<p>ID сообщений, которые принимаем. Разделены запятыми. Если список пуст – принимаем все сообщения, которые накопились у пользователя.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "reply",
            "optional": false,
            "description": "<p>true/false, отправлять ли жизнь в ответ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 672943,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tnotifications: \"1,2,3\",\n\treply: true\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Присылается обновленный объект юзер, у которого из полей указаны только изменившиеся категории (итемы/жизни/валюта и т.п.), но они указаны полностью, заполнены актуальными на сервере значениями. В данном случае, если юзеру прислали 1 жизнь, он вызвал на это сообщение receive (принимает его), то в ответ придет user, у которого заполнено поле жизнь новым значением. Если принял итем какой-то, то придут все итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: 0, // режим бесконечных жизней, 0 если нет бесконечного режима, timestamp если есть (до какой секунды бесконечный режим)\n\t\t\t\t\tnext_life_time: 1416211047 // когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          },
          {
            "group": "Error 4xx",
            "field": "NoSuchMail",
            "optional": false,
            "description": "<p>id сообщений, которые были переданы во входных параметрах, не были найдены в таблице mail</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/receive",
    "title": "receive",
    "name": "receive",
    "group": "mail",
    "version": "0.1.5",
    "description": "<p>При просмотре почты юзер должен вручную принимать сообщения. Этот метод позволяет принять одно или все сообщения (как у нас интерфейс построен) и (если юзер выбрал галочку) отправить ответы.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "notifications",
            "optional": false,
            "description": "<p>ID сообщений, которые принимаем. Разделены запятыми. Если список пуст – принимаем все сообщения, которые накопились у пользователя.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "reply",
            "optional": false,
            "description": "<p>true/false, отправлять ли жизнь в ответ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 672943,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tnotifications: \"1,2,3\",\n\treply: true\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Присылается обновленный объект юзер, у которого из полей указаны только изменившиеся категории (итемы/жизни/валюта и т.п.), но они указаны полностью, заполнены актуальными на сервере значениями. В данном случае, если юзеру прислали 1 жизнь, он вызвал на это сообщение receive (принимает его), то в ответ придет user, у которого заполнено поле жизнь новым значением. Если принял итем какой-то, то придут все итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/receive",
    "title": "receive",
    "name": "receive",
    "group": "mail",
    "version": "0.1.4",
    "description": "<p>При просмотре почты юзер должен вручную принимать сообщения. Этот метод позволяет принять одно или все сообщения (как у нас интерфейс построен) и (если юзер выбрал галочку) отправить ответы.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "notifications",
            "optional": false,
            "description": "<p>ID сообщений, которые принимаем. Разделены запятыми. Если список пуст – принимаем все сообщения, которые накопились у пользователя.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "reply",
            "optional": false,
            "description": "<p>true/false, отправлять ли жизнь в ответ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tnotifications: \"1,2,3\",\n\treply: true\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Присылается обновленный объект юзер, у которого из полей указаны только изменившиеся категории (итемы/жизни/валюта и т.п.), но они указаны полностью, заполнены актуальными на сервере значениями. В данном случае, если юзеру прислали 1 жизнь, он вызвал на это сообщение receive (принимает его), то в ответ придет user, у которого заполнено поле жизнь новым значением. Если принял итем какой-то, то придут все итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "get",
    "url": "/mail/receive",
    "title": "receive",
    "name": "receive",
    "group": "mail",
    "version": "0.1.1",
    "description": "<p>При просмотре почты юзер должен вручную принимать сообщения. Этот метод позволяет принять одно или все сообщения (как у нас интерфейс построен) и (если юзер выбрал галочку) отправить ответы.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "notifications",
            "optional": false,
            "description": "<p>ID сообщений, которые принимаем. Разделены запятыми. Если список пуст – принимаем все сообщения, которые накопились у пользователя.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "reply",
            "optional": false,
            "description": "<p>true/false, отправлять ли жизнь в ответ</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "viewer",
            "optional": false,
            "description": "<p>Присылается обновленный объект юзер, у которого из полей указаны только изменившиеся категории (итемы/жизни/валюта и т.п.), но они указаны полностью, заполнены актуальными на сервере значениями. В данном случае, если юзеру прислали 1 жизнь, он вызвал на это сообщение receive (принимает его), то в ответ придет user, у которого заполнено поле жизнь новым значением. Если принял итем какой-то, то придут все итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tviewer: {\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/send",
    "title": "send",
    "name": "send",
    "group": "mail",
    "version": "0.2.6",
    "description": "<p>Запрос для отправления другому юзеру чего-нибудь (дропа), который тот может через свою почту принять</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "to_user",
            "optional": false,
            "description": "<p>id юзера-получателя</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "code",
            "optional": false,
            "description": "<p>id типового сообщения. Например, какой-то код может указывать, что данное письмо - запрос на жизнь.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "field": "text",
            "optional": false,
            "description": "<p>Текст, который будет в письме</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "field": "drop_json",
            "optional": false,
            "description": "<p>Необязательный параметр. Строка, в которой - JSON, в котором массив итемов, которые игрок передаёт своему другу в письме. Эти итемы у него сразу же списываются.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 672943,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tto_user: 768745,\n\tcode: 5,\n\ttext: \"Вот тебе один бафф номер три, два буста номер пять и четыре жизни\",\n\tdrop_json: [\n\t\t{\n\t\t\tid: 1003,\n\t\t\tcount: 1\n\t\t},\n\t\t{\n\t\t\tid: 2005,\n\t\t\tcount: 2\n\t\t},\n\t\t{\n\t\t\tid: 3001,\n\t\t\tcount: 4\n\t\t}\n\t]\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "field": "success",
            "optional": false,
            "description": "<p>должен быть всегда true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\tuser: { // только в случае прихода новой почты\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "IncorrectFormat",
            "optional": false,
            "description": "<p>Неверный формат параметра drop_json: проверьте, есть ли кавычки вокруг &quot;id&quot; и &quot;count&quot;</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          },
          {
            "group": "Error 4xx",
            "field": "NotEnoughItems",
            "optional": false,
            "description": "<p>у юзера недостаточно тех итемов, которые он пытается переслать другу</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserDoesNotHaveThisItem",
            "optional": false,
            "description": "<p>юзер просто тупо не имеет того итема, который он пытается переслать другу</p>"
          },
          {
            "group": "Error 4xx",
            "field": "SendFailed",
            "optional": false,
            "description": "<p>Дроп отослать не удалось, причина неизвестна</p>"
          }
        ]
      }
    },
    "filename": "./controllers/MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/send",
    "title": "send",
    "name": "send",
    "group": "mail",
    "version": "0.2.0",
    "description": "<p>Запрос для отправления другому юзеру чего-нибудь (дропа), который тот может через свою почту принять</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "to_user",
            "optional": false,
            "description": "<p>id юзера-получателя</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "code",
            "optional": false,
            "description": "<p>id Типового сообщения. Такие сообщения настраиваются через админку. Пример из library кота – там в разделе virality. Пока у нас это не проработано но я вот так думаю оно должно быть.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "field": "text",
            "optional": false,
            "description": "<p>Текст, который будет в письме</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "field": "drop_json",
            "optional": false,
            "description": "<p>Строка, в которой - JSON, в котором массив итемов, которые игрок передаёт своему другу в письме. Эти итемы у него сразу же списываются.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 672943,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tto_user: 768745,\n\tcode: 5,\n\ttext: \"Вот тебе один бафф номер три, два буста номер пять и четыре жизни\",\n\tdrop_json: [\n\t\t{\n\t\t\tid: 1003,\n\t\t\tcount: 1\n\t\t},\n\t\t{\n\t\t\tid: 2005,\n\t\t\tcount: 2\n\t\t},\n\t\t{\n\t\t\tid: 3001,\n\t\t\tcount: 4\n\t\t}\n\t]\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "field": "success",
            "optional": false,
            "description": "<p>должен быть всегда true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\tuser: { // только в случае прихода новой почты\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "IncorrectFormat",
            "optional": false,
            "description": "<p>Неверный формат параметра drop_json: проверьте, есть ли кавычки вокруг &quot;id&quot; и &quot;count&quot;</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          },
          {
            "group": "Error 4xx",
            "field": "NotEnoughItems",
            "optional": false,
            "description": "<p>у юзера недостаточно тех итемов, которые он пытается переслать другу</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserDoesNotHaveThisItem",
            "optional": false,
            "description": "<p>юзер просто тупо не имеет того итема, который он пытается переслать другу</p>"
          },
          {
            "group": "Error 4xx",
            "field": "SendFailed",
            "optional": false,
            "description": "<p>Дроп отослать не удалось, причина неизвестна</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/send",
    "title": "send",
    "name": "send",
    "group": "mail",
    "version": "0.1.5",
    "description": "<p>Запрос для отправления другому юзеру чего-нибудь (дропа), который тот может через свою почту принять</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "to_user",
            "optional": false,
            "description": "<p>id юзера-получателя</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "code",
            "optional": false,
            "description": "<p>id Типового сообщения. Такие сообщения настраиваются через админку. Пример из library кота – там в разделе virality. Пока у нас это не проработано но я вот так думаю оно должно быть.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 672943,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tto_user: 768745,\n\tcode: 5\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "field": "success",
            "optional": false,
            "description": "<p>должен быть всегда true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true,\n\t\t\tuser: { // только в случае прихода новой почты\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "SendFailed",
            "optional": false,
            "description": "<p>Дроп отослать не удалось, причина неизвестна</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/send",
    "title": "send",
    "name": "send",
    "group": "mail",
    "version": "0.1.4",
    "description": "<p>Запрос для отправления другому юзеру чего-нибудь (дропа), который тот может через свою почту принять</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "to_user",
            "optional": false,
            "description": "<p>id юзера-получателя</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "code",
            "optional": false,
            "description": "<p>id Типового сообщения. Такие сообщения настраиваются через админку. Пример из library кота – там в разделе virality. Пока у нас это не проработано но я вот так думаю оно должно быть.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tto_user: 768745,\n\tcode: 5\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "field": "success",
            "optional": false,
            "description": "<p>должен быть всегда true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tsuccess: true\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "SendFailed",
            "optional": false,
            "description": "<p>Дроп отослать не удалось, причина неизвестна</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "get",
    "url": "/mail/send",
    "title": "send",
    "name": "send",
    "group": "mail",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "to_user",
            "optional": false,
            "description": "<p>id юзера-получателя</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "code",
            "optional": false,
            "description": "<p>id Типового сообщения. Такие сообщения настраиваются через админку. Пример из library кота – там в разделе virality. Пока у нас это не проработано но я вот так думаю оно должно быть.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "field": "success",
            "optional": false,
            "description": "<p>должен быть всегда true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tmail: {\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "SendFailed",
            "optional": false,
            "description": "<p>Дроп отослать не удалось, причина неизвестна</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_MailController.php"
  },
  {
    "type": "post",
    "url": "/mail/receive",
    "title": "receive",
    "name": "use",
    "group": "mail",
    "version": "0.3.0",
    "description": "<p>При просмотре почты юзер должен вручную принимать (читай использовать) сообщения. Этот метод позволяет принять одно или все сообщения (как у нас интерфейс построен) и (если юзер выбрал галочку) отправить ответы.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "notifications",
            "optional": false,
            "description": "<p>ID сообщений, которые принимаем. Разделены запятыми. Если список пуст – принимаем все сообщения, которые накопились у пользователя.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "reply",
            "optional": false,
            "description": "<p>true/false, отправлять ли жизнь в ответ</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 672943,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tnotifications: \"1,2,3\",\n\treply: true\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Присылается обновленный объект юзер, у которого из полей указаны только изменившиеся категории (итемы/жизни/валюта и т.п.), но они указаны полностью, заполнены актуальными на сервере значениями. В данном случае, если юзеру прислали 1 жизнь, он вызвал на это сообщение receive (принимает его), то в ответ придет user, у которого заполнено поле жизнь новым значением. Если принял итем какой-то, то придут все итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: 0, // режим бесконечных жизней, 0 если нет бесконечного режима, timestamp если есть (до какой секунды бесконечный режим)\n\t\t\t\t\tnext_life_time: 1416211047 // когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>Какой-то из входных параметров отсутствует</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          },
          {
            "group": "Error 4xx",
            "field": "NoSuchMail",
            "optional": false,
            "description": "<p>id сообщений, которые были переданы во входных параметрах, не были найдены в таблице mail</p>"
          }
        ]
      }
    },
    "filename": "./controllers/MailController.php"
  },
  {
    "type": "post",
    "url": "/shop/buy",
    "title": "buy",
    "name": "buy",
    "group": "shop",
    "version": "0.2.6",
    "description": "<p>Покупка итемов в магазине за игровую валюту.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID итема из магазнина</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "count",
            "optional": false,
            "description": "<p>кол-во (опционально)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Если покупка осуществляется на уровне, то id уровня для статистики</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "items",
            "optional": false,
            "description": "<p>список итемов в виде id:count,id:count - если задан, тогда item_id и count игнорируются</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\titem_id: 1005,\n\tcount: 3,\n\tlevel_id: 1001\n}\n",
        "type": "json"
      },
      {
        "title": "Пример запроса с параметром items:",
        "content": "Пример запроса с параметром items:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\titems: \"1005:3,1006:1\",\n\tlevel_id: 1001\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Обновились итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NotEnoughCoins",
            "optional": false,
            "description": "<ul><li>надостаточно монет у игрока. Клиент должен показать игроку банк, где он сможет докупить монеты.</li></ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа в случае нехватки монет у игрока:",
          "content": "Пример ответа в случае нехватки монет у игрока:\n{\n\terror: {\n\t\tcode: NotEnoughCoins, // константа\n\t\tmsg: \"Not enough coins.\"\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/ShopController.php"
  },
  {
    "type": "post",
    "url": "/shop/buy",
    "title": "buy",
    "name": "buy",
    "group": "shop",
    "version": "0.2.0",
    "description": "<p>Покупка итемов в магазине за игровую валюту.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID итема из магазнина</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Если покупка осуществляется на уровне, то id уровня для статистики</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\titem_id: 1005,\n\tlevel_id: 1001\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Обновились итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\tnext_life_time: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\titems: [ // массив итемов уже включает в себя баффы, бусты, жизни и другие разновидности итемов\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\tcount: 2\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 2003,\n\t\t\t\t\t\tcount: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\tcount: 1\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NotEnoughCoins",
            "optional": false,
            "description": "<ul><li>надостаточно монет у игрока. Клиент должен показать игроку банк, где он сможет докупить монеты.</li></ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа в случае нехватки монет у игрока:",
          "content": "Пример ответа в случае нехватки монет у игрока:\n{\n\terror: {\n\t\tcode: NotEnoughCoins, // константа\n\t\tmsg: \"Not enough coins.\"\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ShopController.php"
  },
  {
    "type": "post",
    "url": "/shop/buy",
    "title": "buy",
    "name": "buy",
    "group": "shop",
    "version": "0.1.5",
    "description": "<p>Покупка итемов в магазине за игровую валюту.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID итема из магазнина</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Если покупка осуществляется на уровне, то id уровня для статистики</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\titem_id: 5,\n\tlevel_id: 1001\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Обновились итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NotEnoughCoins",
            "optional": false,
            "description": "<ul><li>надостаточно монет у игрока. Клиент должен показать игроку банк, где он сможет докупить монеты.</li></ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа в случае нехватки монет у игрока:",
          "content": "Пример ответа в случае нехватки монет у игрока:\n{\n\terror: {\n\t\tcode: NotEnoughCoins, // константа\n\t\tmsg: \"Not enough coins.\"\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ShopController.php"
  },
  {
    "type": "post",
    "url": "/shop/buy",
    "title": "buy",
    "name": "buy",
    "group": "shop",
    "version": "0.1.4",
    "description": "<p>Покупка итемов в магазине за игровую валюту.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID итема из магазнина</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Если покупка осуществляется на уровне, то id уровня для статистики</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\titem_id: 5,\n\tlevel_id: 1001\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Обновились итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tmax: 8, // максимум жизней\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tbuffs: [\n\t\t\t\t\t[3,5],\n\t\t\t\t\t[4,7] // 5 бафов №3, и 7 бафов №4\n\t\t\t\t],\n\t\t\t\tcoins: 70,\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t}\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NotEnoughCoins",
            "optional": false,
            "description": "<ul><li>надостаточно монет у игрока. Клиент должен показать игроку банк, где он сможет докупить монеты.</li></ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа в случае нехватки монет у игрока:",
          "content": "Пример ответа в случае нехватки монет у игрока:\n{\n\terror: {\n\t\tcode: NotEnoughCoins, // константа\n\t\tmsg: \"Not enough coins.\"\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ShopController.php"
  },
  {
    "type": "get",
    "url": "/shop/buy",
    "title": "buy",
    "name": "buy",
    "group": "shop",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "field": "item_id",
            "optional": false,
            "description": "<p>ID итема из магазнина</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "level_id",
            "optional": false,
            "description": "<p>Если покупка осуществляется на уровне, то id уровня для статистики</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "viewer",
            "optional": false,
            "description": "<p>Обновились итемы игрока</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tviewer: {\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ShopController.php"
  },
  {
    "type": "post",
    "url": "/user/settings",
    "title": "",
    "name": "settings",
    "group": "user",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "settings",
            "optional": false,
            "description": "<p>Необязательный параметр. Если задан - перезаписывает поле settings в юзере. Формат не имеет значения.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: \"6709810\",\n\tauth_key: \"2c01c44ec206a65c99ffb0d3ee3bad63\",\n\tsettings: \"{\\\"sound\\\":true}\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Настройки",
            "field": "settings",
            "optional": false,
            "description": "<p>Содержимое поля settings в юзере, фактически как оно было передано</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tsettings: \"{\\\"sound\\\":true}\"\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>отсутствует параметр uid либо auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/UserController.php"
  },
  {
    "type": "post",
    "url": "/virality/invite",
    "title": "",
    "name": "invite",
    "group": "virality",
    "version": "0.3.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "invited_id",
            "optional": false,
            "description": "<p>uid друга, которому выслали приглашение</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: \"6709810\",\n\tauth_key: \"2c01c44ec206a65c99ffb0d3ee3bad63\",\n\tinvited_id: \"7678774\",\n\tfriends: \"7678774,324353,4825225,8981008\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends либо если friends был пуст - он берется из friends_list юзера в базе</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89,\n\t\t\t\t\tlast_invited: 1416225351,\n\t\t\t\t\tcount: 4 \t\t\t\t\t// сколько раз его уже приглашали (причем не важно кто конкретно)\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55,\n\t\t\t\t\tlast_invited: 1416239351,\n\t\t\t\t\tcount: 3\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32,\n\t\t\t\t\tlast_invited: 1416229354,\n\t\t\t\t\tcount: 3\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14,\n\t\t\t\t\tlast_invited: 1416229378,\n\t\t\t\t\tcount: 0\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>отсутствует параметр invited_id</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/ViralityController.php"
  },
  {
    "type": "post",
    "url": "/virality/invite",
    "title": "",
    "name": "invite",
    "group": "virality",
    "version": "0.2.5",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "invited_id",
            "optional": false,
            "description": "<p>uid друга, которому выслали приглашение</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: \"6709810\",\n\tauth_key: \"2c01c44ec206a65c99ffb0d3ee3bad63\",\n\tinvited_id: \"7678774\",\n\tfriends: \"7678774,324353,4825225,8981008\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89,\n\t\t\t\t\tlast_invited: 1416225351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55,\n\t\t\t\t\tlast_invited: 1416239351\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32,\n\t\t\t\t\tlast_invited: 1416229354\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14,\n\t\t\t\t\tlast_invited: 1416229378\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>отсутствует параметр invited_id</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_ViralityController.php"
  },
  {
    "type": "post",
    "url": "/virality/invite",
    "title": "",
    "name": "invite",
    "group": "virality",
    "version": "0.2.4",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "invited_id",
            "optional": false,
            "description": "<p>uid друга, которому выслали приглашение</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "friends",
            "optional": false,
            "description": "<p>Список ВК uid всех друзей пользователя.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: \"6709810\",\n\tauth_key: \"2c01c44ec206a65c99ffb0d3ee3bad63\",\n\tinvited_id: \"7678774\",\n\tfriends: \"7678774,324353,4825225,8981008\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Юзеров (ограниченный)",
            "field": "friends_virality",
            "optional": false,
            "description": "<p>Список всех друзей пользователя вместе с их привлекательностью в плане приглашения в игру. Отправляются только те друзья, которые были переданы в параметре friends</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Пример ответа:",
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tfriends_virality: [\n\t\t\t\t{\n\t\t\t\t\tuid: 7678774,\n\t\t\t\t\tvirality: 89\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 324353,\n\t\t\t\t\tvirality: 55\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 4825225,\n\t\t\t\t\tvirality: 32\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tuid: 8981008,\n\t\t\t\t\tvirality: 14\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "WrongAuthKey",
            "optional": false,
            "description": "<p>неверный auth_key</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InsufficientInputParameters",
            "optional": false,
            "description": "<p>отсутствует параметр invited_id</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>uid, который был передан, не был найден в таблице пользователей. Такого быть не должно, лучший выход - полать запрос init который создаст пустого юзера заново</p>"
          }
        ]
      }
    },
    "filename": "./controllers/_ViralityController.php"
  },
  {
    "type": "post",
    "url": "/vk/callback",
    "title": "callback",
    "name": "callback",
    "group": "vk",
    "version": "0.3.0",
    "description": "<p>Это коллбек для API платежей ВКонтакте, ссылка на него устанавливается в настройках приложения. Здесь все как по API вконтакте, и вызывается оно тоже только сервером ВК. Надо сохранять все id платежей, которые нам ВК присылает.</p>",
    "filename": "./controllers/VkController.php"
  },
  {
    "type": "post",
    "url": "/zone/check",
    "title": "check",
    "name": "check",
    "group": "zone",
    "version": "0.3.0",
    "description": "<p>Когда на клиенте истекает таймаут, он перед тем, как оживлять новые уровни, шлет запрос zone/check, без особых параметров, который возвращает текущее значение поля zone_timeout у юзера, а также текущее время в timestamp. В итоге клиент сравнивает и если zone_timeout &lt; timestamp тогда уровни можно оживлять.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Юзер, ограниченный",
            "field": "user",
            "optional": false,
            "description": "<p>Юзер с единственным полем zone_timeout, которое равно null если зона уже открыта</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tzone_timeout: 1416229411 // к примеру через минуту\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        },
        {
          "title": "{",
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tzone_timeout: null // следующая зона уже открыта\n\t\t\t\tlevel_progress: [...,[1015,0,0]] // прогресс теперь содержит пустую запись о прогрессе 15го уровня\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/ZoneController.php"
  },
  {
    "type": "post",
    "url": "/zone/get",
    "title": "get",
    "name": "get",
    "group": "zone",
    "version": "0.2.3",
    "description": "<p>Получает зону и все уровни на этой зоне. Клиент выполняет этот запрос, когда либо игрок на карте сам скроллит карту и хочет получить следующую зону, либо когда игрок проходит последний уровень зоны и это за него делает игра. Поля name, description, background, level_background не передаются</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "zone_ids",
            "optional": false,
            "description": "<p>id зон через запятую. Предлагаю сразу делать возможность выдать несколько зон.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tzone_ids: \"3,4\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Зоны с перечисленными в запросе номерами</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 3,\n\t\t\t\t\t// name: \"zone.name.3\", // это поле не передается - оно по этому шаблону генерируется\n\t\t\t\t\t// description: \"zone.description.3\",\n\t\t\t\t\t// background: \"/images/maps/map_3.jpg\",\n\t\t\t\t\t// level_background: \"/images/levels/1100.jpg\",\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tuser: { // только если есть новая почта\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/ZoneController.php"
  },
  {
    "type": "post",
    "url": "/zone/get",
    "title": "get",
    "name": "get",
    "group": "zone",
    "version": "0.2.2",
    "description": "<p>Получает зону и все уровни на этой зоне. Клиент выполняет этот запрос, когда либо игрок на карте сам скроллит карту и хочет получить следующую зону, либо когда игрок проходит последний уровень зоны и это за него делает игра.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "zone_ids",
            "optional": false,
            "description": "<p>id зон через запятую. Предлагаю сразу делать возможность выдать несколько зон.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tzone_ids: \"3,4\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Зоны с перечисленными в запросе номерами</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 3,\n\t\t\t\t\tname: \"zone.names.3\",\n\t\t\t\t\tdescription: \"zone.description.3\",\n\t\t\t\t\tbackground: \"/zone/3000.png\",\n\t\t\t\t\tlevel_background: \"/zone/3100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\tstars: \"100,200,300\",\n\t\t\t\t\t\t\titems: [ // список итемов, которые можно использовать на уровне\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\t\t\tmax: 5\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 2001,\n\t\t\t\t\t\t\t\t\tmax: 0 // значит можно использовать сколько хочешь, без ограничения\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\trules: { \t\t\t// условия для прохождения уровня, срабатывает одно из условий - уровень пройден TODO: а если мне нужна сложная схема ((A OR B) AND C) тогда что?\n\t\t\t\t\t\t\t\tscore: 100, // набрал 100 очков\n\t\t\t\t\t\t\t\tbeers: 5 // выпил пять банок пива пока проходил, надо отпустить беднягу\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tdata: \"WW91IGdvZGRhbW4gbW90aGVyZnVja2VyLCB3aHkgYXJlIHlvdSBkZWNvZGluZyBteSBiYXNlNjQgbWVzc2FnZT8/Pw==\" // закодированная в base64 строка\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tuser: { // только если есть новая почта\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ZoneController.php"
  },
  {
    "type": "post",
    "url": "/zone/get",
    "title": "get",
    "name": "get",
    "group": "zone",
    "version": "0.1.7",
    "description": "<p>Получает зону и все уровни на этой зоне. Клиент выполняет этот запрос, когда либо игрок на карте сам скроллит карту и хочет получить следующую зону, либо когда игрок проходит последний уровень зоны и это за него делает игра.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "zone_ids",
            "optional": false,
            "description": "<p>id зон через запятую. Предлагаю сразу делать возможность выдать несколько зон.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tzone_ids: \"3,4\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Зоны с перечисленными в запросе номерами</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 3,\n\t\t\t\t\tname: \"zone.names.3\",\n\t\t\t\t\tdescription: \"zone.description.3\",\n\t\t\t\t\tbackground: \"/zone/3000.png\",\n\t\t\t\t\tlevel_background: \"/zone/3100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1001,\n\t\t\t\t\t\t\turl: \"/levels/1001.json\" // информация об уровнях хранится в файлах на сервере, клиент должен отдельно за ними обратиться\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 1002,\n\t\t\t\t\t\t\turl: \"/levels/1002.json\"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tuser: { // только если есть новая почта\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ZoneController.php"
  },
  {
    "type": "post",
    "url": "/zone/get",
    "title": "get",
    "name": "get",
    "group": "zone",
    "version": "0.1.6",
    "description": "<p>Получает зону и все уровни на этой зоне. Клиент выполняет этот запрос, когда либо игрок на карте сам скроллит карту и хочет получить следующую зону, либо когда игрок проходит последний уровень зоны и это за него делает игра.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "zone_ids",
            "optional": false,
            "description": "<p>id зон через запятую. Предлагаю сразу делать возможность выдать несколько зон.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tzone_ids: \"3,4\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Зоны с перечисленными в запросе номерами</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 3,\n\t\t\t\t\tname: \"zone.names.3\",\n\t\t\t\t\tdescription: \"zone.description.3\",\n\t\t\t\t\tbackground: \"/zone/3000.png\",\n\t\t\t\t\tlevel_background: \"/zone/3100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t\"/levels/1001.json\",\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tuser: { // только если есть новая почта\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ZoneController.php"
  },
  {
    "type": "post",
    "url": "/zone/get",
    "title": "get",
    "name": "get",
    "group": "zone",
    "version": "0.1.5",
    "description": "<p>Получает зону и все уровни на этой зоне. Клиент выполняет этот запрос, когда либо игрок на карте сам скроллит карту и хочет получить следующую зону, либо когда игрок проходит последний уровень зоны и это за него делает игра.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "zone_ids",
            "optional": false,
            "description": "<p>id зон через запятую. Предлагаю сразу делать возможность выдать несколько зон.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tuid: 6772942,\n\tauth_key: 2c01c44ec206a65c99ffb0d3ee3bad63,\n\tzone_ids: \"3,4\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Зоны с перечисленными в запросе номерами</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 3,\n\t\t\t\t\tname: \"zone.names.3\",\n\t\t\t\t\tdescription: \"zone.description.3\",\n\t\t\t\t\tbackground: \"/zone/3000.png\",\n\t\t\t\t\tlevel_background: \"/zone/3100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\t\titems: [[1,3],[2,4],[3,0]], // итем №1 можно юзать 3 раза максимум, ..., №3 - бесконечное число раз\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\ttrigger: [[1,5],[3,8]], // пары критерий - значение, критерий №1 - 5 штук (к примеру набрать 5 очков) и т.д.; TODO: список критериев\n\t\t\t\t\t\t\tfield: {\n\t\t\t\t\t\t\t\tsizeX: 3,\n\t\t\t\t\t\t\t\tsizeY: 3,\n\t\t\t\t\t\t\t\tdata: byte_array // массив байт\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tstars: [5,15,50], // очки на одну, две, три звезды\n\t\t\t\t\t\t\tlimits: {\n\t\t\t\t\t\t\t\ttime: 300, // в секундах\n\t\t\t\t\t\t\t\tturns: 20 // кол-во ходов\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t],\n\t\t\tuser: { // только если есть новая почта\n\t\t\t\tmail: [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ZoneController.php"
  },
  {
    "type": "post",
    "url": "/zone/get",
    "title": "get",
    "name": "get",
    "group": "zone",
    "version": "0.1.4",
    "description": "<p>Получает зону и все уровни на этой зоне. Клиент выполняет этот запрос, когда либо игрок на карте сам скроллит карту и хочет получить следующую зону, либо когда игрок проходит последний уровень зоны и это за него делает игра.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "zone_ids",
            "optional": false,
            "description": "<p>id зон через запятую. Предлагаю сразу делать возможность выдать несколько зон.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tzone_ids: \"3,4\"\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Зоны с перечисленными в запросе номерами</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\t{",
          "content": "\t{\n\tresponse: {\n\t\tdata: {\n\t\t\tzones: [\n\t\t\t\t{\n\t\t\t\t\tid: 3,\n\t\t\t\t\tname: \"zone.names.3\",\n\t\t\t\t\tdescription: \"zone.description.3\",\n\t\t\t\t\tbackground: \"/zone/3000.png\",\n\t\t\t\t\tlevel_background: \"/zone/3100.png\", // короче это url\n\t\t\t\t\toverlay: {}, // TODO: об этом - позже\n\t\t\t\t\tlevels: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 3001,\n\t\t\t\t\t\t\titems: [[1,3],[2,4],[3,0]], // итем №1 можно юзать 3 раза максимум, ..., №3 - бесконечное число раз\n\t\t\t\t\t\t\tcolors: 5, // число цветов на уровне\n\t\t\t\t\t\t\ttrigger: [[1,5],[3,8]], // пары критерий - значение, критерий №1 - 5 штук (к примеру набрать 5 очков) и т.д.; TODO: список критериев\n\t\t\t\t\t\t\tfield: {\n\t\t\t\t\t\t\t\tsizeX: 3,\n\t\t\t\t\t\t\t\tsizeY: 3,\n\t\t\t\t\t\t\t\tdata: byte_array // массив байт\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tstars: [5,15,50], // очки на одну, две, три звезды\n\t\t\t\t\t\t\tlimits: {\n\t\t\t\t\t\t\t\ttime: 300, // в секундах\n\t\t\t\t\t\t\t\tturns: 20 // кол-во ходов\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t...\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t]\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ZoneController.php"
  },
  {
    "type": "get",
    "url": "/zone/get",
    "title": "get",
    "name": "get",
    "group": "zone",
    "version": "0.1.1",
    "description": "<p>Получает зону и все уровни на этой зоне. Клиент выполняет этот запрос, когда либо игрок на карте сам скроллит карту и хочет получить следующую зону, либо когда игрок проходит последний уровень зоны и это за него делает игра.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "zone_ids",
            "optional": false,
            "description": "<p>id зон через запятую. Предлагаю сразу делать возможность выдать несколько зон.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Массив Зон",
            "field": "zones",
            "optional": false,
            "description": "<p>Зоны с перечисленными в запросе номерами</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\tzones: [\n\t\t{\n\t\t\t\n\t\t},\n\t\t...\n\t]\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_ZoneController.php"
  }
] });