// // Can check whether needed to implement later
// // https://github.com/fireship-io/flamethrower
// import flamethrower from 'flamethrower-router';
// const router = flamethrower();
// // also maybe implement a password system so that not anyone can join the groupme? perhaps in groupme moderation for the group or in site itself

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Image grid system
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Image Modal functionality - wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements after they're loaded
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const currentImageNum = document.getElementById('currentImageNum');
    const totalImages = document.getElementById('totalImages');

    // Image data array
    const images = [
        'images/photos/1.jpg',
        'images/photos/2.jpg',
        'images/photos/3.jpg',
        'images/photos/4.jpg',
        'images/photos/5.jpg',
        'images/photos/6.jpg',
        'images/photos/7.png',
        'images/photos/8.png',
        'images/photos/9.png',
        'images/photos/10.jpg',
        'images/photos/11.jpg',
        'images/photos/12.jpg',
        'images/photos/13.jpg'
    ];

    let currentImageIndex = 0;

    // Set total images count
    if (totalImages) {
        totalImages.textContent = images.length;
    }

    // Mobile gallery elements
    const mobileGalleryImage = document.getElementById('mobileGalleryImage');
    const mobileCurrentImageNum = document.getElementById('mobileCurrentImageNum');
    const mobileTotalImages = document.getElementById('mobileTotalImages');

    // Set mobile gallery total
    if (mobileTotalImages) {
        mobileTotalImages.textContent = images.length;
    }

    // Mobile gallery click handler
    if (mobileGalleryImage) {
        mobileGalleryImage.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateMobileGallery();
        });
    }

    // Update mobile gallery display
    function updateMobileGallery() {
        if (mobileGalleryImage && mobileCurrentImageNum) {
            mobileGalleryImage.src = images[currentImageIndex];
            mobileGalleryImage.alt = `Engineering Club Photo ${currentImageIndex + 1}`;
            mobileCurrentImageNum.textContent = currentImageIndex + 1;
        }
    }

    // Initialize mobile gallery
    updateMobileGallery();

    // Open modal with specific image
    window.openModal = function(imageIndex) {
        currentImageIndex = imageIndex;
        showImage(imageIndex);
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close modal
    window.closeModal = function() {
        imageModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Show specific image
    function showImage(index) {
        if (index >= 0 && index < images.length && modalImage) {
            modalImage.src = images[index];
            modalImage.alt = `Engineering Club Photo ${index + 1}`;
            if (currentImageNum) {
                currentImageNum.textContent = index + 1;
            }
        }
    }

    // Change image (next/previous)
    window.changeImage = function(direction) {
        currentImageIndex += direction;
        
        // Wrap around if at boundaries
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
        
        showImage(currentImageIndex);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (imageModal && imageModal.classList.contains('active')) {
            switch(event.key) {
                case 'Escape':
                    window.closeModal();
                    break;
                case 'ArrowLeft':
                    window.changeImage(-1);
                    event.preventDefault();
                    break;
                case 'ArrowRight':
                    window.changeImage(1);
                    event.preventDefault();
                    break;
            }
        }
    });

    // Close modal when clicking outside the image
    if (imageModal) {
        imageModal.addEventListener('click', function(event) {
            if (event.target === imageModal) {
                window.closeModal();
            }
        });
    }

    // Close button functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', window.closeModal);
    }

    // Prevent modal content clicks from closing modal
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});