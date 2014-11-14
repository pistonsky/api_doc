define({ api: [
  {
    "type": "get",
    "url": "/init",
    "title": "First init request",
    "name": "Init",
    "group": "Init",
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
    "filename": "controllers/InitController.php"
  },
  {
    "type": "get",
    "url": "/init",
    "title": "First init request",
    "name": "Init",
    "group": "Init",
    "version": "0.1.0",
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
    "filename": "controllers/_InitController.php"
  }
] });