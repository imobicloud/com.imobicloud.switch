var params,
	G;

init(arguments[0] || {});
function init(args) {
	var exclude = ['id', 'children'];
	$.container.applyProperties(_.omit(args, exclude));
};

/*
 params = { 
 	classes: 'photos',
 	value: false
 }
 * */
exports.load = function(_G, _params) {
	params = _params;
	G = _G;
	
	var classes = params.classes + '-handle ' + params.classes + '-handle' + (params.value ? '-on' : '-off');
	var handle = G.UI.create('ImageView', { classes: classes });
	handle.addEventListener('swipe', handleSwipe);
	$.container.add(handle);
};

exports.unload = function() {
	params = null;
	G = null;
	$.container.removeAllChildren();
};

function updateHandle(value) {
	if (value == params.value) { return; }
	params.value = value;
	
	var styles = G.createStyle({ classes: params.classes + '-handle' + (value ? '-on' : '-off') });
  	$.container.children[0].animate({
  		left: styles.left,
  		duration: 200
  	}, function() {
  		$.container.children[0].applyProperties(styles);
  	});
  	
  	$.trigger('change', { value: value });
}

exports.setValue = updateHandle;

exports.getValue = function() {
	return params.value;
};

function handleSwipe(e) {
	var direction = e.direction;
	if (direction != 'left' && direction != 'right') { return; }
  	updateHandle( e.direction == 'right' );
}

function switchClick(e) {
	var point = e.source.convertPointToView({ x: e.x, y: e.y }, this);
	updateHandle( point.x > (this.rect.width / 2) );
}