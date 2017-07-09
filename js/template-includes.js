$(document).ready(function() {
	$.get('templates/home.html', function(templates) {
		var template = $(templates).filter('#homeContent').html();
		var templateData = "";
		var html = Mustache.to_html(template, templateData);
		$('.section.home').html(html);
	});

	$.get('templates/about.html', function(templates) {
		var template = $(templates).filter('#aboutContent').html();
		var templateData = "";
		var html = Mustache.to_html(template, templateData);
		$('.section.about').html(html);
	});

	$.get('templates/work.html', function(templates) {
		var template = $(templates).filter('#workContent').html();
		var templateData = "";
		var html = Mustache.to_html(template, templateData);
		$('.section.work').html(html);
	});

	$.get('templates/contact.html', function(templates) {
		var template = $(templates).filter('#contactContent').html();
		var templateData = "";
		var html = Mustache.to_html(template, templateData);
		$('.section.contact').html(html);
	});
});