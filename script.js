$(function(){
    $("form[name=' contactForm']").validate({
        rules: {
            name: "required",
            email: "required",
            phone: "required",
            company: "required",
            website: "required",
            message: "required",
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 8,
                maxlength: 11,
                number: true
            },
            company:{
                required: true,
                company: true
            },
            website: {
                required: true,
                company: true
            },
            message: {
                required: true,
                message: true
            }

        },

        messages:{
            name: "Please provide a valid name.",
            email: {
                required: "Please enter your email",
                minlength: "Please enter a valid email address"
            },
            phone:{
                required: "Please provide a phone number.",
                minlength: "Phone number must be 8 characters long.",
                maxlength: "Phone number must no be more than 11 characters long."
            },
            company: "Please enter a name of your company",
            message: "Please enter your message"
        },
        submitHandler: function (form){
            form.submit();
        }
    });
});