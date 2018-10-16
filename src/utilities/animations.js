import React from 'react'
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

export class AnimationFade extends React.Component {
    
  async animate(type, time) {
    await this.animation.animate(type, time);
  }

  render() {
    const {fadeDirection, duration, children, style} = this.props;        
    const setFade = fadeDirection || 'fadeIn';  
    const setDuration = duration || 1000;
    return (
      <Animatable.View
        animation={setFade}
        duration={setDuration}
        useNativeDriver={true}
        ref={ref => this.animation = ref}
        style={style}
      >
        {children}
      </Animatable.View>
    );
  }
}

AnimationFade.propTypes = {
  fadeDirection: PropTypes.string,
  duration: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  style: PropTypes.object,
}
