import React, { Component } from 'react';
class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    console.log(this.canvasRef);
    this.ctx = this.canvasRef.getContext('2d');
    const { width, height } = this.ctx.canvas;
    this.ctx.clearRect(0, 0, width, height);
    const ctx = this.ctx;
    const angle = Math.PI / 180;
   
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'
    let lineGrad = ctx.createLinearGradient(0, 0, 160, 160);
    lineGrad.addColorStop(0, '#B255FF');
    lineGrad.addColorStop(1, '#074CFF');
    // for (let i = 0; i <= 360; i+=90) {
    //   this.drawArc(ctx, lineGrad, Math.PI / 180 * i - Math.PI / 180 * (90+10), Math.PI / 180 * i + Math.PI / 180 * (90 - 20))
    // } 
    this.drawArc(ctx, lineGrad, angle * -90, 0)
    this.drawArc(ctx, lineGrad, angle * 10, angle * 90)
    this.drawArc(ctx, lineGrad, angle * 100, angle * 135)
    this.drawArc(ctx, lineGrad, angle * 145, angle * 180)
    this.drawArc(ctx, lineGrad, angle * 190, angle * 250)
  }
  drawArc = (ctx, lineGrad,start, end) => {
    ctx.strokeStyle = lineGrad
    ctx.beginPath();
    ctx.arc(80, 80, 60, start, end)
    ctx.stroke();
  }
  render() { 
    return ( 
      <div>
        <canvas ref={node => this.canvasRef = node} width="160" height="160"></canvas>
      </div>
     );
  }
}
 
export default Circle;