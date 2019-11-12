function myfunction(img_id) {
    var image_name;
    var image_num;
    image_num = Math.floor(Math.random() * 38 + 1);
    image_name = "monster_image" + image_num + ".jpg";
    element = document.getElementById(img_id);
    element.src="images/" + image_name;
}

$(function(){
    //播放器控制
    var audio = document.getElementById('mp3Btn');
    audio.volume = .3;
    $('.bgm').click(function() {
        if(audio.paused){ //如果当前是暂停状态
            $('.bgm').css({'background':'url(images/voice_stop.png) no-repeat center bottom','background-size':'cover'});
            audio.play(); //播放
            return;
        }
        else{//当前是播放状态
            $('.bgm').css({'background':'url(images/voice_play.png) no-repeat center bottom','background-size':'cover'});
            audio.pause(); //暂停
        }
    });
    //播放完毕
    $('#mp3Btn').on('ended', function() {
        console.log("音频已播放完成");
        $('.bgm').css({'background':'url(images/voice_play.png) no-repeat center bottom','background-size':'cover'});
    })
})

$(function(){
	$('.no_more').click(function(){
		alert("暂无资料");
	})
})

$(document).ready(function(){
	$('#show_dajian').click(function(){
	    $('#dajian').load("weapon_html/dajian.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_taidao').click(function(){
	    $('#taidao').load("weapon_html/taidao.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_pianshou').click(function(){
	    $('#pianshou').load("weapon_html/pianshou.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_shuangdao').click(function(){
	    $('#shuangdao').load("weapon_html/shuangdao.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_chuizi').click(function(){
	    $('#chuizi').load("weapon_html/chuizi.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_dizi').click(function(){
	    $('#dizi').load("weapon_html/dizi.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_changqiang').click(function(){
	    $('#changqiang').load("weapon_html/changqiang.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_chongqiang').click(function(){
	    $('#chongqiang').load("weapon_html/chongqiang.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_zhanfu').click(function(){
	    $('#zhanfu').load("weapon_html/zhanfu.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_chonggun').click(function(){
	    $('#chonggun').load("weapon_html/chonggun.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_dunfu').click(function(){
	    $('#dunfu').load("weapon_html/dunfu.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_qingnu').click(function(){
	    $('#qingnu').load("weapon_html/qingnu.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_zhongnu').click(function(){
	    $('#zhongnu').load("weapon_html/zhongnu.html",function(){
			
	    });
	});
});

$(document).ready(function(){
	$('#show_gongjian').click(function(){
	    $('#gongjian').load("weapon_html/gongjian.html",function(){
			
	    });
	});
});