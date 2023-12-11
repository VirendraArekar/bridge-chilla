const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');

const countries = require('../../data/json/countries.json');
const Country = require('../../models/country.model');
const states = require('../../data/json/states.json');
const State = require('../../models/state.model');

const cities = require('../../data/json/cities.json');
const City = require('../../models/city.model');

// create country
const createCountry = catchAsync(async (req, res) => {
  const results = [];
  // eslint-disable-next-line no-plusplus
  // for (let i = 0; i < countries.length; i++) {
  //   results.push({
  //     name: countries[i].name,
  //     countryCode: countries[i].iso2,
  //     phoneCode: countries[i]?.phone_code === '' ? null : (countries[i]?.phone_code ?? ''),
  //   });
  // }

  // var final = [];
  // for (let j = 0; j < results.length; j++) {
  //   let obj = results[j]
  //   if(obj.phoneCode === undefined || obj.phoneCode === 'undefined'){
  //     obj.phoneCode = ''
  //   }
  //   final.push(obj)
  // }
  const dbCountries = await State.find({});
  console.log('CITY ------------------------',cities.length);
  console.log('STATE ------------------------', dbCountries.length);

  var count = 1;

  for(let i = 0 ; i < cities.length; i++){
    let match = await State.findOne({stateCode :  cities[i].state_code});
    if(match){

      const obj = {
                  stateId: match._id,
                  name: cities[i].name,
                };

                console.log(`${count}-------------------------------------`, obj);
                count++;

                // eslint-disable-next-line no-await-in-loop
                await City.create(obj)
                  .then(function (res) {
                    console.log('Data inserted', res); // Success
                  })
                  .catch(function (error) {
                    console.log('ERROR ------------',error); // Failure

                  });

    }
  }

  // if (dbCountries) {
  //   for (let c = 0; c < dbCountries.length; c++) {
  //     for (let s = 0; s < cities.length; s++) {
  //       if (dbCountries[c].stateCode === cities[s].state_code) {
  //         console.log(`State ${count}-------------`, cities[s].name)
  //         count++;
  //         break;
  //         const obj = {
  //           stateId: dbCountries[c]._id,
  //           name: cities[s].name,
  //         };

  //         console.log(`${s}-------------------------------------`, obj);

  //         // eslint-disable-next-line no-await-in-loop
  //         await City.create(obj)
  //           .then(function (res) {
  //             console.log('Data inserted', res); // Success
  //           })
  //           .catch(function (error) {
  //             console.log('ERROR ------------',error); // Failure

  //           });
  //       }
  //     }
  //   }
  // }

  // let dbCountries = await Country.find({});
  // console.log('-------------',dbCountries.length)
  // if(dbCountries){
  //   for(let c = 0; c < dbCountries.length; c++){
  //     for(let s = 0; s < states.length; s++){
  //       if(dbCountries[c].countryCode === states[s].country_code){
  //         let obj = {
  //           countryId : dbCountries[c]._id,
  //           name: states[s].name,
  //           stateCode: states[s].state_code
  //         }

  //         console.log(`${s}-------------------------------------`, obj)

  //         State.create(obj)
  //         .then(function () {
  //           console.log('Data inserted'); // Success
  //         })
  //         .catch(function (error) {
  //           console.log(error); // Failure
  //         });
  //       }
  //     }
  //   }
  // }

  // for (let i = 0; i < countries.length; i++) {
  //   let obj = {
  //     name: countries[i].name,
  //     countryCode: countries[i].iso2,
  //     phoneCode: countries[i]?.phone_code === '' ? null : (countries[i]?.phone_code ?? ''),
  //   }
  //   console.log(`${i}---------`, obj)
  //   Country.create(obj)
  //   .then(function () {
  //     console.log('Data inserted'); // Success
  //   })
  //   .catch(function (error) {
  //     console.log(error); // Failure
  //   });
  // }

  // console.log(final);
  // Country.insertMany(final)
  //   .then(function () {
  //     console.log('Data inserted'); // Success
  //   })
  //   .catch(function (error) {
  //     console.log(error); // Failure
  //   });

  // await createRecordAndGet('Country', req.body, req, res);
});

const getCountries = catchAsync(async (req, res) => {
  await allRecordAndGet('Country', req, res);
});

const getCountry = catchAsync(async (req, res) => {
  await singleRecordAndGet('Country', req.params.countryId, res);
});

const updateCountry = async (req, res) => {
  await updateDocumentAndGet('Country', req.params.countryId, req.body, res);
};

const deleteCountry = catchAsync(async (req, res) => {
  await deleteDocumentAndGet('Country', req.params.countryId, res);
});

const deleteCountries = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet('Country', req.body.ids, res);
});

module.exports = {
  createCountry,
  getCountries,
  getCountry,
  updateCountry,
  deleteCountry,
  deleteCountries,
};
