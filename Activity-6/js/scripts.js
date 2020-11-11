// array to store messages
var messages = [];

//message type loopkup object similar to enum
var messageType = 
{
    out: 'out-message',
    in: 'in-message', //another error here dont forget puncuation matters if its the same here it needs to be the same everywhere (thank windows for control f)
    unknown: 'unknown-message'
};

//seed data (optional)

var data = [
    {
        type: messageType.out,
        user: 'Jordan',
        message:'Hey do you have lunch plans?'
    },
    {
        type: messageType.in,
        user:'Mike',
        message: 'No Mike, how about Noodles?'
    },
    {
        type: messageType.out,
        user: 'Jordan',
        message:'Ok, Lets go!'
    }
];

//message constructor function
function Message(type, user, message)
{
    this.type = type;
    this.user = user;
    this.message = message;
}

//function to create and return an element for the supplied message
function createMessageElement(message)
{
    // create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message // basicaly a system.out.println but its printing variables + : // error here watch for those symbols
    );

// creates the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //add a class using the message type
    messageEl.className = message.type;

    return messageEl;
}

//button click event handler to add a new message
function addMessageHandler(event)
{
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //determine message type and set message variables accordingly
    switch(event.target.id)
    {
        case 'send-button':
            user = 'Jordan';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Mike';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    //create new message
    if(messageInput.value != '')
    {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //creates a message element
        var el = createMessageElement(message);

        //add the message element to the DOM
        messagesContainerEl.appendChild(el);

        //reset input
        messageInput.value = '';
    }
}
//loads seed data from above
function loadSeedData()
{
    for(var i = 0; i < data.length; i++)
    {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }
    // loads the preloaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for(var i = 0; i < messages.length; i++)
    {
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function ()
{
    // wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //loads the preloaded messages
    loadSeedData();
};

init();