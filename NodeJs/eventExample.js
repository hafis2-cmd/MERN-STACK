const EventEmitter=require('events');
const customEmitter=new EventEmitter();

const eventHandler=(message)=>{
    console.log('Event Handled:-',message);
}
//Register the event handler for the custom event
customEmitter.on('customEvent',eventHandler);

//Emit the custom event with  a message 
customEmitter.emit('customEvent','Hello ,this is my custom event');

//removing event handler
customEmitter.removeListener('customEvent',eventHandler);

//Try emitting the event again
customEmitter.emit('customEvent','This event should not be handled anymore');