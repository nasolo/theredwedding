export function calcRatio(dimentions) {
    const dims = dimentions
      .toLowerCase()
      .split('x');
  
    return (dims[1] / dims[0]) * 100;
  }