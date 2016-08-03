function lalala(typeofresult) {
				var item = [];
				var title = [];
				var price = [];
				var time = [];
				var bids = [];
				var fee = [];
				var output = '';
				for (var i=0; i<50; i++){
					item[i] = $('li[r='+(i+1)+']');
					if (item[i] != undefined){
						title[i] = item[i].children('.lvtitle').children('a').html();
						price[i] = item[i].children('.lvprices').children('.lvprice').children('span').html();
						price[i] = $.trim(price[i]);
						bids[i] =  aboutBids(item[i]);
						fee[i] = aboutFee(item[i]);
						time[i] =  item[i].children('.lvdetails').children('.timeleft').children('.tme').children('span').html();
						if (typeofresult == 'defoult'){
						output += "Item №"+(i+1)+'\n'+
									"Name: "     + title[i] + "\n " + 
									"Price: "    + price[i] + '\n ' +
									"Bids: "     + bids[i]  + '\n ' +
									"Postage: "  + fee[i]   + '\n ' +
									"Date: "     + time[i]  + '\n ' +
									"\n\n";
						} else{
							output += "\"" + i       + "\";" + 
									  "\"" + title[i] + "\";" +
									  "\"" + price[i] + "\";" +
									  "\"" + bids[i]  + "\";" +
									  "\"" + fee[i]   + "\";" +
									  "\"" + time[i]  + "\";" +
									  "\n\n";
						};

					};
				};
				$('#result_textarea').val(output);
				//console.log(bids);
};

function aboutBids(bid){
	if ($('.logoBin', bid)[0] != undefined ){
		return "Buy it now";
	} else {
		if ($('.logoBinBo', bid)[0] != undefined){
			return "Buy it now or best offer";
		} else {
			return bid.children('.lvprices').children('.lvformat').children('span').html()
		};
	};
};

function aboutFee(fee){
	if ($('.bfsp', fee)[0] != undefined ){
		return "Free postage";
	} else {
		if ($('.fee', fee).html() === undefined){
			return "Collection only: Free";
		} else{
			var t = $('.fee', fee).html();
			return 	t.slice(11,16);
		};
	};
};



function savetxt() {
	var x = '';
	x = document.getElementById('result_textarea').value;
	var blob = new Blob([x], {type: "text/plain;charset=utf-8"});
	var date = new Date();
	date = date.getTime();
	saveAs(blob, date +".txt");
};
