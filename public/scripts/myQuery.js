var maxLen = 200;
$('.form-control.mesage').keyup( function(){
	var $this = $(this);
	if($this.val().length > maxLen){
	  $this.val($this.val().substr(0, maxLen));
		alert('Too long message');
	};
});
//-----------------------------------------

$('.form-control.name').keyup( function(){
	var $this = $(this);
	var str = $this.val();
	var myStr='0123456789ZAQXSWCDERFVTGBYHNUJMIKOLPqazxswedcvfrtgbyhnujmiklopЯЧСМИТЬБЮЭЖДЛОРПАВЫФЙЦУКЕНГШЩЗХЪюбьтимсчяэждлорпавыфйцукенгшщзхъ'
		for (var i = 0; i < str.length; i++) {
			if (myStr.indexOf(str[i]) + 1) {
				continue;
			}else{
				$this.val($this.val().substr(0, $this.val().length - 1));
				alert('Its wrong name(must be only numbers and letters)');
				break;
			};
		};
});
