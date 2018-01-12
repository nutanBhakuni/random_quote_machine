(function(){
	let quote_para = document.querySelector('.quote-para');
	let author_para = document.querySelector('.author-para');
	let next_quote = document.querySelector('.next-quote');
	let twitter_button = document.querySelector('.twitter-button');

	let jsonData;
	let dataLength;
	let quote_index;

	fetch('https://nutanbhakuni.github.io/Quotations/quotes.json').then(function(response){
		return response.json();
	}).then(function(data){
		jsonData = data;
		dataLength = data.length;
	}).then(showdata).catch(function(error){
		console.log(error);
	});

	function showdata(){
		let temp = generate_quote_number();

		if(temp == quote_index){
			if(temp == 0)
				quote_index = quote_index + 1;
			else
				quote_index = quote_index - 1;
		}
		else{
			quote_index = temp;
		}

		quote_para.innerHTML = jsonData[quote_index].text;
		author_para.innerHTML = "&mdash;&nbsp;&nbsp;&nbsp;" + jsonData[quote_index].author;
	}

	function generate_quote_number(){
		return Math.floor((Math.random() * dataLength));
	}

	function twitterredirect(){
		window.location.href = "https://twitter.com/intent/tweet?text=" + jsonData[quote_index].text + jsonData[quote_index].author;
	}

	next_quote.addEventListener('click', showdata);
	twitter_button.addEventListener('click', twitterredirect);

})();