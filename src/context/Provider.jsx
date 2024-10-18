import DrawerContextProvider from "./DrawerContentProvider"

export default function Provider({children}){
    return(
        <>
            <DrawerContextProvider>
                {children}
            </DrawerContextProvider>
        </>
    )
}