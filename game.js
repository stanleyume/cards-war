function war(A, B) {
  // E.g
  // A = 'A586QK';
  // B = 'JJ653K';

  let pointsA = 0;
  let pointsB = 0;

  const deck = {
    A: 14,
    K: 13,
    Q: 12,
    J: 11,
    T: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2
  }

  let N = A.length;

  let arrA = A.split('');
  let arrB = B.split('');

  arrA.forEach(function(v, i){
    var diff = deck[arrA[i]] - deck[arrB[i]];
    if( diff > 0)
      pointsA++;
    else if(diff < 0)
      pointsB++;
  });

  return [pointsA, pointsB];
}