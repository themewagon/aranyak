import utils from "./utils";


const raterInit = () => {
    if(window.raterJs){
        const ratings = document.querySelectorAll('[data-rating]');
        if(ratings.length){
            ratings.forEach((element) => {
                const options = utils.getData(element, 'rating');
                window.raterJs({
                    ...options,
                    max: 5,
                    element,
                    rateCallback:function rateCallback(rating, done) {
                        this.setRating(rating); 
                        done(); 
                    }
                })
            })
        }
    }
};

export default raterInit;