define({ api: [
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
    "filename": "controllers/InitController.php"
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
    "filename": "controllers/LevelController.php"
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
    "filename": "controllers/LevelController.php"
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
    "filename": "controllers/LevelController.php"
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
    "filename": "controllers/LevelController.php"
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
    "filename": "controllers/MailController.php"
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
    "filename": "controllers/MailController.php"
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
    "filename": "controllers/MailController.php"
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
    "filename": "controllers/ShopController.php"
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
    "filename": "controllers/ZoneController.php"
  }
] });