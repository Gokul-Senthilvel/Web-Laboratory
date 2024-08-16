$(document).ready(function() {
    $("#registrationForm").validate({
        rules: {
            fullName: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            eventDate: {
                required: true,
                date: true
            },
            eventType: {
                required: true
            }
        },
        messages: {
            fullName: {
                required: "Please enter your full name",
                minlength: "Your name must be at least 2 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                phoneUS: "Please enter a valid US phone number"
            },
            eventDate: {
                required: "Please select the event date",
                date: "Please enter a valid date"
            },
            eventType: {
                required: "Please select an event type"
            }
        },
        submitHandler: function(form) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });

    // Add custom phone number validation method
    $.validator.addMethod("phoneUS", function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/^(\+1|1)?[-.\s]?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/);
    }, "Please enter a valid US phone number.");
});

