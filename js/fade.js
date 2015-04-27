(function($) {

	$.fn.fadeInT = function(options) {
		fade($(this), 'in', options);
	};
	$.fn.fadeOutT = function(options) {
		fade($(this), 'out', options)
	};
	$.fn.fadeToggleT = function(options) {
		fade($(this), 'toggle', options);
	};

	function fade($this, type, options) {
		var setting = {
				speed: 300,
				displayClassName: 'display-show',
				opacityClassName: 'opacity-show'
			};

		function targetAddClass() {
			$this.addClass(setting.displayClassName);
			setTimeout(function() {
				$this.addClass(setting.opacityClassName);
			}, 10);
		}

		function targetRemoveClass() {
			$this.removeClass(setting.opacityClassName);
			setTimeout(function() {
				$this.removeClass(setting.displayClassName);
			}, setting.speed);
		}

		$.extend(setting, options);

		if (type == 'out') {
			targetRemoveClass();
		} else if (type == 'in') {
			targetAddClass();
		} else {
			if ($this.hasClass(setting.opacityClassName) || $this.hasClass(setting.displayClassName)) {
				targetRemoveClass();
			} else {
				targetAddClass();
			}
		}
	}

})(jQuery);


$(function() {
	$('#btn-fadein').on('click', function() {
		$('#elem-fadein').fadeInT();
	});

	$('#btn-fadeout').on('click', function() {
		$('#elem-fadeout').fadeOutT();
	});

	$('#btn-fadetoggle').on('click', function() {
		$('#elem-fadetoggle').fadeToggleT({
			speed: 300, //DEFAULT 300
			displayClassName: 'display-show', //DEFAULT 'display-show'
			opacityClassName: 'opacity-show'  //DEFAULT 'opacity-show'
		});
	});
});

