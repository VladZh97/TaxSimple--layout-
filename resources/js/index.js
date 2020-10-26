import "../scss/style.scss";

const headerBtn = document.querySelector('.header__btn');
const headerText = document.querySelector('.header__text');
const header = document.querySelector('.header');

if(document.body.classList.contains('home')) {
      headerBtn.style.display = 'inline-block';
} else {
  headerBtn.style.display = 'none';
}


if(document.body.classList.contains('error404')) {
      headerText.style.display = 'none';
      header.style.filter = 'blur(4px)';
} else {
  headerText.style.display = 'block';
}

const menu = document.querySelector('.header__left');
const btn = document.querySelector('.icon');

const showMenu = () => {
  btn.classList.toggle('active');
  menu.classList.toggle('visible');
  if(window.innerWidth <= 576) {
  document.body.classList.toggle("lock");
  }

}



btn.addEventListener('click', showMenu)



if (window.innerWidth > 768) {
  if (document.body.classList.contains('page-template-page-services')) {
    const itemFixed = document.querySelector('.serv__items')
  const listFixed = document.querySelector('.serv');

  let sticky = listFixed.offsetTop;



  const  myFunction = () => {
    if (window.pageYOffset >= sticky) {
      itemFixed.classList.add("fix")
    } else {
      itemFixed.classList.remove("fix");
    }
  }

  window.addEventListener('scroll', myFunction)

  } else if (document.body.classList.contains('page-template-page-conditions')) {
  const listFixed = document.querySelector('.condition');
  const itemFixed = document.querySelector('.condition__items')

  let sticky = listFixed.offsetTop;



  const  myFunction = () => {
    if (window.pageYOffset >= sticky) {
      itemFixed.classList.add("fix")
    } else {
      itemFixed.classList.remove("fix");
    }
  }

  window.addEventListener('scroll', myFunction)
  }

}




// ANIMATION ON SCROLL

window.onload = function () { 
const animItems = document.querySelectorAll('.anim-item')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 5

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('anim')
      } else {
        if (!animItem.classList.contains('no-anim')) {
          animItem.classList.remove('anim')
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }

  setTimeout(() => {
    animOnScroll()
  }, 300)
}
}


if(document.body.classList.contains('home') || document.body.classList.contains('page-template-page-contact-php')) {

// MAP
var mapCenter = [19.999976, 50.050480];

if(window.innerWidth > 1200) {
  mapCenter = new mapboxgl.LngLat(19.999976, 50.050480);
} else if(window.innerWidth <= 1200 && window.innerWidth >= 992) {
  mapCenter = new mapboxgl.LngLat(19.95991, 50.058560);
}else if(window.innerWidth > 992) {
  mapCenter = new mapboxgl.LngLat(19.928870,50.0650);
} else {
mapCenter = new mapboxgl.LngLat(19.928870,50.0650);
} 



mapboxgl.accessToken =
  "pk.eyJ1IjoidmxhZHpoIiwiYSI6ImNrZzBxcHpoMDB1ZmsydG9iMHE0YnJ6NDYifQ._kSahmQ3wNJverVwR7NxgA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/vladzh/ckg9tw9l02mkz19nwaem18kkd",
  center: mapCenter,
  zoom: 12.5,
});

if(window.innerWidth < 992) {
  map = new mapboxgl.Map({
    interactive: false,
    container: "map",
    style: "mapbox://styles/vladzh/ckg9tw9l02mkz19nwaem18kkd",
    center: mapCenter,
    zoom: 12.5
  })
}


map.scrollZoom.disable();
map.boxZoom.disable();
map.dragRotate.disable();
map.keyboard.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

var point = document.createElement("div");
point.className = "marker";
point.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
point.style.fontSize = "80px";
point.style.color = "#00c8ca";

var marker = new mapboxgl.Marker(point)
    .setLngLat([19.928870, 50.050480])
    .addTo(map);

}