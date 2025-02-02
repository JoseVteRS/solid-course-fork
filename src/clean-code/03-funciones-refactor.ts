(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBiographyById(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película

  interface Movie {
    title: string;
    description: string;
    rating: string;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function checkFullName(fullName: string) {
    console.log({ fullName });
    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (checkFullName(fullName)) return false;

    console.log("Crear actor", birthdate);
    return true;
  }
})();
