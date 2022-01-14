// Intialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 19.849899, lng: 79.347900}

    // Centered map on location
    const map= new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });

    // The marker , positioned at location
    const marker = new google.maps.Marker({postion: loc, map:
    map });
} 

// lat: 19.849899, lng: 79.347900

// Sticky menu background
window.addEventListener('scroll', function(){

    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;

    }else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling

$('#navbar a, .btn').on('click',function(event){

    if(this.hash !==''){
        event.preventDefault();

        const hash = this.hash;
        
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
  
});