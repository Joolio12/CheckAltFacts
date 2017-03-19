module.exports = function(controller) {

  controller.on('slash_command', function(bot, message) {
    // check message.command
    // and maybe message.text...
    // use EITHER replyPrivate or replyPublic...

    if (message.command == '/client') {
      //bot.replyPrivate(message, 'Creating context for client ' + message.text);
      var s = {
          "attachments": [
              {
                  "text": "Client Context Identified",
                  "fields": [
                      {
                          "title": "Client Name",
                          "value": message.text,
                          "short": true
                      },
                      {
                          "title": "Address",
                          "value": "123 Ford Rd\nHouston, TX",
                          "short": true
                      },
                      {
                          "title": "Pending Items",
                          "value": "1 - Process BOR request\n2 - Market new Marine Policy",
                          "short": false
                      }
                  ],
                  "color": "good"
              }
          ]
      }
      bot.replyPrivate(message, s);

    } else if (message.command == '/policy') {
      //bot.replyPrivate(message, 'Looking up policy number ' + message.text); 
      var s = {
          "attachments": [
              {
                  "text": "Policy Context Identified",
                  "fields": [
                      {
                          "title": "Client Name",
                          "value": "Larry Zajicek",
                          "short": true
                      },
                      {
                          "title": "Address",
                          "value": "123 Ford Rd\nHouston, TX",
                          "short": true
                      },
                      {
                          "title": "Policies                  Effective Dt    Expiration Dt",
                          "value": "Auto AX1124       04/01/2017   04/01/2018\nPKG APK3344      04/01/2017   04/01/2018",
                          "short": false
                      }
                  ],
                  "color": "#F35A00"
              }
          ]
      }
        bot.replyPrivate(message, s);
    } else {
      bot.replyPrivate(message, 'Command not understood, try help ');
    }

    // and then continue to use replyPublicDelayed or replyPrivateDelayed
    //bot.replyPublicDelayed(message, 'This is a public reply to the ' + message.command + ' slash command!');

    //bot.replyPrivateDelayed(message, ':dash:');

  });
}
