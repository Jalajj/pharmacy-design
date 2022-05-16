import React, {useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [mobileScreen, setMobileScreen] = React.useState(window.matchMedia("(max-width: 500px)").matches)
    const [IsLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        const handler = e => setMobileScreen( e.matches);
        window.matchMedia("(max-width: 500px)").addEventListener('change', handler);
        console.log(mobileScreen, 'Mobile')
       }, [mobileScreen]);

       return (
        <AppContext.Provider value={{mobileScreen, IsLoading, setIsLoading}}>
            {children}
        </AppContext.Provider>
         )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }