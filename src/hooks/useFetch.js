import { useState, useEffect, useRef } from 'react';

const stateEmpty = { data: null, loading: true, error: null };

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState(stateEmpty);

    useEffect(() => { return () => isMounted.current = false; }, []);

    useEffect(() => {
        setState(stateEmpty);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                (isMounted.current) &&
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
            })
            .catch(err => {
                setState({
                    loading: false,
                    data: null,
                    error: err
                })
            });

    }, [url]);

    return state;
}