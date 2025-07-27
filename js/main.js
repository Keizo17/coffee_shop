const form = document.getElementById('contactForm')

form.addEventListener('submit', function(event){
    event.preventDefault(); //stops actual form submission

    const name = form.elements['name'].value.trim();//collect form data
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    //simple validation
    if (!name || !email || !message){
        alert('Please fill in all fields.');
        return;
    }

    //basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
        alert('Please enter a valid email address.');
        return;
    }

    console.log('Form submitted with:', {name, email, message});

    saveSubmission({name, email, message})
    alert('Thanks for your message!');

    form.reset();
})