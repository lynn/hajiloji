function yesnocheck(){
	var anstemp = $("input[name='answer']").val();
	var num = anstemp.length;
	var answer = [];
	for (var i=0; i<num; i++){
		answer.push(parseInt(anstemp[i]));
	}
	var data = [];
	for (var i=0; i<num; i++){
		data.push(parseInt($("input[name='q"+i+"']:checked").val()));
	}
	var cor = 0;
	for (var i=0; i<num; i++){
		if (data[i] == answer[i]) cor++;
	}
	$("#yesnoans").empty().append(cor+"/"+num+" answers correct！");
	if(cor==num) $("#yesnoans").append(" That's all of them! Good job!");
};
