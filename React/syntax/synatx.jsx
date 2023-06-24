//useState

const [state, setState] = useState(initialState);

//showing radom movies

const movie =  movies[Math.floor(Math.random() * movie.length)];

//useEffect using axios to fetch data from api

useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
}
, [fetchUrl]);

//truncate string function to limit the number of characters

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

//useNavigate to navigate to a different page

const navigate = useNavigate();
navigate('/');
navigate('/movies');

//handleLogout function to logout user

const handleLogout = () => {
    auth.signOut();
    navigate('/');
}


//handleSubmit function to submit form data such as email and password firebase

const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        navigate('/');
    })
    .catch((error) => alert(error.message));
}

//handleRegister function to register user with firebase 

const handleRegister = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        if(auth) {
            navigate('/');
        }
    })
    .catch((error) => alert(error.message));
}

//slideLeft using MdChevronLeft and slideRight using MdChevronRight

const slideLeft = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
}

const slideRight = () => {
    setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
}

//slideLeft using MdChevronLeft and slideRight using MdChevronRight in case of movie app like Netflix

const slideLeft = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4);
}

const slideRight = () => {
    setCurrentSlide(currentSlide < 4 ? currentSlide + 1 : 0);
}



//handleLogout function to logout user using try and catch and async function

const handleLogout = async () => {
    try {
        await auth.signOut();
        navigate('/');
    } catch(error) {
        alert(error.message);
    }
}

//handleRegister function to register user with firebase using try and catch and async function

const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const auth = await auth.createUserWithEmailAndPassword(email, password);
        if(auth) {
            navigate('/');
        }
    } catch(error) {
        alert(error.message);
    }
}