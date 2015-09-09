describe("Progress Bar", function() {
	var ractive, progressBars, btns;
	beforeEach(function () {
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
    });
    it("Should create ractive object", function() {
      expect(ractive).toBeDefined();
    });
  });
  