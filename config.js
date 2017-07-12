function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

define('yummly_service_url', 'http://api.yummly.com/v1/api/recipes');

define('yummly_host', 'api.yummly.com');

define('yummly_pathname', '/v1/api/recipes');

define('yummly_app_id', '1ec27dec');

define('yummly_app_key', 'ef78a12f28358f52077bb10d670efcee');

define({
    'metadata': {
        'ingredient': 'ingredient',
        'allergy': 'allergy',
        'diet': 'diet',
        'cuisine': 'cuisine',
        'course': 'course',
        'holiday': 'holiday'
    }
});

define({
    'metadata': ['ingredient', 'allergy', 'diet', 'cuisine']
});

define('queryParams', {
    'query': 'q',
    'allowedIngredient': 'allowedIngredient',
    'allowedAllergy': 'allowedAllergy',
    'allowedDiet': 'allowedDiet',
    'allowedCuisine': 'allowedCuisine',
    'allowedCourse': 'allowedCourse',
    'excludedCourse': 'excludedCourse',
    'allowedHoliday': 'allowedHoliday',
    'maxTotalTimeInSeconds': 'maxTotalTimeInSeconds',
    'nutrition': 'YET TO SET THE VALUE',
    'maxResult': 'maxResult',
    'start': 'start',
    'flavor': 'YET TO SET THE VALUE',
    'facetField': 'facetField'
});

// backup : object with original params

// define('queryParams', {
//     'query': 'q',
//     'allowedIngredient': 'allowedIngredient',
//     'excludedIngredient': 'excludedIngredient',
//     'allowedAllergy': 'allowedAllergy',
//     'allowedDiet': 'allowedDiet',
//     'allowedCuisine': 'allowedCuisine',
//     'excludedCuisine': 'excludedCuisine',
//     'allowedCourse': 'allowedCourse',
//     'excludedCourse': 'excludedCourse',
//     'allowedHoliday': 'allowedHoliday',
//     'excludedHoliday': 'excludedHoliday',
//     'maxTotalTimeInSeconds': 'maxTotalTimeInSeconds',
//     'nutrition': 'YET TO SET THE VALUE',
//     'maxResult': 'maxResult',
//     'start': 'start',
//     'flavor': 'YET TO SET THE VALUE',
//     'facetField': 'facetField'
// });




// Attributes 

// use metadata api to find allowed cources/ allowed holidays etc

// https://api.yummly.com/v1/api/meta_info_needed_for?app_id=APP_ID&app_key=APP_KEY

// example 
//http://api.yummly.com/v1/api/recipes?_app_id=1ec27dec&_app_key=ef78a12f28358f52077bb10d670efcee&q=biryani
