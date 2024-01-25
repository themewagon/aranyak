import { docReady } from './utils';
import detectorInit from './detector';
import glightboxInit from './glightbox';
import formValidationInit from './form-validation';
import navbarDarkenOnScroll from './navbar-darken-on-scroll';
import listInit from './list';
import lottieInit from './lottie';
import swiperInit from './swiper';
import themeControl from './theme-control';
import scrollbarInit from './scrollbar';
import iconCopiedInit from './icons';
import scrollInit from './scroll';
import countupInit from './counter';
import raterInit from './rater';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(glightboxInit);
docReady(formValidationInit);
docReady(navbarDarkenOnScroll);
docReady(swiperInit);
docReady(lottieInit);
docReady(themeControl);
docReady(scrollbarInit);
docReady(iconCopiedInit);
docReady(scrollInit);
docReady(listInit);
docReady(countupInit)
docReady(raterInit)
