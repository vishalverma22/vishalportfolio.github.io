window.addEventListener('scroll',function(){
       let navbar=document.getElementById('resnav');
		if (window.pageYOffset>=100) {
			navbar.classList.add('sticky');//sticky ki class add k liye method
		}else{
		    navbar.classList.remove('sticky');//sticky ki class remove k liye method
		}
	});