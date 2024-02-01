import { docReady } from './utils';
import detectorInit from './detector';
import formValidationInit from './form-validation';
import swiperInit from './swiper';
import countupInit from './countup';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(formValidationInit);
docReady(swiperInit);
docReady(countupInit);
