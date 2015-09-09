var ractive, progressBars, btns;
// List of Progress bars that we want to show on page with their default progress in percentage.	
progressBars = [
	{progressbar:"progressbar1", progress:"25"},
	{progressbar:"progressbar2", progress:"50"},
	{progressbar:"progressbar3", progress:"75"}
];	

// List of control buttons to add/subtract percentage
btns = ["-25","-10","+10","+25"];	

// Created instanceof Ractive
ractive = new Ractive({
  
  el: '#container',    
  // Specifies the template to use. We passed an id selector #template. Ractive will use the contents of <script> tag whose ID is #template.  
  template: '#template',  
  //this is the list of progress bars and buttons
  data: {		
	allprogressBars: progressBars,
	allbtns: btns		
  }
});

// This is to bind the click event of buttons
ractive.on( 'upadateBar', function ( event ) {
	var newProgress = "";	
    var colorCls = "";	
	// Get the value of selected progress bar from dropdown and change the percentage of respective progress bar on button click.
	var selectedbar = ractive.find("#progressBarlistId").value;	
    
	// Get the percentage value already placed in selected progress bar and calculate new value as per button click
	newProgress = Number(this.get("allprogressBars["+selectedbar+"].progress")) + Number(this.get(event.keypath));
	
	//Can't go under 0.
	if(newProgress < 0){
		newProgress = 0;
	}
    
	//Change color if over 100
    if(newProgress > 100){
		colorCls = "warningclr";
	}	
	
	//Update the new value in selected progress bar
	this.set("allprogressBars["+selectedbar+"].progress",newProgress);	
    this.set("allprogressBars["+selectedbar+"].colorCls",colorCls);	
});