

function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    let count =0;
    for (let i = 0; i < name.length; i++) {

      if (!isNaN(name[i])) {
        count += 1;
      }
    }

  return count > 0 ? true : false;
}



