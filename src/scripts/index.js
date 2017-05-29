import Map from './map';
import Lazy from './lazy';
import Awards from './awards';
import Contact from './contact';
import ImageSlider from './image-slider';
import VideoSlider from './video-slider';


if (document.getElementById('map')) {
  new Map('map');
}

if (document.getElementById('slider')) {
  new VideoSlider('slider');
}

Lazy.init();
Awards.init();
Contact.init();
