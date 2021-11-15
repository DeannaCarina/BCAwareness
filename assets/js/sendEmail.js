function sendMail(contactForm) {
    emailjs.send("service_uatg3xo", "template_breastreview", {
        "from_name": contactForm.name.value,
        "form_email": contactForm.email.value,
        "form_subject": contactForm.subject.value,
        "form_message": contactForm.message.value
    })
    .then(
        // If the message is successfully sent 
        function(response) {
            console.log("SUCCESS", response);
            alert('Your email has been sent.');
        },
        // If the message does not send
        function(error) {
            console.log("FAILED", error);
        }
    );

    document.getElementById('fillForm').reset(); // Reset form once the message has been sent
    return false; // This is to prevent the page from refreshing when you submit your form 
}