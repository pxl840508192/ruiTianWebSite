
$(document).ready(function(){

	$("#createAccount").click(function(){
		$('#registerForm').show();
		$('#loginForm').hide();
	})

	$("#signIn").click(function(){
		$('#registerForm').hide();
		$('#loginForm').show();
	})


	$("#btGetCode").click(function(){
		var phone=$('#regPhone').val();
		axios.defaults.baseURL = 'http://192.168.8.107:8080';
		axios({
			url:'/user/veriCode',
			method:'post',
			data : {
				phone:phone
			}
		}).then(res => {
			console.log("请求结果:"+res.status)
			if(res.status==200){
				console.log("请求成功:"+JSON.stringify(res.data))
			}else{
				console.log("请求失败:"+JSON.stringify(res.data))
			}
		}).catch(function(error){
			console.log("请求失败:"+error)
		})
	});


	$("#btLogin").click(function(){
		/* var phone=$('#inputAccount').val();
		var pwd=$('#inputPwd').val();
		console.log("phone:"+phone+" pwd:"+pwd)
		axios.defaults.baseURL = 'http://192.168.8.107:8080';
		axios({
			url:'/user/login',
			method:'post',
			data : {
				phone:phone,
				password:pwd
			}
		}).then(res => {
			console.log("请求结果:"+res.status)
			if(res.status==200){
				console.log("请求成功:"+JSON.stringify(res.data))
				if(res.data.state==1){
					//window.location.href="main.html?userId="+res.data.userId;
					window.location.replace("projectIntroduce.html");
				}else{
					window.location.replace("projectIntroduce.html");
				}
			}else{
				console.log("请求失败:"+JSON.stringify(res.data))
				window.location.replace("projectIntroduce.html");
			}
		}).catch(function(error){
			console.log("请求失败:"+error)
			window.location.replace("projectIntroduce.html");
		}) */
		console.log("replace")
		window.location.href='projectIntroduce.html';
	});


	$("#btCreate").click(function(){
		var phone=$('#regPhone').val();
		var pwd=$('#regPwd').val();
		var code=$('#regCode').val();
		axios.defaults.baseURL = 'http://192.168.8.107:8080';
		axios({
			url:'/user/regist',
			method:'post',
			data : {
				phone:phone,
				password:pwd,
				veriCode:code
			}
		}).then(res => {
			console.log("请求结果:"+res.status)
			if(res.status==200){
				console.log("请求成功:"+JSON.stringify(res.data))
			}else{
				console.log("请求失败:"+JSON.stringify(res.data))
			}
		}).catch(function(error){
			console.log("请求失败:"+error)
		})
	});


});
