const IncomingWebhook = require('@slack/client').IncomingWebhook;
const shortid = require("shortid");

const url = 'https://hooks.slack.com/services/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';

let actions = [];

actions.push({
    options: {
        username: "Projeto "+shortid.generate(),
        "attachments": [{
            "title": "Projeto criado",
            "author_name": "diogenesjcs",
            "color": "#3F51B5"
        }]
    }
});
actions.push({
    options: {
        username: "Projeto "+shortid.generate(),
        "attachments": [{
            "title": "Projeto removido",
            "author_name": "diogenesjcs",
            "color": "#F44336"
        }]
    }
});
actions.push({
    options: {
        username: "Projeto "+shortid.generate(),
        text: "",
        "attachments": [{
            "title": "Projeto atualizado",
            "text": "Adicionada funcionalidade de criação de usuários de forma dinâmica.",
            "author_name": "diogenesjcs",
            "color": "#009688"
        }]
    }
});
actions.push({
    options: {
        username: "Projeto "+shortid.generate(),
        text:"",
        "attachments": [{
            "title": "Projeto atualizado",
            "text": "Removida funcionalidade de criação de usuários de forma dinâmica.",
            "author_name": "diogenesjcs",
            "color": "#009688"
        }]
    }
});

actions.push({
    options: {
        username: "Projeto "+shortid.generate(),
        text:"",
        "attachments": [{
            "title": "Projeto atualizado",
            "text": "Adicionada conexão com banco de dados MongoDB",
            "author_name": "diogenesjcs",
            "color": "#009688"
        }]
    }
});
actions.push({
    options: {
        username: "Projeto "+shortid.generate(),
        text:"",
        "attachments": [{
            "title": "Relatório",
            "text": "Criado modelo de relatório PDF",
            "author_name": "diogenesjcs",
            "color": "#607D8B"
        }]
    }
});

actions.push({
    options: {
        username: "Projeto "+shortid.generate(),
        text:"",
        "unfurl_media": true,
        "attachments": [{
            "fallback": "Required plain-text summary of the attachment.",
            "title": "Bug",
            "text": "Problema na conexão de campo de formulário",
            "author_name": "diogenesjcs",
            "image_url" : "http://static.ziggi.uol.com.br/imagens_programas/screenshots/big_1355505946_10994.jpg",
            "thumb_url" : "http://static.ziggi.uol.com.br/imagens_programas/screenshots/big_1355505946_10994.jpg",
            "color": "#000000"
        }]
    }
});
const shuffle = (a) => {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

const randomInt = (low, high) => {
    return Math.floor(Math.random() * (high - low) + low);
}


const randomMessages = (url, actions) => {
    shuffle(actions);
    if(actions.length>0)
      sendMessage(url, actions.shift().options);
};

const sendMessage = (url, options) => {
    const webhook = new IncomingWebhook(url, options);
    webhook.send(options, function(err, res) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Message sent: ', res);
        }
    });

};
setInterval(() => {
    randomMessages(url, actions)
}, 5000);
