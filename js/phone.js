
$(document).ready(function(){



	$("button").click(function(){
		axios.defaults.baseURL = 'http://192.168.1.130:8086';
		axios({
			url:'/api/Common/SNTP',
			method:'post',
			params : {}
		}).then(res => {
			console.log("请求结果:"+res.status)
			if(res.status==200){
				console.log("请求成功:"+res.data.msg)
			}else{
				console.log("请求失败:"+JSON.stringify(res.data))
			}
		}).catch(function(error){
			console.log("请求失败:"+error)
		})
	});


	$("#createAccount").click(function(){
		axios.defaults.baseURL = 'http://192.168.1.130:8086';
		axios({
			url:'/api/DiagScreen/GetPlanningTasks',
			method:'post',
			data : {
				diagroomid:606
			}
		}).then(res => {
			console.log("请求结果:"+res.status)
			if(res.status==200){
				var bodys=res.data.body;
				console.log("请求成功:"+bodys.length)
				console.log("请求成功:"+bodys[0].Action)
			}else{
				console.log("请求失败:"+JSON.stringify(res.data))
			}
		}).catch(function(error){
			console.log("请求失败:"+error)
		})
	});
});