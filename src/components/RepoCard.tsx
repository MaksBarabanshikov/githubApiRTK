import React, {useState} from 'react'
import {IRepo} from "../models/models";
import {useActions} from "../hooks/Actions";
import {useAppSelector} from "../hooks/redux";

export function RepoCard({ repo }: {repo: IRepo}) {
    const {addFavourites, removeFavourites} =  useActions()
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addFavourites(repo.html_url)
        setIsFav(true)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeFavourites(repo.html_url)
        setIsFav(false)
    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover: shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target="_black">
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo?.description}</p>

                {!isFav && <button
                    className="py-2 px-4 mr-2 bg-green-400 rounded hover:shadow-md transition-all"
                    onClick={addToFavourite}
                >
                    Добавить
                </button>}

                {isFav && <button
                    className="py-2 px-4 bg-rose-400 rounded hover:shadow-md transition-all"
                    onClick={removeFromFavourite}
                >
                    Удалить
                </button>}
            </a>

        </div>
    )
}
