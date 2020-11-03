// array to store messages
var messages = [];

//message type loopkup object similar to enum
var messageType = 
{
    out: 'out-message',
    in: 'in message',
    unknown: 'unknown-message'
};

//seed data (optional)

/**var data = [
    {
        type: messageType.out,
        user: 'Mike',
        message:'Hey do you have lunch plans?'
    },
    {
        type: messageType.in,
        user:'Joe',
        message: 'No Mike, how about Noodles?'
    },
    {

    }
]
*/
//message constructor function
function Message(type,user,message)
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
        message.user = ': ' + message.message // basicaly a system.out.println but its printing variables + : 
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
            user = 'unkown';
            type = messageType.unknown;
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

var init = function ()
{
    // wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
};

init();