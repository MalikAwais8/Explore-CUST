
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to the clicked tab and the corresponding pane
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
                content.style.display = 'block';
            }
        });
    });
});

document.querySelectorAll('.prospectus-item').forEach(item => {
    item.addEventListener('click', function () {
        const departmentFile = this.getAttribute('data-department');
        document.getElementById('prospectus-frame').src = departmentFile;
        document.querySelector('.popup-overlay').style.display = 'flex';
    });
});

document.querySelector('.popup-close').addEventListener('click', function () {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.getElementById('prospectus-frame').src = '';
});


    document.getElementById('current-year').textContent = new Date().getFullYear();


    document.addEventListener('DOMContentLoaded', function() {
        // Handle clicks for the Newsletter menu item
        document.querySelector('[data-link="newsletter"]').addEventListener('click', function() {
            showPopup('newsletter-popup', '../docs/Newsletter.pdf');
        });
    
        // Handle clicks for the Regulations menu item
        document.querySelector('[data-link="regulations"]').addEventListener('click', function() {
            showPopup('regulations-popup', '../docs/Regulations23-24.pdf');
        });
    
        // Function to show popup
        function showPopup(popupId, pdfFile) {
            document.getElementById(popupId).style.display = 'flex';
            document.getElementById(`${popupId.split('-')[0]}-frame`).src = pdfFile;
            document.body.style.overflow = 'hidden'; // Disable scrolling
        }
    
        // Close popups
        document.querySelectorAll('.popup-close').forEach(button => {
            button.addEventListener('click', function() {
                const popupId = button.getAttribute('data-popup');
                document.getElementById(popupId).style.display = 'none';
                document.body.style.overflow = ''; // Enable scrolling
            });
        });
    
        // Close popup when clicking outside of the content
        document.querySelectorAll('.popup-overlay').forEach(popup => {
            popup.addEventListener('click', function(event) {
                if (event.target === popup) {
                    popup.style.display = 'none';
                    document.body.style.overflow = ''; // Enable scrolling
                }
            });
        });
    });
    