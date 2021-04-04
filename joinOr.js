let validChoices = [1, 2, 3, 4, 5, 6, 8, 9];

// obj is the context for `joinOr`; replace it with the correct context.
obj.joinOr([1, 2])                   //# => "1 or 2"
obj.joinOr([1, 2, 3])                //# => "1, 2, or 3"
obj.joinOr([1, 2, 3], '; ')          //# => "1; 2; or 3"
obj.joinOr([1, 2, 3], ', ', 'and')   //# => "1, 2, and 3"

function joinOr(choices, delimitator = ', ', lastWord = 'or') {
  let result = [];
  //let thirdFromEndIdx = choices.length - 3;
  let secondFromEndIdx = choices.length - 2;
  for (let idx = 0; idx < secondFromEndIdx; idx += 1) {
    result.push(choices[idx], delimitator);
  }
  result.push(choices[secondFromEndIdx], ' ', lastWord, ' ', choices[choices.length - 1]);
  return result.join('');
}

joinOr([1, 2]);

// Iterate array
  // create newArr
  // for all values from 0 to 2 before the end, push the value + the deliminator if there is one,
    // if no deliminator, add ', '
  // for the value 2nd to the last, push the value + 'lastWord' + last value
    //if no 'lastWord', push ' or ' as lastWord