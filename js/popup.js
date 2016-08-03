$(document).ready(function() {
	var url = "http://www.ebay.co.uk/sch/Mobile-Smart-Phones-/9355/i.html?LH_Complete=1&_from=R20&_nkw=iphone+4s&_pgn=2&_skc=50&rt=nc";
	xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.responseText) {
				var data = xhr.responseText;
				var item = [];
				var title = [];
				var price = [];
				var time = [];
				var bids = [];
				var test = [];
				var toOut = "";
				for (var i=0; i<4; i++){
					item[i] = $('li[r='+(i+1)+']', data);
					title[i] = item[i].children('.lvtitle').children('a').html();
					price[i] = item[i].children('.lvprices').children('.lvprice').children('span').html()+"<br/>\n";
					bids[i] =  item[i].children('.lvprices').children('.lvformat').children('span').html();
					price[i] = $.trim(price[i]);
					time[i] =  item[i].children('.lvdetails').children('.timeleft').children('.tme').children('span').html();

				};
				$('#result').html(title);
				console.log(title);
			};
		};
	};
});