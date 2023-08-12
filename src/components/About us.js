import React, { useState } from 'react'

export default function Aboutus(props) {


  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
    cursor:"pointer"
  })
  const [btntext, setbtntext] = useState("Light Mode")

  // const changecolor = () => {

  //   if (mystyle.color == "white") {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })

  //     setbtntext("Dark Mode")
  //   }
  //   else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "#333333"
  //     })
  //     setbtntext("Light Mode")
  //   }
  // }

  return (
    <div className="container rounded"  style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'dark'}}>
      <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'light'}}>
              {props.button1}
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'light'}}>
            <div className={`accordion-body`}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'light'}}>
          <h2 className="accordion-header" >
            <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'light'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {props.button2}
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle}>
            <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'light'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              {props.button3}
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'light'}}data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        {/* <button className='btn btn-secondary my-3 mx-1' onClick={changecolor}>{btntext}</button> */}
      </div>
    </div>
  )
}
