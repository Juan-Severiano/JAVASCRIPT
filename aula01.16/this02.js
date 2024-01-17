let comparaThis = function(params) {
  console.log(this === params);
}

comparaThis(global);

const obj = {}