jQuery('document').ready(function(){

	pltrigger=0; 
	num1=0;
	num2=0;
	mntrigger=0;
	dvtrigger=0;
	tmtrigger=0;

	jQuery('#seven').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+7);
	});
	jQuery('#six').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+6);
	});
	jQuery('#five').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+5);
	});
	jQuery('#four').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+4);
	});
	jQuery('#three').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+3);
	});
	jQuery('#two').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+2);
	});
	jQuery('#one').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+1);
	});
	jQuery('#zero').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+0);
	});
	jQuery('#eight').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+8);
	});
	jQuery('#nine').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+9);
	});
	jQuery('#dot').on('click', function(){
	jQuery('#str-res').val(jQuery('#str-res').val()+'.');
	});
	jQuery('#plus').on('click', function(){						
		num1=jQuery('#str-res').val();
		pltrigger=1;
		jQuery('#str-res').val("");
	});
	jQuery('#minus').on('click', function(){		
		num1=jQuery('#str-res').val();
		mntrigger=1;
		jQuery('#str-res').val("");
	});
	jQuery('#divide').on('click', function(){		
		num1=jQuery('#str-res').val();
		dvtrigger=1;
		jQuery('#str-res').val("");
	});
	jQuery('#times').on('click', function(){		
		num1=jQuery('#str-res').val();
		tmtrigger=1;
		jQuery('#str-res').val("");
	});
	jQuery('#clr').on('click', function(){
	jQuery('#str-res').val("");
	num1=num2=tmtrigger=dvtrigger=mntrigger=pltrigger=0;
	});
	jQuery('#equal').on('click', function(){		
		num2=jQuery('#str-res').val();
		if (pltrigger==1) {res=parseFloat(num1)+parseFloat(num2);}
		if (mntrigger==1) {res=num1-num2;}
		if (dvtrigger==1) {res=num1/num2;}
		if (tmtrigger==1) {res=num1*num2;}
		jQuery('#str-res').val(res);
		num1=num2=tmtrigger=dvtrigger=mntrigger=pltrigger=0;

	});

	
	});
