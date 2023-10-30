const isScreenInPortrait = () => {
  if (window && window.screen && window.screen.orientation && window.screen.orientation.type) {
    if (window.screen.orientation.type.includes('portrait')) {
      return 1;
    }
    return 0;
  } else {
    if (window.screen.height > window.screen.width) {
      return 1;
    }
    return 0;
  }
};

export default isScreenInPortrait;
