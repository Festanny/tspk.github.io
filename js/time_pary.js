

	setInterval("Myfunct()", 1000);
	
	var begin_para1 = "08:30:00";
	var end_para1 = "10:00:00";
	
	var begin_perem1 = "10:00:01";
	var end_perem1 = "10:19:59";
	
	var begin_para2 = "10:20:00";
	var end_para2 = "11:49:59";
	
	var begin_perem2 = "11:50:01";
	var end_perem2 = "12:24:59";
	
	var begin_para3 = "12:25:00";
	var end_para3 = "13:55:00";
	
	var begin_perem3 = "13:55:01";
	var end_perem3 = "14:04:59";
	    
	var begin_para4 = "14:05:00";
	var end_para4 = "15:35:00";
	
	////По субботе//////
	var begin_para_s_1 = "08:30:00";
	var end_para_s_1 = "10:00:00";
	
	var begin_perem_s_1 = "10:00:01";
	var end_perem_s_1 = "10:09:59";
	
	var begin_para_s_2 = "10:10:00";
	var end_para_s_2 = "11:39:59";
	
	var begin_perem_s_2 = "11:40:00";
	var end_perem_s_2 = "11:49:59";
	
	var begin_para_s_3 = "11:50:00";
	var end_para_s_3 = "13:19:59";
	
	var begin_perem_s_3 = "13:20:00";
	var end_perem_s_3 = "13:29:59";
	    
	var begin_para_s_4 = "13:30:00";
	var end_para_s_4 = "15:00:00";
	
	
	
	function Myfunct(){
	    var dates = new Date();
	    var span = document.getElementById("seychas");
	    var para = document.getElementById("para");
	    var Bar = document.getElementById("bar");
	    var ost = document.getElementById("ost");
	    var bar_para = document.getElementById("bar_para");
	    var ost_para = document.getElementById("ost_para");
		var Bells = document.getElementById("bell");
	    
	    var minutes = dates.getMinutes();
	    var seconds = dates.getSeconds();
	    var hourse = dates.getHours();
	    var day = dates.getDay();

	    //Каникулы
	    var start = new Date(dates.getFullYear(),0,0);
	    var diff = dates - start;
	    var oneDay = 1000 * 60 * 60 * 24;
	    //var kanikuly = Math.floor(diff / oneDay);
	    //console.log(kanikuly);
	    
	        
	    var fhours = ((hourse <10) ? "0":"") + hourse ;
	    var fminutes = ((minutes<10) ? "0":"") + minutes;
	    var fseconds = ((seconds<10) ? "0":"") + seconds;
	    
	    var tec_tame = fhours + ":" + fminutes + ":" + fseconds;
	    span.innerHTML = tec_tame;
	    
	if (day != 7 && day != 6 && day == 1 || day == 2 || day == 3 || day == 4 || day == 5){ //Если не воскресенье
	    
	    if (tec_tame < begin_para1){
	        para.innerHTML = "Пары еще не начались";
			Bells.className = "";
	    }
	    /*else if (kanikuly >= 182 && kanikuly <= 244){
	    	para.innerHTML = "Каникулы !!!";
			Bells.className = "";
	    } */
	    else if (tec_tame > begin_para1 && tec_tame < end_para1){
	        para.innerHTML = "Сейчас идет первая пара";
			Bells.className = "";
	    } else if (tec_tame > begin_perem1 && tec_tame < end_perem1) {
	        para.innerHTML = "Сейчас идет перемена после 1 пары";
			Bells.className = "perem";
	    } else if (tec_tame > begin_para2 && tec_tame < end_para2){
	        para.innerHTML = "Сейчас идет вторая пара";
			Bells.className = "";
	    } else if (tec_tame > begin_perem2 && tec_tame < end_perem2){
	        para.innerHTML = "Сейчас идет большая перемена после 2 пары";
			Bells.className = "perem";
	    } else if (tec_tame > begin_para3 && tec_tame < end_para3){
	        para.innerHTML = "Сейчас идет третья пара";
			Bells.className = "";
	    } else if (tec_tame > begin_perem3 && tec_tame < end_perem3){
	        para.innerHTML = "Сейчас идет перемена после 3 пары";
			Bells.className = "perem";
	    } else if (tec_tame > begin_para4 && tec_tame < end_para4){
	        para.innerHTML = "Сейчас идет четвертая пара";
			Bells.className = "";
	    } else if (tec_tame > end_para4){
	        para.innerHTML = "Пары закончились!!!";
			Bells.className = "";
	    }
	    //Прогресс бар общий
	    if (tec_tame < begin_para1){
	        Bar.style.width = "0%";
	        ost.innerHTML = "Пары еще не начались: " + "0%";
	    } 
	    /*else if(kanikuly >= 182 && kanikuly <= 244){
	    	Bar.style.width = "0%";
	        ost.innerHTML = "Каникулы!!! Занятий нет";
	    } */
	    else if (tec_tame > begin_para1 && tec_tame < end_para4){
	        var countHours = 432; // 100% минут в датах
	        var procent = getSecondsToday(); //Количество минут от начала дня
	        function getSecondsToday(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 510;
	        }
	        
	        var summ = (procent * 100) / countHours;
	        Bar.style.width = summ + "%";
			if (Math.floor(summ) < 50){
				ost.innerHTML = "Всего прошло: " + Math.floor(summ) + " %";
			}
			else
			{
				ost.innerHTML = "Всего осталось: " + Math.floor(summ) + " %";
			}
	       // console.log(Math.floor(summ));
	    } else if (tec_tame > end_para4){
	        Bar.style.width = "100%";
	        ost.innerHTML = "Всего осталось: 100%";
	    }
	
	    //Прогресс бар по парам
	        var countHours = 90; // 100% минут в датах
	        var countPerem1 = 1200; //Секунд в первой перемене
	        var countPerem2 = 35; //Минут во второй перемене
	        var countPerem3 = 50100; //Секунд в третьей перемене
	        
	        
	     if (tec_tame < begin_para1){ //Если пары не наступили то обнуляем
	        bar_para.style.width = "0%";
	        ost_para.innerHTML = "Пары еще не начались: " + "0%";
	    
	    } /*else if (kanikuly >= 182 && kanikuly <= 244){
	        bar_para.style.width = "0%";
	        ost_para.innerHTML = "Каникулы!!! занятий нет";	    	
	    } */

	    else if (tec_tame > begin_para1 && tec_tame < end_para1){ //Высчитываем остаток 1 пары

	        var procent = getSecondsToday1(); //Количество минут от начала дня
	        function getSecondsToday1(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 510;
	        }
	        
	        //Считаем время до конца 1 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),10,0,0); //Счет до 10:00
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ = (procent * 100) / countHours;
	        bar_para.style.width = summ + "%";
	        ost_para.innerHTML = "До конца 1-й пары осталось: " + ostalos + " | " + Math.floor(summ) + " %" ;
	    } else if (tec_tame > begin_perem1 && tec_tame < end_perem1){ //Высчитываем остаток 1 перемены
	        var procent2 = getSecondsToday2(); //Количество минут от начала дня
	        function getSecondsToday2(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 ) - 36000 ;
	            
	        }
	        //Считаем время до конца 1 перемены////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),10,20,0); //Счет до 10:20
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ2 = (procent2 * 100) / countPerem1 ;
	        bar_para.style.width = summ2 + "%";
	        ost_para.innerHTML = "До конца 1-й перемены осталось: " + ostalos + " | " + Math.floor(summ2) + " %";
	    } else if (tec_tame > begin_para2 && tec_tame < end_para2){ //Высчитываем остаток 2 пары
	        var procent3 = getSecondsToday3(); //Количество минут от начала дня
	        function getSecondsToday3(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 620;
	            
	        }
	        //Считаем время до конца 2 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),11,50,0); //Счет до 11:50
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ3 = (procent3 * 100) / countHours;
	        bar_para.style.width = summ3 + "%";
	        ost_para.innerHTML = "До конца 2-й пары осталось: " + ostalos + " | " + Math.floor(summ3) + " %";
	    } else if (tec_tame > begin_perem2 && tec_tame < end_perem2){ //Высчитываем остаток 2 перемены
	        var procent4 = getSecondsToday4(); //Количество минут от начала дня
	        function getSecondsToday4(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 710;
	            
	        }
	        //Считаем время до конца 2 перемены////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),12,25,0); //Счет до 12:25
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ4 = (procent4 * 100) / countPerem2;
	        bar_para.style.width = summ4 + "%";
	        ost_para.innerHTML = "До конца 2-й перемены осталось: " + ostalos + " | " + Math.floor(summ4) + " %";
	    } else if (tec_tame > begin_para3 && tec_tame < end_para3){ //Высчитываем остаток 3 пары
	        var procent5 = getSecondsToday5(); //Количество минут от начала дня
	        function getSecondsToday5(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 745;
	            
	        }
	        //Считаем время до конца 3 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),13,55,0); //Счет до 13:55
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ5 = (procent5 * 100) / countHours;
	        bar_para.style.width = summ5 + "%";
	        ost_para.innerHTML = "До конца 3-й пары осталось: " + ostalos + " | " + Math.floor(summ5) + " %";
	    } else if (tec_tame > begin_perem3 && tec_tame < end_perem3){ //Высчитываем остаток 3 перемены
	        var procent6 = getSecondsToday6(); //Количество минут от начала дня
	        function getSecondsToday6(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 ) - countPerem3 ;
	            
	        }
	        //Считаем время до конца 3 перемены////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),14,05,0); //Счет до 14:05
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ6 = (procent6 * 100) / 600;
	        bar_para.style.width = summ6 + "%";
	        ost_para.innerHTML = "До конца 3-й перемены осталось: " + ostalos + " | " + Math.floor(summ6) + " %";
	    } else if (tec_tame > begin_para4 && tec_tame < end_para4){ //Высчитываем остаток 4 пары
	        var procent7 = getSecondsToday7(); //Количество минут от начала дня
	        function getSecondsToday7(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 845;
	            
	        }
	        //Считаем время до конца 4 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),15,35,0); //Счет до 15:35
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ7 = (procent7 * 100) / countHours;
	        bar_para.style.width = summ7 + "%";
	        ost_para.innerHTML = "До конца 4-й пары осталось: " + ostalos + " | " + Math.floor(summ7) + " %";
	    }
	    
	    
	    else if (tec_tame > end_para4){
	        bar_para.style.width = "100%";
	        ost_para.innerHTML = "Пары закончились: 100%";
	    }
	    
	 } else if (day == 6 && day != 7 && day != 1 && day != 2 && day != 3 && day != 4 && day != 5){ //Если это суббота то
	 ///////////////////////////////////////////////
	    if (tec_tame < begin_para_s_1){
	        para.innerHTML = "Пары еще не начались";
			Bells.className = "";
	    } /*else if (kanikuly >= 182 && kanikuly <= 244){
	    	para.innerHTML = "Каникулы";
			Bells.className = "";
	    } */
	    else if (tec_tame > begin_para_s_1 && tec_tame < end_para_s_1){
	        para.innerHTML = "Сейчас идет первая пара";
			Bells.className = "";
	    } else if (tec_tame > begin_perem_s_1 && tec_tame < end_perem_s_1) {
	        para.innerHTML = "Сейчас идет перемена после 1 пары";
			Bells.className = "perem";
	    } else if (tec_tame > begin_para_s_2 && tec_tame < end_para_s_2){
	        para.innerHTML = "Сейчас идет вторая пара";
			Bells.className = "";
	    } else if (tec_tame > begin_perem_s_2 && tec_tame < end_perem_s_2){
	        para.innerHTML = "Сейчас идет перемена после 2 пары";
			Bells.className = "perem";
	    } else if (tec_tame > begin_para_s_3 && tec_tame < end_para_s_3){
	        para.innerHTML = "Сейчас идет третья пара";
			Bells.className = "";
	    } else if (tec_tame > begin_perem_s_3 && tec_tame < end_perem_s_3){
	        para.innerHTML = "Сейчас идет перемена после 3 пары";
			Bells.className = "perem";
	    } else if (tec_tame > begin_para_s_4 && tec_tame < end_para_s_4){
	        para.innerHTML = "Сейчас идет четвертая пара";
			Bells.className = "";
	    } else if (tec_tame > end_para_s_4){
	        para.innerHTML = "Пары закончились!!!";
			Bells.className = "";
	    }
	    //Прогресс бар общий
	    if (tec_tame < begin_para_s_1){
	        Bar.style.width = "0%";
	        ost.innerHTML = "Пары еще не начались: " + "0%";
	    } /*else if(kanikuly >= 182 && kanikuly <= 244){
	        Bar.style.width = "0%";
	        ost.innerHTML = "Каникулы";	    	
	    } */

	    else if (tec_tame > begin_para_s_1 && tec_tame < end_para_s_4){
	        var countHours = 390; // 100% минут в датах
	        var procent = getSecondsToday(); //Количество минут от начала дня
	        function getSecondsToday(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 510;
	        }
	        
	        var summ = (procent * 100) / countHours;
	        Bar.style.width = summ + "%";
	        ost.innerHTML = "Всего осталось: " + Math.floor(summ) + " %";
	        //console.log(procent);
	    } else if (tec_tame > end_para_s_4){
	        Bar.style.width = "100%";
	        ost.innerHTML = "Всего осталось: 100%";
	    }
	
	    //Прогресс бар по парам
	        var countHours = 90; // 100% минут в датах
	        var countPerem1 = 600; //Секунд в первой перемене
	        var countPerem2 = 600; //Минут во второй перемене
	        var countPerem3 = 600; //Секунд в третьей перемене
	        
	        
	     if (tec_tame < begin_para_s_1){ //Если пары не наступили то обнуляем
	        bar_para.style.width = "0%";
	        ost_para.innerHTML = "Пары еще не начались: " + "0%";
	    
	    } /*else if(kanikuly >= 182 && kanikuly <= 244){
	        bar_para.style.width = "0%";
	        ost_para.innerHTML = "Каникулы";	    	
	    } */

	    else if (tec_tame > begin_para_s_1 && tec_tame < end_para_s_1){ //Высчитываем остаток 1 пары

	        var procent = getSecondsToday1(); //Количество минут от начала дня
	        function getSecondsToday1(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 510;
	        }
	        
	        //Считаем время до конца 1 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),10,0,0); //Счет до 10:00
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ = (procent * 100) / countHours;
	        bar_para.style.width = summ + "%";
	        ost_para.innerHTML = "До конца 1-й пары осталось: " + ostalos + " | " + Math.floor(summ) + " %" ;
	    } else if (tec_tame > begin_perem_s_1 && tec_tame < end_perem_s_1){ //Высчитываем остаток 1 перемены
	        var procent2 = getSecondsToday2(); //Количество минут от начала дня
	        function getSecondsToday2(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 ) - 36000 ;
	            
	        }
	        //Считаем время до конца 1 перемены////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),10,10,0); //Счет до 10:10
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ2 = (procent2 * 100) / countPerem1 ;
	        bar_para.style.width = summ2 + "%";
	        ost_para.innerHTML = "До конца 1-й перемены осталось: " + ostalos + " | " + Math.floor(summ2) + " %";
	    } else if (tec_tame > begin_para_s_2 && tec_tame < end_para_s_2){ //Высчитываем остаток 2 пары
	        var procent3 = getSecondsToday3(); //Количество минут от начала дня
	        function getSecondsToday3(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 610;
	            
	        }
	        //Считаем время до конца 2 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),11,40,0); //Счет до 11:40
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ3 = (procent3 * 100) / countHours;
	        bar_para.style.width = summ3 + "%";
	        ost_para.innerHTML = "До конца 2-й пары осталось: " + ostalos + " | " + Math.floor(summ3) + " %";
	    } else if (tec_tame > begin_perem_s_2 && tec_tame < end_perem_s_2){ //Высчитываем остаток 2 перемены
	        var procent4 = getSecondsToday4(); //Количество минут от начала дня
	        function getSecondsToday4(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000) - 42000;
	            
	        }
	        //Считаем время до конца 2 перемены////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),11,50,0); //Счет до 11:50
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ4 = (procent4 * 100) / countPerem2;
	        bar_para.style.width = summ4 + "%";
	        ost_para.innerHTML = "До конца 2-й перемены осталось: " + ostalos + " | " + Math.floor(summ4) + " %";
	    } else if (tec_tame > begin_para_s_3 && tec_tame < end_para_s_3){ //Высчитываем остаток 3 пары
	        var procent5 = getSecondsToday5(); //Количество минут от начала дня
	        function getSecondsToday5(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 710;
	            
	        }
	        //Считаем время до конца 3 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),13,20,0); //Счет до 13:20
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ5 = (procent5 * 100) / countHours;
	        bar_para.style.width = summ5 + "%";
	        ost_para.innerHTML = "До конца 3-й пары осталось: " + ostalos + " | " + Math.floor(summ5) + " %";
	    } else if (tec_tame > begin_perem_s_3 && tec_tame < end_perem_s_3){ //Высчитываем остаток 3 перемены
	        var procent6 = getSecondsToday6(); //Количество минут от начала дня
	        function getSecondsToday6(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 ) - 48000  ;
	            
	        }
	        //Считаем время до конца 3 перемены////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),13,30,0); //Счет до 13:30
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ6 = (procent6 * 100) / countPerem3;
	        bar_para.style.width = summ6 + "%";
	        ost_para.innerHTML = "До конца 3-й перемены осталось: " + ostalos + " | " + Math.floor(summ6) + " %";
	    } else if (tec_tame > begin_para_s_4 && tec_tame < end_para_s_4){ //Высчитываем остаток 4 пары
	        var procent7 = getSecondsToday7(); //Количество минут от начала дня
	        function getSecondsToday7(){
	            var now = new Date();
	            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	            var diff = now - today;
	            return Math.floor(diff / 1000 / 60) - 810;
	            
	        }
	        //Считаем время до конца 4 пары////////////////
	        var now = new Date();
	        var achiveDate = new Date(now.getFullYear(),now.getMonth(),now.getDate(),15,00,0); //Счет до 15:00
	        var result = (achiveDate - now )+1000;
	        var seconds_to_para = Math.floor((result/1000)%60); //Секунды
	        var fseconds_to_para = ((seconds_to_para < 10)? "0":"") + seconds_to_para; //Формат секунд
	        var minutes_to_para = Math.floor((result/1000/60)%60);
	        var fminutes_to_para = ((minutes_to_para < 10)? "0":"") + minutes_to_para; //Формат минут
	        var hours_to_para = Math.floor((result/1000/60/60)%24);
	        var fhours_to_para = ((hours_to_para < 10)? "0":"") + hours_to_para; //Формат часов
	        var ostalos = fhours_to_para + ":" + fminutes_to_para + ":" + fseconds_to_para;
	    
	        ///////////////////////////////////////////////
	        var summ7 = (procent7 * 100) / countHours;
	        bar_para.style.width = summ7 + "%";
	        ost_para.innerHTML = "До конца 4-й пары осталось: " + ostalos + " | " + Math.floor(summ7) + " %";
	    }
	    
	    
	    else if (tec_tame > end_para_s_4){
	        bar_para.style.width = "100%";
	        ost_para.innerHTML = "Пары закончились: 100%";
	    }
	
	 ///////////////////////////////////////////////
	 }
	
	 else if (day == 7 && day != 1 && day != 2 && day != 3 && day != 4 && day != 5 && day != 6)
	 {
	    Bar.style.width = "0%";
	    ost.innerHTML = "Сегодня воскресенье - занятий нет: 0%";
	    bar_para.style.width = "0%";
	    ost_para.innerHTML = "Сегодня воскресенье - занятий нет: 0%";
	    para.innerHTML = "Сегодня воскресенье - занятий нет";
	 }
	 
	}

	
	