var makeRain = function(){
  
  var minY = 1100;
  var maxY = 1300;

  var minD = 4000;
  var maxD = 6000;



  function generateRandomY(minY, maxY) {
    return Math.floor(minY + Math.random()*(maxY + 1 - minY))
  }

  function generateRandomDuration(minD, maxD) {
    return Math.floor(minD + Math.random()*(maxD + 1 - minD))
  }

  anime({
    targets: '.droplet1',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet2',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet3',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet4',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet5',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet6',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet7',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet8',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet9',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
  anime({
    targets: '.droplet10',
    translateY: generateRandomY(minY, maxY),
    duration: generateRandomDuration(minD, maxD),
    loop:true,
    easing: 'easeInOutExpo',
  });
}

