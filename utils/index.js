const fs = require("fs");

const save = (updatedArr) => {
  let stringyObj = JSON.stringify(updatedArr);
  fs.writeFileSync("./netflix.json", stringyObj);
};

exports.add = (movieListArr, movieId, input) => {
  let movieObj = { 
    id: movieId,  
    movie: input 
    };
  movieListArr.push(movieObj);
  save(movieListArr);
};

exports.deleteMovie = (movieListArr, movieId) => {
    let newArr = movieListArr.filter(item => (item.id) !== movieId)
    save(newArr)
};

exports.updateMovie = (movieListArr, movieId, updateInput) => {
  let newArr = movieListArr;

  for(let movie of newArr) {
    if (movie.id === movieId) {
        movie.movie = updateInput
    }
  }
//   newArr.map(item => {
//       if (newArr[movieId - 1].id === movieId) {
//           newArr[movieId - 1].movie = updateInput
//       }
//   })

    
    save(newArr)
};
