# ilEventsEmitter

ilEventsEmitter is a class that allows to any object to send events to registers

## Example

Creating a Class with emitter 

```javascript
MyClass=function(){
	this.eventsEmitter=new ilEventsEmitter();
	
	this.testSendEvent=function(event){
		this.eventsEmitter.send(event);
	}
}
```

Create an object from MyClass and register a function to receive events

```javascript
var object=new MyClass();

object.eventsEmitter.register(function(event){
	//TODO: something with event
})
```

Test send event

```javascript
object.testSendEvent("My event");
```

## License

MIT LICENSE @2016 Ivan Lausuch <ilausuch@gmail.com>
