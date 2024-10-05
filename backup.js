// import './App.css';
// import React, { Component } from 'react';
// import Navigation from './components/Navigation/navigation.js';
// import Logo from './components/Logo/logo.js';
// import ImageLinkForm from './components/ImageLinkForm/imagelinkform.js';
// import Rank from './components/Rank/rank.js'
// import FaceRecognition from './components/FaceRecognition/facerecognition'



// // const app  = new Clarifai.App({
// //   apikey: "8fdee64b70474a7f8d974d7c49dd607c"
// // })


// const setupclarifai = (imageUrl) => {
//   // Your PAT (Personal Access Token) can be found in the Account's Security section
//   const PAT = '87fe9e51f4194cdba83d0b2301f21fef';
//   // Specify the correct user_id/app_id pairings
//   // Since you're making inferences outside your app's scope
//   const USER_ID = 'clarifai';
//   const APP_ID = 'main';
//   // Change these to whatever model and image URL you want to use
//   // const MODEL_ID = 'face-detection';
//   // const IMAGE_URL = 'imageUrl';
//   // const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';

//   const raw = JSON.stringify({
//     "user_app_id": {
//         "user_id": USER_ID,
//         "app_id": APP_ID
//     },
//     "inputs": [
//         {
//             "data": {
//                 "image": {
//                     "url": imageUrl
//                     // "base64": IMAGE_BYTES_STRING
//                 }
//             }
//         }
//     ]
// });

// const requestOptions = {
//   method: 'POST',
//   headers: {
//       'Accept': 'application/json',
//       'Authorization': 'Key ' + PAT
//   },
//   body: raw
// };

// return requestOptions;
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // In this section, we set the user authentication, user and app ID, model details, and the URL
// // of the image we want as an input. Change these strings to run your own example.
// //////////////////////////////////////////////////////////////////////////////////////////////////

// // To use image bytes, assign its variable   
// // const IMAGE_BYTES_STRING = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBQcE/8QAMBAAAQMDAwMDAgQHAAAAAAAAAQIDBAAFEQYSIQcTMTJBURRhCBYikSNScXKhsdH/xAAZAQACAwEAAAAAAAAAAAAAAAAFBgIDBAf/xAAtEQABAwMBBgQHAQAAAAAAAAABAgMRAAQhMQUSE0FRYQaBocEUFiJCcrHR8P/aAAwDAQACEQMRAD8A3+RYY1unSYzCS0ttZUkAgktn0q5yT7jPyDUC4wdGwycH5U2Kt9ZQ7VI1qw5PkvQy3CSVPpf7aQjuKyFH25xzn3pHn3TVNy01Hl2hyy6YdkSpKsS9sl/6RlI3rRu3dxWd6spwnAGPIJTfl925fcLaoSDHXvyo6i9SlCQrU9wKln3OyWiaDN1RAbW3kKbSd7gPtwMkH/tTWy9afuy1iPfnXMAblITwkE4yf08cn3pSbYt1uts24XH6fUbiLAuY1MWyGkLEmUW0rcCRvUpQ5CtwKQCPgi4S1ZbDe4sd9NntDEe79m3uOBLTr0IR9jzodSMqUpTu9JJ8owD7UTT4ZCfv9PbP7860m+s+HBSrejWRuz2kAxoesGYxTW/Zlpkwo1vkuSly3UgKWQUhHJUvIHsAaKTemF8XE6sWmxyZkiaZrMh1jv8ArQNpUVqB8FW0njHqx4zRVVhsph1KlKk5xQ+7uHmikaSJrQerMByet2IwvtuTLa4xv2k7Rk84H9x/esHv92d01boenLXGcuiWrFIhLlpbcaQ2/JdK3VJCkAq2pAR7Zz7YxWudY9fxNIdQbNGkR5TyX4aisNNpUMFZAzkj4NK0jq9ZpbLr0PSlzkhrlZDaQlP3P8Q4/ap3F87bPucJEkx/hHv60b2TYXLrKN5sramYECSQRk9M6c6zmJ+eb5Hi22M7cnWGIQgFLbX0zSo4PDa1YBcTgDyMjJ/qbGPabH08SJt1Uzc9QqRliGg5QySPKvgc+TyfYDmmTUWpNYz7ctxoQdPQshCktupckDJUPUcJT6DwMq8YyaQ9VL0pCS8zapcq4SVOBZmPDO8/cnknlWcDBwn4NYnPjLkQ+qE9OtOVlYpeVHDCEkkkJyT+SuQzy5Y0ru6Ez511/Efa5s1fdkOtyVurIxgdlQAA9gOKKPwolU7remU5hCGYEgo38KUv9I/0TRTDYJCWQBSF4rIN/CRgAR0iTpVD1j1g/qDqJcJqlKcjB9bcda142MpOEJAzgeMnjyTSyze5KEuNRpDoDvC0oe4X9iAeaKKFK+oya6fbOqYbDTeEiAPKpHdS3gBLYc7RQkp3ApQog+cq8nwPJrljzxnPZbUfnugn/NFFRgEVch9xKsH0H8pg6e3x3T3UC1ajaZITGkJLoS4MKbOUrzz/ACKVRRRVzVwtoQmhG1NkWu0HuI+JI8u/Kv/Z';

// ///////////////////////////////////////////////////////////////////////////////////
// // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
// ///////////////////////////////////////////////////////////////////////////////////


// // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// // this will default to the latest version_id




// class App extends Component { 
//   constructor(){
//     super();
//     this.state = {
//       input:'',
//       imageUrl:'',
//       box: {}
//     }
//   }
//   calculateFaceLocation = (data) => {

//   }

//   onInputChange = (event) => {
//     console.log(event.target.value);
//     this.setState({input: event.target.value})
//   }
//   onSubmit = () => {
//     this.setState({imageUrl: this.state.input})
//     // app.models.predict(
//     //   Clarifai.FACE-DETECT, 
//     //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesGgS_f2uA1LBSVIBJemYKvQ0D1Fh3E83_g&s')
//     // .then(
//     //   function(response){
//     //     console.log(response)
//     //   },
//     //   function(err){

//     //   }
//     // )
//     fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/versions/" + '6dc7e46bc9124c5c8824be4822abe105' +  "/outputs", setupclarifai(this.state.input))
//     .then(response => response.json())
//     .then(result => {
//         console.log(result);
//         if (result.outputs && result.outputs[0].data && result.outputs[0].data.regions) {
//           const regions = result.outputs[0].data.regions;
  
//           regions.forEach(region => {
//             const boundingBox = region.region_info.bounding_box;
//             const topRow = boundingBox.top_row.toFixed(3);
//             const leftCol = boundingBox.left_col.toFixed(3);
//             const bottomRow = boundingBox.bottom_row.toFixed(3);
//             const rightCol = boundingBox.right_col.toFixed(3);
  
//             region.data.concepts.forEach(concept => {
//               const name = concept.name;
//               const value = concept.value.toFixed(4);
//               console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
//             });
//           });
//         } else {
//           console.error('No regions found in the response');
//         }  
//     })
//     .catch(error => console.log('error', error));
//   }
//   render(){
//     return (
//       <div className="App">
//         <Navigation />
//         <Logo />
//         <Rank />
//         <ImageLinkForm 
//         onInputChange= {this.onInputChange}
//         onSubmit={this.onSubmit}/>
//         <FaceRecognition imageUrl={this.state.imageUrl}/>
//       </div>
//     );
//   }
// }
// export default App;
