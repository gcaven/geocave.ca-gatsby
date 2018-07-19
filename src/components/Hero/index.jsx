import React from 'react';
import './styles.scss';
 
// .rgb-red {
//   color: red;
//   transform: translate3d(0, -3px, 0);
// }

// .rgb-green {
//   color: lime;
//   transform: translate3d(3px, 3px, 0);
// }

// .rgb-blue {
//   color: blue;
//   transform: translate3d(-3px, 3px, 0);
// }

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      style : {
        transition: "1000ms cubic-bezier(.03,.98,.52,.99)"
      }
    }
    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
    this.updateCall = null;
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.updateCall);
  }

  reset = () => {
    window.requestAnimationFrame(() => {
      this.setState(Object.assign({}, this.state, {
        style: {
          ...this.state.style,
          transform : "perspective(5000px) rotateX(0deg) rotateY(0deg)" 
        }
      }))
    });
  }


  getValues = (event) => {
    const x = (event.nativeEvent.clientX - this.left) / this.width;
    const y = (event.nativeEvent.clientY - this.top) / this.height;
    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);

    const max = 50;

    const tiltX = (max / 2 - _x * max).toFixed(2);
    const tiltY = (_y * max - max / 2).toFixed(2);

    const percentageTiltedX = _x * 100;
    const percentageTiltedY = _y * 100;

    return {tiltX, tiltY, percentageTiltedX, percentageTiltedY};
  }

  updateElementPosition = () => {
    const rect = this.node.getBoundingClientRect();
    this.width = this.node.offsetWidth;
    this.height = this.node.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  update = (event) => {
    let values = this.getValues(event);

    this.setState(Object.assign({}, this.state, {
      style: {
        ...this.state.style,
        transform: `perspective(5000px) rotateX(${values.tiltY}deg) rotateY(${values.tiltX}deg)`
      }
    }));

    this.updateCall = null;
  }

  onMouseEnter = () => {
    this.updateElementPosition();
    this.setState(Object.assign({}, this.state, {
      style: {
        ...this.state.style,
        willChange: 'transform'
      }
    }));
  }

  onMouseMove = (event) => {
    event.persist();
    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall);
    }
    this.event = event;
    this.updateCall = requestAnimationFrame(this.update.bind(this, event));
  }

  onMouseLeave = () => {
    this.reset();
  }

  render() {
    return (
      <div className="hero__container">
        <div 
          className="hero"
          style={this.state.style}
            ref={(node) => {
              this.node = node
            }}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onMouseMove={this.onMouseMove}
        >
          <div className="hero__backdrop"></div>
          <svg className="first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#212121" points="0,0 43.15,0 23.15,100 0,100"/>
          </svg>
          <svg className="second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#21212199" points="0,0 53.15,0 33.15,100 0,100"/>
          </svg>
          <svg className="third" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#21212177" points="0,0 63.15,0 43.15,100 0,100"/>
          </svg>
          <svg className="fourth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#21212155" points="0,0 73.15,0 53.15,100 0,100"/>
          </svg>
          <svg className="fifth" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#21212133" points="0,0 83.15,0 63.15,100 0,100"/>
          </svg>
          <h1 className="rgb-red">Geoffrey Caven</h1>
          <h1 className="rgb-green">Geoffrey Caven</h1>
          <h1 className="rgb-blue">Geoffrey Caven</h1>
          <h2 className="rgb-red">Web & Mobile Developer</h2>
          <h2 className="rgb-green">Web & Mobile Developer</h2>
          <h2 className="rgb-blue">Web & Mobile Developer</h2>
        </div>
      </div>
    );
  }
}