document.addEventListener('DOMContentLoaded', function() {
    // Functionality for Currency Descriptions
    const indicator = document.querySelector('.indicator');
    const listItems = document.querySelectorAll('.Currency li');

    function hideAllDescriptions() {
        document.querySelectorAll('.description').forEach(function(desc) {
            desc.style.display = 'none';
        });
        document.querySelectorAll('.Currency li span').forEach(function(span) {
            span.style.display = 'none';
        });
        listItems.forEach(function(item) {
            item.classList.remove('active');
        });
    }

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            hideAllDescriptions();
            this.querySelector('.description').style.display = 'block';
            this.querySelector('span').style.display = 'block';
            this.classList.add('active');
            indicator.style.top = this.offsetTop + 'px';
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.Currency li')) {
            hideAllDescriptions();
            indicator.style.top = '-5px'; 
        }
    });

    hideAllDescriptions();

    // Functionality for FAQ Items
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');
        });
    });

    (function() {
        emailjs.init('_N1MRN_HbmeP9nzp2'); // Replace with your actual EmailJS user ID
    })();

    // Add event listener for the service form
    document.getElementById('serviceForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Log the form data to console for debugging
        console.log("Form data:", new FormData(this));

        // Send email using EmailJS
        emailjs.sendForm('service_9e2ma16', 'template_dzwrnhk', this) // Replace 'template_dzwrnhk' with your actual template ID
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Service request sent successfully!');
                document.getElementById('serviceForm').reset(); // Reset the form fields
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send service request. Please try again.');
            });
    });

    // Functionality for loader
    window.addEventListener("load", () => {
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 2000);
    });

    // Functionality for hamburger menu
    document.querySelector('.ham').addEventListener('click', () => {
        document.getElementById('slideMenu').classList.add('open');
    });

    document.getElementById('closeBtn').addEventListener('click', () => {
        document.getElementById('slideMenu').classList.remove('open');
    });
});
