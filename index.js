const yummly = require('yummly');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/version', (req, res) => {
    res.status(200).send("APIAI Webhook Integration. Version 1.0");
});

app.get('/', (req, res) => {
    res.status(200).send("Hello from APIAI Webhook Integration.");
});


var credentials = {
    id: config.yummly_app_id,
    key: config.yummly_app_key
};


app.get('/recipe', (req, res) => {
    yummly.search({
        credentials: credentials,
        query: {
            q: 'chicken+soup'
        }
    }, function(error, response, data) {
        if (error) {
            //console.error(error);
        } else if (response === 200) {
            var matches = data.matches;
            var results = [];
            matches.forEach((match, index) => {

                yummly.recipe({
                    credentials: credentials,
                    id: match.id // id of the first recipe returned by search
                }, function(error, response, data) {
                    var recipeResults = {};
                    if (error) {
                        //console.error(error);
                    } else {
                        recipeResults.recipeName = data.name;
                        recipeResults.id = data.id;
                        recipeResults.recipeImage = data.images[0].hostedLargeUrl;
                        recipeResults.recipeDirections = data.source.sourceRecipeUrl;
                        recipeResults.preparationTime = data.prepTime;
                        recipeResults.cookingTime = data.cookTime;
                        recipeResults.numberOfServings = data.numberOfServings;
                        results.push(recipeResults);
                    }
                    if (index === matches.length - 1) {
                        res.json(results);
                    }
                });
            });
        }
    });
});




const server = app.listen(process.env.PORT || 4444, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});
