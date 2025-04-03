import {MOVIES} from './data'

export function generateList(args) {
    const {genre, rating, length} = args

    return Object.keys(MOVIES).filter(key =>
        MOVIES[key].g === genre &&
        MOVIES[key].r === rating &&
        MOVIES[key].l === length
    );
}