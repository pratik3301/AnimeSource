<script>
		const form = document.getElementById('form');
		const username = document.getElementById('uname');
		const email = document.getElementById('email');
		const password = document.getElementById('password');
		const password2 = document.getElementById('password2');

		form.addEventListener('submit', (e)=> {
			e.preventDefault();

			cheakInputs();
		});

		function cheakInputs()
		{
			const unameValue = uname.value.trim();
			const emailValue = email.value.trim();
			const passwordValue =password.value.trim();
			const passwordValue2 =password2.value.trim();

			if(usernameValue ==='')
			{
				setErrorFor(uname, 'username cannot be blank')
			}else{
				setSuccessFor(uname)

			}
		}

		function setSuccessFor(input, message)
		{
			const inputField = input.parentElement;
			const small = inputField.querySelector('small');

			small.innerText = message;

			inputField.className = 'input:focus2' 
		}

		
</script>