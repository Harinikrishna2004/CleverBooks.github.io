document.addEventListener('DOMContentLoaded', function() {
    const pushbarToggle = document.getElementById('pushbar-toggle');
    const pushbar = document.getElementById('pushbar');
    const reviewToggle = document.getElementById('Review-toggle');
    const reviewContainer = document.getElementById('review-container');
    const tag1 = document.querySelector('.tag1');
    const tag = document.querySelector('.tag');
    const infoElements = document.querySelectorAll('.Info, .Info1');
    const getStarted = document.getElementById('get-started-button');

    const reviews = Array.from(document.querySelectorAll('.review'));
    const reviewWrapper = document.querySelector('.review-wrapper');
    let currentIndex = 0;
    let reviewOpen = false;
    let pushbarOpen = false;

    function showElement(element) {
        element.classList.remove('hidden');
    }


    function togglePushbar(show) {
        if (show) {
            pushbar.classList.add('open');
            reviewContainer.classList.remove('active');
            showElement(tag1);
            showElement(tag);
            infoElements.forEach(el => showElement(el));
            showElement(getStarted);
        } else {
            pushbar.classList.remove('open');
        }
    }

    function toggleReviewContainer() {
        reviewOpen = !reviewOpen;
        if (reviewOpen) {
            reviewContainer.classList.add('active');
            tag1.classList.add('hidden');
            tag.classList.add('hidden');
            infoElements.forEach(el => el.classList.add('hidden'));
            getStarted.classList.add('hidden');
        } else {
            reviewContainer.classList.remove('active');
            tag1.classList.remove('hidden');
            tag.classList.remove('hidden');
            infoElements.forEach(el => el.classList.remove('hidden'));
            getStarted.classList.remove('hidden');
        }
    }


    pushbarToggle.addEventListener('click', function() {
        togglePushbarContainer(); // Toggle the review container state as well
    });

    reviewToggle.addEventListener('click', function() {
        toggleReviewContainer();
    });


    function togglePushbarContainer() {
        pushbarOpen = !pushbarOpen;
        togglePushbar(pushbarOpen);
    }


    function showReview(index) {
        reviews.forEach((review, i) => {
            review.classList.toggle('active', i === index);
        });

        // Update the transform property of reviewWrapper
        reviewWrapper.style.transform = `translateX(-${index * 100}%)`;

        // Disable previous button if on the first review
        document.getElementById("prevBtn").disabled = index === 0;

        // Disable next button if on the last review
        document.getElementById("nextBtn").disabled = index === reviews.length - 1;
    }

    function prevReview() {
        if (currentIndex > 0) {
            currentIndex--;
            showReview(currentIndex);
        }
    }

    function nextReview() {
        if (currentIndex < reviews.length - 1) {
            currentIndex++;
            showReview(currentIndex);
        }
    }

    document.getElementById("prevBtn").addEventListener("click", prevReview);
    document.getElementById("nextBtn").addEventListener("click", nextReview);

    // Initialize the first review
    showReview(currentIndex);
});

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})