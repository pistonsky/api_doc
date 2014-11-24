define({ api: [
  {
    "type": "post",
    "url": "/bank/getBalance",
    "title": "getBalance",
    "name": "getBalance",
    "group": "bank",
    "version": "0.1.5",
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
    "filename": "./controllers/BankController.php"
  },
  {
    "type": "post",
    "url": "/bank/getBalance",
    "title": "getBalance",
    "name": "getBalance",
    "group": "bank",
    "version": "0.1.4",
    "description": "<p>Вызывается клиентом для обновления баланса пользователя в игровой валюте.</p>",
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
          "content": "Пример ответа:\n{\n\tresponse: {\n\t\tdata: {\n\t\t\tcoins: 78,\n\t\t\tmail: [\n\t\t\t\t{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/_BankController.php"
  },
  {
    "type": "post",
    "url": "/bank/vkCallback",
    "title": "vkCallback",
    "name": "vkCallback",
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
    "filename": "./controllers/InitController.php"
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
          "content": "{\n\tresponse: {\n\t\tdata: {\n\t\t\tuser: {\n\t\t\t\tlives: {\n\t\t\t\t\tnow: 3,\n\t\t\t\t\tunlim_mode: false, // режим бесконечных жизней\n\t\t\t\t\trc_timeout: 1416211047 // next life ReCreation timeout, когда восстановится следующая жизнь\n\t\t\t\t},\n\t\t\t\tboosts: [\n\t\t\t\t\t[12,2],\n\t\t\t\t\t[13,4],\n\t\t\t\t\t[15,1] // 2 буста №12, 4 буста №13 и 1 буст №15\n\t\t\t\t],\n\t\t\t\tmail: [ // почта, только если пришло новое письмо\n\t\t\t\t\t{\n\t\t\t\t\t\tid: 1,\n\t\t\t\t\t\tsender: 87897, // id отправителя, 0 если от администрации, аватар берётся исходя из этого\n\t\t\t\t\t\ttext: \"Прива! Вот те от меня презент =)\",\n\t\t\t\t\t\ttype: 15, // код сообщения, типа \"тебе прислали жизнь\" или \"тебе прислали бустер\"\n\t\t\t\t\t\tcontent_icon: \"/icons/15.png\" // иконка кода содержимого, то есть типа если бустер прислали - иконка этого бустера\n\t\t\t\t\t}\n\t\t\t\t] \n\t\t\t},\n\t\t\ttimestamp: 1416229351\n\t\t}\n\t}\n}\n",
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
    "version": "0.1.5",
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
    "filename": "./controllers/LevelController.php"
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
    "filename": "./controllers/LevelController.php"
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
            "description": "<p>ID использованного бонуса</p>"
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
    "filename": "./controllers/LevelController.php"
  },
  {
    "type": "post",
    "url": "/level/useItem",
    "title": "useItem",
    "name": "useItem",
    "group": "level",
    "version": "0.1.5",
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
            "description": "<p>ID использованного бонуса</p>"
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
    "url": "/level/useItem",
    "title": "useItem",
    "name": "useItem",
    "group": "level",
    "version": "0.1.4",
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
            "description": "<p>ID использованного бонуса</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример запроса:",
        "content": "Пример запроса:\n{\n\tlevel_id: 1001,\n\titem_id: 4\n}\n",
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
    "url": "/level/useItem",
    "title": "useItem",
    "name": "useItem",
    "group": "level",
    "version": "0.1.1",
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
            "description": "<p>ID использованного бонуса</p>"
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
    "filename": "./controllers/MailController.php"
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
    "filename": "./controllers/MailController.php"
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
    "filename": "./controllers/MailController.php"
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
    "filename": "./controllers/ShopController.php"
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
    "filename": "./controllers/ZoneController.php"
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