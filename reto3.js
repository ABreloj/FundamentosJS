function distributeGifts(packOfGifts, reindeers) {
    let totalGifts = 0;
    let totalRenos = 0;

    packOfGifts.forEach(
        gift => totalGifts=gift.length
    );
    
    reindeers.forEach(
        reinder => console.log(reinder.length*2)
    );

    return 0    
  }

  const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


console.log(distributeGifts(packOfGifts, reindeers)) 