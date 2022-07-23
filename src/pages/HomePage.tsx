import React, {useEffect, useState} from 'react'
import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../components/store/service/github/github.api";
import ErrorMessage from "../components/ErrorMessage";
import {useDebounce} from "../hooks/debounce";
import Loading from "../components/Loading";
import {RepoCard} from "../components/RepoCard";

const HomePage = () => {
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false);
    const debounced = useDebounce(search)

    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    });

    const [fetchRepos, { isLoading: reposLoading, isError: reposError, data: repos }] = useLazyGetUserReposQuery()

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    useEffect(() => {
        setDropdown(debounced.length > 3 && data?.length! > 0 )
    },[debounced, data])

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <ErrorMessage/>}

            <div className="relative w-[560px]">
                <input
                    type="text"
                    className="border py-2 px-4 w-full h-[42px] mb-2"
                    placeholder="Найдите имя пользователя Github..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                { dropdown && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
                    {isLoading && <Loading/>}
                    { data?.map(user => (
                        <li
                            key={user.id}
                            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                            onClick={() => clickHandler(user.login)}
                        >
                            {user.login}
                        </li>
                    )) }
                </ul>}

                <div className="container">
                    {reposLoading && <Loading />}
                    {repos?.map(repo => <RepoCard key={repo.id} repo={repo} /> )}

                </div>
            </div>
        </div>
    )
}

export default HomePage