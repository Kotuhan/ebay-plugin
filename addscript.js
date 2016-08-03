function createElements(){
scripts = document.createElement('script');
jquery = document.createElement('script');
save = document.createElement('script');
scripts.src = chrome.extension.getURL('function.js');
jquery.src = chrome.extension.getURL('jquery.js');
save.src = chrome.extension.getURL('filesaver.js');
// div code
div = document.createElement('div');
div.id = "newdiv";
div.setAttribute("style", "color:red; background:yellow;position:fixed; right:0%;top:0%; width:200px;height:200px;");
/* url textarea cod
url_textarea = document.createElement('textarea');
url_textarea.id = "url_textarea";*/
// result textarea cod
result_textarea = document.createElement('textarea');
result_textarea.id = "result_textarea";
// button for defoult result view
def_butt = document.createElement('input');
def_butt.setAttribute("type", "button");
def_butt.id = "mybutton";
def_butt.setAttribute("onclick", "lalala('defoult')");
def_butt.setAttribute("value", "Take info defoult view");
// button for defoult result view
els_button = document.createElement('input');
els_button.setAttribute("type", "button");
els_button.id = "mybutton";
els_button.setAttribute("onclick", "lalala('else')");
els_button.setAttribute("value", "Take info DB like view");
// button for saving file
save_button = document.createElement('input');
save_button.setAttribute("type", "button");
save_button.id = "savebutton";
save_button.setAttribute("onclick", "savetxt()");
save_button.setAttribute("value", "Save info");


};

function addElements(){
	(document.head||document.documentElement).appendChild(scripts);
	(document.head||document.documentElement).appendChild(jquery);
	(document.head||document.documentElement).appendChild(save);
	document.body.appendChild(div);
//	document.getElementById('newdiv').appendChild(url_textarea);
	document.getElementById('newdiv').appendChild(def_butt);
	document.getElementById('newdiv').appendChild(els_button);
	document.getElementById('newdiv').appendChild(result_textarea);
	document.getElementById('newdiv').appendChild(save_button);
};
createElements();
addElements();