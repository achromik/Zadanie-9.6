//sets button for add elements to list
var addBtn = document.getElementById('js-addBtn'),

//sets button for delete elements from list
	delBtn = document.getElementById('js-delBtn'),

//list of elements
	list = document.getElementById('list');
    


//ADD ELEMENT
addBtn.addEventListener('click', function(e) {
	
	//sets element to create in this case <li>
	var element = document.createElement('li');

	//sets content of creates element
	element.innerHTML = 'Item '+ (document.getElementsByTagName('li').length + 1);

	if ((document.getElementsByTagName('li').length + 1) % 2 === 0  ) {
		element.className = 'even';
	}
	//apends element to list <ul>
	list.appendChild(element);

});

//DELETE ELEMENT
delBtn.addEventListener('click', function (e) {

	//gets to table all elements with tag 'li'
	var elements = document.getElementsByTagName('li'),
	
		//sets last element to remove
		removeEl = elements[elements.length-1],
		
		//finds and sets parent of removing element i this case <ul>
		containerEl = removeEl.parentNode;

		//removes item <li> from <ul>
		containerEl.removeChild(removeEl);

});
