/* Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. 
With 3 balls you can build a 2-level triangle, etc. */

function pyramid(balls) {
    let sum = 0;
    for (let i = 1; balls >= i; i++) {
      sum++;
      balls -= i;
    }
    return sum;
}