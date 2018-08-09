let money = +prompt( "Ваш бюджет на месяц?" );
let name = prompt ( "Название вашего магазина?" );

let mainList = {
	 budget : money,
	 shopName : name,
	 shopGoods : [],
	 employers : {},
	 open: false,
};

//console.log(mainList);

for (let i = 0; i < 3; i = i+1) {
	
	 let question = prompt ( "Какой тип товаров будем подавать?" );
	 mainList.shopGoogs[i] = question;
	 console.log(mainList);
};

prompt ( "Ваш бюджет на сегодня" + money / 30 );