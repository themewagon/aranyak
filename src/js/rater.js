// import utils from "./utils";


const raterInit = () => {
    // console.log('hello');
    const ratings = document.querySelectorAll('.rating');
    console.log(ratings)
    if(ratings.length){
        ratings.forEach((element) => {
            console.log(element);
            window.raterJs({
                max: 5,
                rating: 5,
                element: element,
                rateCallback:function rateCallback(rating, done) {
                    this.setRating(rating); 
                    done(); 
                }
            })
        })
    }
};

export default raterInit;