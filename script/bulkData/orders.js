const orders = [
  {status: 'IN_CART', userId: 1},
  {status: 'IN_CART', userId: 2},
  {status: 'IN_CART', userId: 3},
  {status: 'IN_CART', userId: 4},
  {status: 'IN_CART', userId: 5},
  {status: 'IN_CART', userId: 6},
  {status: 'IN_CART', userId: 7},
  {status: 'IN_CART', userId: 8},
  {status: 'IN_CART', userId: 9},
  {status: 'IN_CART', userId: 10},
  {status: 'IN_CART', userId: 11},
  {status: 'IN_CART', userId: 12},
  {status: 'IN_CART', userId: 13},
  {status: 'IN_CART', userId: 14},
  {status: 'IN_CART', userId: 15},
  {status: 'IN_CART', userId: 16},
  {status: 'IN_CART', userId: 17},
  {status: 'IN_CART', userId: 18},
  {status: 'IN_CART', userId: 19},
  {status: 'IN_CART', userId: 20},
  {status: 'IN_CART', userId: 21},
  {status: 'IN_CART', userId: 22},
  {status: 'IN_CART', userId: 23},
  {status: 'IN_CART', userId: 24},
  {status: 'IN_CART', userId: 25},
  {status: 'IN_CART', userId: 26},
  {status: 'IN_CART', userId: 27},
  {status: 'IN_CART', userId: 28},
  {status: 'IN_CART', userId: 29},
  {status: 'IN_CART', userId: 30},
  {status: 'IN_CART', userId: 31},
  {status: 'IN_CART', userId: 32},
  {status: 'IN_CART', userId: 33},
  {status: 'IN_CART', userId: 34},
  {status: 'IN_CART', userId: 35},
  {status: 'IN_CART', userId: 36},
  {status: 'IN_CART', userId: 37},
  {status: 'IN_CART', userId: 38},
  {status: 'IN_CART', userId: 39},
  {status: 'IN_CART', userId: 40},
  {status: 'IN_CART', userId: 41},
  {status: 'IN_CART', userId: 42},
  {status: 'IN_CART', userId: 43},
  {status: 'IN_CART', userId: 44},
  {status: 'IN_CART', userId: 45},
  {status: 'IN_CART', userId: 46},
  {status: 'IN_CART', userId: 47},
  {status: 'IN_CART', userId: 48},
  {status: 'IN_CART', userId: 49},
  {status: 'IN_CART', userId: 50},
  {status: 'IN_CART', userId: 51},
  {status: 'IN_CART', userId: 52},
  {status: 'IN_CART', userId: 53},
  {status: 'IN_CART', userId: 54},
  {status: 'IN_CART', userId: 55},
  {status: 'IN_CART', userId: 56},
  {status: 'IN_CART', userId: 57},
  {status: 'IN_CART', userId: 58},
  {status: 'IN_CART', userId: 59},
  {status: 'IN_CART', userId: 60},
  {status: 'IN_CART', userId: 61},
  {status: 'IN_CART', userId: 62},
  {status: 'IN_CART', userId: 63},
  {status: 'IN_CART', userId: 64},
  {status: 'IN_CART', userId: 65},
  {status: 'IN_CART', userId: 66},
  {status: 'IN_CART', userId: 67},
  {status: 'IN_CART', userId: 68},
  {status: 'IN_CART', userId: 69},
  {status: 'IN_CART', userId: 70},
  {status: 'IN_CART', userId: 71},
  {status: 'IN_CART', userId: 72},
  {status: 'IN_CART', userId: 73},
  {status: 'IN_CART', userId: 74},
  {status: 'IN_CART', userId: 75},
  {status: 'IN_CART', userId: 76},
  {status: 'IN_CART', userId: 77},
  {status: 'IN_CART', userId: 78},
  {status: 'IN_CART', userId: 79},
  {status: 'IN_CART', userId: 80},
  {status: 'IN_CART', userId: 81},
  {status: 'IN_CART', userId: 82},
  {status: 'IN_CART', userId: 83},
  {status: 'IN_CART', userId: 84},
  {status: 'IN_CART', userId: 85},
  {status: 'IN_CART', userId: 86},
  {status: 'IN_CART', userId: 87},
  {status: 'IN_CART', userId: 88},
  {status: 'IN_CART', userId: 89},
  {status: 'IN_CART', userId: 90},
  {status: 'IN_CART', userId: 91},
  {status: 'IN_CART', userId: 92},
  {status: 'IN_CART', userId: 93},
  {status: 'IN_CART', userId: 94},
  {status: 'IN_CART', userId: 95},
  {status: 'IN_CART', userId: 96},
  {status: 'IN_CART', userId: 97},
  {status: 'IN_CART', userId: 98},
  {status: 'IN_CART', userId: 99},
  {status: 'IN_CART', userId: 100},
  {status: 'PROCESSING', userId: 1},
  {status: 'PROCESSING', userId: 2},
  {status: 'PROCESSING', userId: 3},
  {status: 'PROCESSING', userId: 4},
  {status: 'PROCESSING', userId: 5},
  {status: 'PROCESSING', userId: 6},
  {status: 'PROCESSING', userId: 7},
  {status: 'PROCESSING', userId: 8},
  {status: 'PROCESSING', userId: 9},
  {status: 'PROCESSING', userId: 10},
  {status: 'PROCESSING', userId: 11},
  {status: 'PROCESSING', userId: 12},
  {status: 'PROCESSING', userId: 13},
  {status: 'PROCESSING', userId: 14},
  {status: 'PROCESSING', userId: 15},
  {status: 'PROCESSING', userId: 16},
  {status: 'PROCESSING', userId: 17},
  {status: 'PROCESSING', userId: 18},
  {status: 'PROCESSING', userId: 19},
  {status: 'PROCESSING', userId: 20},
  {status: 'PROCESSING', userId: 21},
  {status: 'PROCESSING', userId: 22},
  {status: 'PROCESSING', userId: 23},
  {status: 'PROCESSING', userId: 24},
  {status: 'PROCESSING', userId: 25},
  {status: 'PROCESSING', userId: 26},
  {status: 'PROCESSING', userId: 27},
  {status: 'PROCESSING', userId: 28},
  {status: 'PROCESSING', userId: 29},
  {status: 'PROCESSING', userId: 30},
  {status: 'PROCESSING', userId: 31},
  {status: 'PROCESSING', userId: 32},
  {status: 'PROCESSING', userId: 33},
  {status: 'PROCESSING', userId: 34},
  {status: 'PROCESSING', userId: 35},
  {status: 'PROCESSING', userId: 36},
  {status: 'PROCESSING', userId: 37},
  {status: 'PROCESSING', userId: 38},
  {status: 'PROCESSING', userId: 39},
  {status: 'PROCESSING', userId: 40},
  {status: 'PROCESSING', userId: 41},
  {status: 'PROCESSING', userId: 42},
  {status: 'PROCESSING', userId: 43},
  {status: 'PROCESSING', userId: 44},
  {status: 'PROCESSING', userId: 45},
  {status: 'PROCESSING', userId: 46},
  {status: 'PROCESSING', userId: 47},
  {status: 'PROCESSING', userId: 48},
  {status: 'PROCESSING', userId: 49},
  {status: 'PROCESSING', userId: 50},
  {status: 'PROCESSING', userId: 51},
  {status: 'PROCESSING', userId: 52},
  {status: 'PROCESSING', userId: 53},
  {status: 'PROCESSING', userId: 54},
  {status: 'PROCESSING', userId: 55},
  {status: 'PROCESSING', userId: 56},
  {status: 'PROCESSING', userId: 57},
  {status: 'PROCESSING', userId: 58},
  {status: 'PROCESSING', userId: 59},
  {status: 'PROCESSING', userId: 60},
  {status: 'PROCESSING', userId: 61},
  {status: 'PROCESSING', userId: 62},
  {status: 'PROCESSING', userId: 63},
  {status: 'PROCESSING', userId: 64},
  {status: 'PROCESSING', userId: 65},
  {status: 'PROCESSING', userId: 66},
  {status: 'PROCESSING', userId: 67},
  {status: 'PROCESSING', userId: 68},
  {status: 'PROCESSING', userId: 69},
  {status: 'PROCESSING', userId: 70},
  {status: 'PROCESSING', userId: 71},
  {status: 'PROCESSING', userId: 72},
  {status: 'PROCESSING', userId: 73},
  {status: 'PROCESSING', userId: 74},
  {status: 'PROCESSING', userId: 75},
  {status: 'PROCESSING', userId: 76},
  {status: 'PROCESSING', userId: 77},
  {status: 'PROCESSING', userId: 78},
  {status: 'PROCESSING', userId: 79},
  {status: 'PROCESSING', userId: 80},
  {status: 'PROCESSING', userId: 81},
  {status: 'PROCESSING', userId: 82},
  {status: 'PROCESSING', userId: 83},
  {status: 'PROCESSING', userId: 84},
  {status: 'PROCESSING', userId: 85},
  {status: 'PROCESSING', userId: 86},
  {status: 'PROCESSING', userId: 87},
  {status: 'PROCESSING', userId: 88},
  {status: 'PROCESSING', userId: 89},
  {status: 'PROCESSING', userId: 90},
  {status: 'PROCESSING', userId: 91},
  {status: 'PROCESSING', userId: 92},
  {status: 'PROCESSING', userId: 93},
  {status: 'PROCESSING', userId: 94},
  {status: 'PROCESSING', userId: 95},
  {status: 'PROCESSING', userId: 96},
  {status: 'PROCESSING', userId: 97},
  {status: 'PROCESSING', userId: 98},
  {status: 'PROCESSING', userId: 99},
  {status: 'PROCESSING', userId: 100},
  {status: 'COMPLETED', userId: 1},
  {status: 'COMPLETED', userId: 2},
  {status: 'COMPLETED', userId: 3},
  {status: 'COMPLETED', userId: 4},
  {status: 'COMPLETED', userId: 5},
  {status: 'COMPLETED', userId: 6},
  {status: 'COMPLETED', userId: 7},
  {status: 'COMPLETED', userId: 8},
  {status: 'COMPLETED', userId: 9},
  {status: 'COMPLETED', userId: 10},
  {status: 'COMPLETED', userId: 11},
  {status: 'COMPLETED', userId: 12},
  {status: 'COMPLETED', userId: 13},
  {status: 'COMPLETED', userId: 14},
  {status: 'COMPLETED', userId: 15},
  {status: 'COMPLETED', userId: 16},
  {status: 'COMPLETED', userId: 17},
  {status: 'COMPLETED', userId: 18},
  {status: 'COMPLETED', userId: 19},
  {status: 'COMPLETED', userId: 20},
  {status: 'COMPLETED', userId: 21},
  {status: 'COMPLETED', userId: 22},
  {status: 'COMPLETED', userId: 23},
  {status: 'COMPLETED', userId: 24},
  {status: 'COMPLETED', userId: 25},
  {status: 'COMPLETED', userId: 26},
  {status: 'COMPLETED', userId: 27},
  {status: 'COMPLETED', userId: 28},
  {status: 'COMPLETED', userId: 29},
  {status: 'COMPLETED', userId: 30},
  {status: 'COMPLETED', userId: 31},
  {status: 'COMPLETED', userId: 32},
  {status: 'COMPLETED', userId: 33},
  {status: 'COMPLETED', userId: 34},
  {status: 'COMPLETED', userId: 35},
  {status: 'COMPLETED', userId: 36},
  {status: 'COMPLETED', userId: 37},
  {status: 'COMPLETED', userId: 38},
  {status: 'COMPLETED', userId: 39},
  {status: 'COMPLETED', userId: 40},
  {status: 'COMPLETED', userId: 41},
  {status: 'COMPLETED', userId: 42},
  {status: 'COMPLETED', userId: 43},
  {status: 'COMPLETED', userId: 44},
  {status: 'COMPLETED', userId: 45},
  {status: 'COMPLETED', userId: 46},
  {status: 'COMPLETED', userId: 47},
  {status: 'COMPLETED', userId: 48},
  {status: 'COMPLETED', userId: 49},
  {status: 'COMPLETED', userId: 50},
  {status: 'COMPLETED', userId: 51},
  {status: 'COMPLETED', userId: 52},
  {status: 'COMPLETED', userId: 53},
  {status: 'COMPLETED', userId: 54},
  {status: 'COMPLETED', userId: 55},
  {status: 'COMPLETED', userId: 56},
  {status: 'COMPLETED', userId: 57},
  {status: 'COMPLETED', userId: 58},
  {status: 'COMPLETED', userId: 59},
  {status: 'COMPLETED', userId: 60},
  {status: 'COMPLETED', userId: 61},
  {status: 'COMPLETED', userId: 62},
  {status: 'COMPLETED', userId: 63},
  {status: 'COMPLETED', userId: 64},
  {status: 'COMPLETED', userId: 65},
  {status: 'COMPLETED', userId: 66},
  {status: 'COMPLETED', userId: 67},
  {status: 'COMPLETED', userId: 68},
  {status: 'COMPLETED', userId: 69},
  {status: 'COMPLETED', userId: 70},
  {status: 'COMPLETED', userId: 71},
  {status: 'COMPLETED', userId: 72},
  {status: 'COMPLETED', userId: 73},
  {status: 'COMPLETED', userId: 74},
  {status: 'COMPLETED', userId: 75},
  {status: 'COMPLETED', userId: 76},
  {status: 'COMPLETED', userId: 77},
  {status: 'COMPLETED', userId: 78},
  {status: 'COMPLETED', userId: 79},
  {status: 'COMPLETED', userId: 80},
  {status: 'COMPLETED', userId: 81},
  {status: 'COMPLETED', userId: 82},
  {status: 'COMPLETED', userId: 83},
  {status: 'COMPLETED', userId: 84},
  {status: 'COMPLETED', userId: 85},
  {status: 'COMPLETED', userId: 86},
  {status: 'COMPLETED', userId: 87},
  {status: 'COMPLETED', userId: 88},
  {status: 'COMPLETED', userId: 89},
  {status: 'COMPLETED', userId: 90},
  {status: 'COMPLETED', userId: 91},
  {status: 'COMPLETED', userId: 92},
  {status: 'COMPLETED', userId: 93},
  {status: 'COMPLETED', userId: 94},
  {status: 'COMPLETED', userId: 95},
  {status: 'COMPLETED', userId: 96},
  {status: 'COMPLETED', userId: 97},
  {status: 'COMPLETED', userId: 98},
  {status: 'COMPLETED', userId: 99},
  {status: 'COMPLETED', userId: 100}
]

module.exports = orders
