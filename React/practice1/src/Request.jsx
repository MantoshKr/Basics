// useEffect: 

useEffect(() => {
    axios.get(url).then((response) => {
    setMovies(response.data);
    });
    }, []);