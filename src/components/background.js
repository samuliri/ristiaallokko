import React from "react";
import * as THREE from 'three'
import Waves from '../../static/vanta.waves.min'

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = Waves({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x828270,
        shininess: 10.00,
        waveHeight: 20.00,
        waveSpeed: 0.50,
        THREE: THREE
        //zoom: 0.65
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return (
        <div>
            <div id="bg" ref={this.vantaRef}></div>
            <div id="bg-filter"></div>
        </div>
    );
  }
}

export default Background;
