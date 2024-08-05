import React from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white',
    //    })
    let myStyle = {
      color: props.mode === 'dark'?'white':'#00273f',
      backgroundColor: props.mode === 'dark'?'#00273f':'white',
      // border:'2px solid',
      // borderColor: props.mode === 'dark'?'white':'#00273f'
    }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#00273f'}}> 
    <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 classNameName="accordion-header">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              <strong>Analze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            An Online Writing Sample Content and Readability Analyzer: analyze your writing and get statistics on words you use most frequently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
             <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            It means that you can use something without having to pay to use it.

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Overall, compatibility mode is an essential feature that ensures smooth transitions
             between different software versions, enables legacy applications to continue functioning,
              and facilitates the preservation of data and productivity in various computing 
              environments.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
