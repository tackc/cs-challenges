
function fibonacci(place) {
  if (place <= 0) {
    return 0;
  } else if (place <= 2) {
    return 1
  } else {
    return fibonacci(place - 1) + fibonacci (place - 2)
  }
};

module.exports = fibonacci;
