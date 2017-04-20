/**
 * Created by yatindra on 20/4/17.
 */
import React from 'react';
import './css/Carousel.css';

export default  class Carousel extends React.Component{

    render(){
        return(
            <div>

            </div>
        )
    }
}

function cal(arr){
    let level=0;
    for(let i=1;i<arr.length/2;i++){
        if((Math.pow(2,i)-1) <= arr.length){
            level+=1;}
        else{ break;}
    }
    console.log(level);
}

