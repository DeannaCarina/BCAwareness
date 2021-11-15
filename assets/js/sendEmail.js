function sendMail(contactForm) {
    emailjs.send("service_uatg3xo", "template_breastreview", {
        "from_name": contactForm.name.value,
        "form_email": contactForm.email.value,
        "form_subject": contactForm.subject.value,
        "form_message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Your email has been sent.');
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}