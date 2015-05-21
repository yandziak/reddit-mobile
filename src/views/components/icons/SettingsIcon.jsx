import React from 'react';
import SVG from '../../components/SVG';

class SettingsIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._play = this._play.bind(this);
  }

  render() {
    return (
      <SVG className='SVG-icon SettingsIcon' fallbackIcon='icon-settings-circled'>
        <circle className='SVG-fill' cx={SVG.ICON_SIZE / 2} cy={SVG.ICON_SIZE / 2} r={SVG.ICON_SIZE / 2}/>
        <path className="SVG-fill-bg" d="M15.69523,11.260518c0.089498-0.406087,0.138103-0.827494,0.138103-1.260477 S15.784728,9.14565,15.69523,8.739563l-1.167787,0.087584c-0.2919,0.021893-0.564369-0.146331-0.676021-0.41692 c-0.00124-0.003004-0.002482-0.006005-0.003729-0.009006c-0.112376-0.270535-0.039011-0.582139,0.183046-0.773211l0.887166-0.763376 c-0.457458-0.716003-1.066507-1.325053-1.782491-1.782501l-0.763391,0.887176 c-0.191074,0.222057-0.502681,0.295419-0.773215,0.183038c-0.003-0.001246-0.006001-0.002489-0.009006-0.003728 c-0.270579-0.111654-0.438796-0.384116-0.416905-0.676008L11.260477,4.3048c-0.406087-0.089488-0.827495-0.138092-1.260478-0.138092 S9.145609,4.215312,8.739522,4.3048L8.8271,5.472611c0.02189,0.291892-0.146326,0.564354-0.416906,0.676008 C8.40719,6.149858,8.404189,6.151101,8.401189,6.152347C8.130654,6.264728,7.819048,6.191366,7.627974,5.969309L6.864583,5.082133 C6.1486,5.539581,5.53955,6.148631,5.082092,6.864634L5.969258,7.62801C6.191315,7.819083,6.26468,8.130686,6.152304,8.401221 C6.151058,8.404221,6.149815,8.407223,6.148576,8.410226c-0.111651,0.27059-0.384121,0.438812-0.676021,0.416921L4.304768,8.739563 C4.215271,9.14565,4.166666,9.567058,4.166666,10.000041s0.048604,0.85439,0.138102,1.260477l1.167796-0.087584 c0.291894-0.021892,0.564359,0.146327,0.67601,0.41691c0.001239,0.003003,0.002482,0.006005,0.003728,0.009005 c0.112377,0.270535,0.039012,0.582138-0.183046,0.773209l-0.887185,0.763379C5.539509,13.85144,6.1486,14.4605,6.864583,14.917949 l0.763391-0.887177c0.191074-0.222056,0.502681-0.295419,0.773215-0.183038c0.003,0.001246,0.006001,0.002489,0.009005,0.003728 c0.27058,0.111654,0.438796,0.384116,0.416906,0.676008l-0.087578,1.167811c0.406087,0.089488,0.827494,0.138092,1.260477,0.138092 s0.854391-0.048604,1.260478-0.138092l-0.087578-1.167811c-0.021891-0.291892,0.146326-0.564354,0.416905-0.676008 c0.003004-0.001239,0.006005-0.002481,0.009006-0.003728c0.270535-0.112381,0.582141-0.039019,0.773215,0.183038l0.763391,0.887177 c0.715983-0.457449,1.325073-1.066508,1.782512-1.782512l-0.887185-0.763379 c-0.222058-0.191071-0.295424-0.502673-0.183045-0.773208c0.001245-0.003,0.002488-0.006002,0.003728-0.009006 c0.11165-0.270583,0.384116-0.438802,0.67601-0.41691L15.69523,11.260518z M9.999999,12.916707 c-1.610836,0-2.916667-1.305841-2.916667-2.916666c0-1.610837,1.30583-2.916667,2.916667-2.916667 s2.916667,1.30583,2.916667,2.916667C12.916666,11.610866,11.610836,12.916707,9.999999,12.916707z"/>
      </SVG>
    );
  }

  componentDidUpdate(prevProps) {
    if (!SVG.ENABLED) {
      return;
    }
    var played = prevProps.played;
    if (typeof played !== 'undefined' && played !== this.props.played && this.props.played === true) {
      this._play();
    }
  }

  _play() {
    if (this.props.played) {
      TweenLite.from(React.findDOMNode(this), 0.3, {rotation: -360 / 8, ease: Linear.easeNone, onComplete: this._play, clearProps: 'all'});
    }
  }
}

SettingsIcon.defaultProps = {
  played: false,
};

export default SettingsIcon;
