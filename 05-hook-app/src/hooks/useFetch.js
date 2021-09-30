import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {
    
    const isMountain = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        
        return () => isMountain.current = false;

    }, [])

    useEffect(() => {
         
        setstate({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                // console.log(data);
                if ( isMountain.current ){
                    // setTimeout( () => {
                    //     setstate({
                    //         loading: false,
                    //         error: null,
                    //         data
                    //     });
                    // }, 4000);
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                }
               
            })
            .catch( (e) => {
                setstate({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url])

    return state;

};
