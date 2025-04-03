import {MOVIES} from './data'

//goes through entire movie database and returns the movies that match the user's filters
export function generateList(args) {
    const {genre, rating, length} = args

    return Object.keys(MOVIES).filter(key =>
        MOVIES[key].g === genre &&
        MOVIES[key].r === rating &&
        MOVIES[key].l === length
    );
}