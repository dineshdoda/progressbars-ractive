var ractive, progressBars, btns;	
progressBars = [
	{progressbar:"progressbar1", progress:"25"},
	{progressbar:"progressbar2", progress:"50"},
	{progressbar:"progressbar3", progress:"75"}
];	
btns = ["-25","-10","+10","+25"];	
ractive = new Ractive({
  el: '#container',     
  template: '#template',  
  data: {		
	allprogressBars: progressBars,
	allbtns: btns		
  }
});
ractive.on( 'upadateBar', function ( event ) {
	var newProgress = "";	
    var colorCls = "";	
	var selectedbar = ractive.find("#progressBarlistId").value;				
	newProgress = Number(this.get("allprogressBars["+selectedbar+"].progress")) + Number(this.get(event.keypath));
	if(newProgress < 0){
		newProgress = 0;
	}
    
    if(newProgress > 100){
		colorCls = "warningclr";
	}	
	this.set("allprogressBars["+selectedbar+"].progress",newProgress);	
    this.set("allprogressBars["+selectedbar+"].colorCls",colorCls);	
});