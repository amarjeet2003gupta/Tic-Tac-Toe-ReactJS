// import React, { useRef, useState } from 'react'
// import './tictactoe.css'
// import circle_icon from '../assets/blue_o.png'
// import cross_icon from '../assets/yellow_x.svg.png'

// let data = ["","","","","","","","",""];
// const initializeBoxArray = () => {
//     return Array(9).fill(null).map(() => useRef(null));
// };

// const TicTacToe = () => {

//     let [count,setCount] = useState(0);
//     let [lock,setLock] = useState(false);
//     let titleRef = useRef(null);
//     let boxArray = initializeBoxArray();

//     const createImageElement = (src) => {
//         const imgElement = document.createElement('img');
//         imgElement.src = src;
//         return imgElement;
//     };

//     // const toggle = (e, index) => 
//     function toggle(e,index){
//         if(lock || data[index] !== ""){
//             return 0;
//         }
//         if(count % 2 === 0){
//             e.target.innerHTML = '';
//             e.target.appendChild(createImageElement(cross_icon));
//             data[index] = "x";
//             setCount(++count);
//         }
//         else{
//             // e.target.innerHTML = `<img src=${circle_icon}'>`; // this line not working
//             const imgElement = document.createElement('img');
//             imgElement.src = circle_icon;
//             e.target.appendChild(imgElement);
//             data[index] = "o";
//             setCount(++count);
//         }

//         checkWin();
//     }

//     // const checkWin = () => 
//     function checkWin() {
//         if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
//             won(data[0]);
//         } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
//             won(data[1]);
//         } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
//             won(data[2]);
//         } else if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
//             won(data[0]);
//         } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
//             won(data[3]);
//         } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
//             won(data[6]);
//         } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
//             won(data[0]);
//         } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
//             won(data[2]);
//         } else if(count === 9){
//             checkDraw();
//         }
//     }
    

//     function checkDraw() {
//         if (count === 9 && !lock) {
//             titleRef.current.innerHTML = "It's a <span>Draw!</span>";
//             setLock(true);
//         }
//     }
    
//     // const won = (winner) => 
//     function won(winner){ // winner -> last clicked element
//         setLock(true);
//         if(winner==='x'){
//             titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> <span> Wins</span>`
//         }
//         else{
//             titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> <span> Wins</span>`
//         }
//     }
//     function reset(){
//         titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`;
//         setLock(false);
//         setCount(0);        
//         data.fill("");
//         boxArray.map((e)=>{
//             e.current.innerHTML = "";
//         });
//     }
//   return (
//     <div className="container">
//         <h1 className="title" ref={titleRef}>
//             Tic Tac Toe Game In <span>React</span>
//         </h1>
//         <div className="board">
//             <div className="row1">
//                 {/* e : it represents the event object */}
//                 <div className="boxes" ref={boxArray[0]} onClick={(e)=>{toggle(e,0)}}></div>
//                 <div className="boxes" ref={boxArray[1]} onClick={(e)=>{toggle(e,1)}}></div>
//                 <div className="boxes" ref={boxArray[2]} onClick={(e)=>{toggle(e,2)}}></div>
//             </div>
//             <div className="row2">
//                 <div className="boxes" ref={boxArray[3]} onClick={(e)=>{toggle(e,3)}}></div>
//                 <div className="boxes" ref={boxArray[4]} onClick={(e)=>{toggle(e,4)}}></div>
//                 <div className="boxes" ref={boxArray[5]} onClick={(e)=>{toggle(e,5)}}></div>
//             </div>
//             <div className="row3">
//                 <div className="boxes" ref={boxArray[6]} onClick={(e)=>{toggle(e,6)}}></div>
//                 <div className="boxes" ref={boxArray[7]} onClick={(e)=>{toggle(e,7)}}></div>
//                 <div className="boxes" ref={boxArray[8]} onClick={(e)=>{toggle(e,8)}}></div>
//             </div>
//         </div>
//         <button className="reset" onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default TicTacToe

import React, { useRef, useState } from 'react'
import './tictactoe.css'
import circle_icon from '../assets/blue_o.png'
import cross_icon from '../assets/yellow_x.svg.png'

let data = ["","","","","","","","",""];
const initializeBoxArray = () => {
    return Array(9).fill(null).map(() => useRef(null));
};

const TicTacToe = () => {

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);
    let boxArray = initializeBoxArray();

    const createImageElement = (src) => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        return imgElement;
    };

    // const toggle = (e, index) => 
    function toggle(e,index){
        if(lock || data[index] !== ""){
            return 0;
        }
        if(count % 2 === 0){
            e.target.innerHTML = '';
            e.target.appendChild(createImageElement(cross_icon));
            data[index] = "x";
            setCount(++count);
        }
        else{
            // e.target.innerHTML = `<img src=${circle_icon}'>`; // this line not working
            const imgElement = document.createElement('img');
            imgElement.src = circle_icon;
            e.target.appendChild(imgElement);
            data[index] = "o";
            setCount(++count);
        }

        checkWin();
    }

    // const checkWin = () => 
    function checkWin() {
        if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
            won(data[0]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
            won(data[1]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
            won(data[2]);
        } else if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
            won(data[0]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
            won(data[3]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
            won(data[6]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
            won(data[0]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
            won(data[2]);
        } else if(count === 9){
            checkDraw();
        }
    }

    function checkDraw() {
        if (count === 9 && !lock) {
            titleRef.current.innerHTML = "It's a <span>Draw!</span>";
            setLock(true);
        }
    }
    
    // const won = (winner) => 
    function won(winner){ // winner -> last clicked element
        setLock(true);
        if(winner==='x'){
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> <span> Wins</span>`
        }
        else{
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> <span> Wins</span>`
        }
    }
    function reset(){
        titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`;
        setLock(false);
        setCount(0);
        // data = ["","","","","","","","",""];
        data.fill("");
        boxArray.map((e)=>{
            e.current.innerHTML = "";
        });
    }
  return (
    <div className="container">
        <h1 className="title" ref={titleRef}>
            Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="board">
            <div className="row1">
                {/* e : it represents the event object */}
                <div className="boxes" ref={boxArray[0]} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={boxArray[1]} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={boxArray[2]} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={boxArray[3]} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={boxArray[4]} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={boxArray[5]} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={boxArray[6]} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={boxArray[7]} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={boxArray[8]} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTacToe