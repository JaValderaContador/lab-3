document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        document.getElementById('confirmationMsg').style.display = 'block';
        
        this.reset();
    });
});
