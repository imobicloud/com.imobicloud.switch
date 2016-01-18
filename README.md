# Switcher
====

Custom Switcher

xml

	<Widget id="switcher" src="com.imobicloud.switch" class="photos-switch"/>

tss

	".photos-switch": { width: 52, height: 31, top: 12, backgroundImage: '/images/switch.png' }
		".photos-handle": { width: 30, height: 31 }
		".photos-handle-on":  { left: 22, image: '/images/switch-handle-on.png' }
		".photos-handle-off": { left: 0,  image: '/images/switch-handle-off.png' }

js 

	$.switcher.load($, { 
		classes: 'photos', 
		value: true 
	});
	
	$.switcher.getValue();
	
	$.switcher.getValue(false);

	$.switcher.unload();