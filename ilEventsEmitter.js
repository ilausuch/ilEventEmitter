/*
    MIT LICENSE @2016 Ivan Lausuch <ilausuch@gmail.com>
    1.0
*/
ilEventsEmitter=function(){
	this.list=[];
	
	this.register=function(fnc){
		this.list.push(fnc);
	}
	
	this.send=function(event){
		var newList=[];
		
		for (var x=0; x<this.list.length; x++){
			var fnc=this.list[x];
			
			if (fnc(event)!=false)
				newList.push(fnc);
		}
		
		this.list=newList;
	}
	
	this.length=function(){
		return this.list.length;
	}
}
