// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

function countPositivesSumNegatives(input) {
  if (!input || !input.length) {
    return []
  }

  let positives = [],
      negatives = []

  positives.push(input.filter((num) => num > 0).length)
  negatives.push(input.filter((num) => num < 0).reduce((pv, cv) => pv + cv, 0))

  return [...positives, ...negatives]
}

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
let anotherTestData = [17.100776901116753,
                       91.12219462514209,
                       59.807559430116775,
                       9.082909121669669,
                       28.906110255702266,
                       86.18056661646666,
                       34.56869448198157,
                       81.67878736523339,
                       87.11283594570871,
                       9.160422642794375,
                       26.143452832866387,
                       67.04129570210017,
                       34.477611667077966,
                       91.25923226928612,
                       18.097551347250306,
                       13.61959412637801,
                       5.655969642296044,
                       45.94907261126053,
                       97.5205235501873,
                       18.981818226560353,
                       92.01276036234279,
                       30.756846702292705,
                       4.762394178690976,
                       89.5402166360495,
                       78.29067798010266,
                       43.98638673533504,
                       43.09552013793905,
                       72.46417705752597,
                       40.0684488352526,
                       44.977316290082236,
                       51.05120721015246,
                       86.48888082771013,
                       68.29772507512489,
                       23.83575551844872,
                       8.626560033454433,
                       30.910318123071967,
                       50.56727175120095,
                       62.39592442924968,
                       33.20446350729125,
                       17.57991795698881,
                       88.33379928909217,
                       49.46432380790602,
                       25.546757676128905,
                       32.97161952974059,
                       9.809207458144442,
                       55.62922681974876,
                       6.195026702362383,
                       87.45540812305272,
                       33.05291195115523,
                       0.5615374960601827,
                       6.550805105029611,
                       82.85730890442107,
                       96.95449831629016,
                       18.053103173940176,
                       46.55859166821272,
                       28.09048856214509,
                       17.96813143268363,
                       51.79846731991482,
                       28.745948607505877]
console.log(countPositivesSumNegatives(anotherTestData))