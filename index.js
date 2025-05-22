/*===========Closing and opening the menu containing the navigation links by using the fa-bars icon
=======*/
let menuHideOpen = document.querySelector('.js-fa-bars');
menuHideOpen.addEventListener("click", () => {
    document.querySelector('body').classList.toggle('open-menu')
});

let userIcon = document.querySelector('.js-fa-user');
userIcon.addEventListener('mouseover', () => {
    document.querySelector('.login-p').style = "display: block;";
});
userIcon.addEventListener('mouseout', () => {
    document.querySelector('.login-p').style = "display: none;";
});



/*=========Working on the featured cars section to scroll using buttons and a mouse============*/
let returnButton = document.querySelector('.js-prev-button');
let nextButton = document.querySelector('.js-next-button');
let galleryContainer = document.querySelector('.js-each-car-type');

galleryContainer.addEventListener('wheel', (mousescrolling) => {
    mousescrolling.preventDefault();
    galleryContainer.scrollLeft += mousescrolling.deltaY;
    galleryContainer.style = "scroll-behavior: smooth;"
});
//======for scrolling to the left button
returnButton.addEventListener('click', () => {
    galleryContainer.style = "scroll-behavior: smooth;"
    galleryContainer.scrollLeft -= 1150;
});
//======for scrolling to the right button
nextButton.addEventListener('click', () => {
    galleryContainer.style = "scroll-behavior: smooth;"
    galleryContainer.scrollLeft += 1150;
});
/*=======
data 1
        <div class="car-details">
            <div class="car-model">
                2013 Kia Rio 1.4 Auto
            </div>
            <div class="car-type">
                Hatchback
            </div>
            <div class="rental-prices">
                R740.00 / Day
            </div>
            <div class="rent-now-btn">
                <button>Rent Now</button>
            </div>
        </div>

data 2

    <div class="car-details">
        <div class="car-model">
            2025 Audi A3 35TFSI Black Edition
        </div>
        <div class="car-type">
            Sedan
        </div>
        <div class="rental-prices">
            R860.00 / Day
        </div>
        <div class="rent-now-btn">
            <button>Rent Now</button>
        </div>
    </div>


data 3
    <div class="car-details">
        <div class="car-model">
            Chery Tiggo 8 Pro Max 2.0TGDi Auto
        </div>
        <div class="car-type">
            SUV 
        </div>
        <div class="rental-prices">
            R974.00 / Day
        </div>
        <div class="rent-now-btn">
            <button>Rent Now</button>
        </div>
    </div>

data 4
    <div class="car-details">
        <div class="car-model">
            Ford Ranger 2.0Bi-Turbo  4x4 Raptor
        </div>
        <div class="car-type">
            Double Cab / Bakkie
        </div>
        <div class="rental-prices">
            R1280.00 / Day
        </div>
        <div class="rent-now-btn">
            <button>Rent Now</button>
        </div>
    </div>

====*/