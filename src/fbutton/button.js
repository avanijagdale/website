import React from  "react";

export class Button extends React.Component {
  clicked (){
    alert("Hello friends");
  }
  render (){
    return(
    <div>
      <button onClick={this.clicked}>Click Me!</button>
    </div>
    );
  }
}
