import DrawerContextProvider from "./DrawerContextProvider"
export default function Provider({children}){
    return(
        <DrawerContextProvider>     
            {children}
        </DrawerContextProvider>
    )
}