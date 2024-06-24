import { SetStateAction, createContext, useContext, useState } from "react";
import { UseFormGetValues } from "react-hook-form";
import { FormTranslate } from "../../types/FormTranslate";

// CREATE CONTEXT
interface GetValuesContextType {
    getValues: UseFormGetValues<FormTranslate> | null
    setGetValues: React.Dispatch<SetStateAction<UseFormGetValues<FormTranslate> | null>>
}

const GetValuesContext = createContext<GetValuesContextType>({} as GetValuesContextType);


// USE CONTEXT
export const useGetValuesContext = () => useContext(GetValuesContext);


// PROVIDER
interface props {
    children: JSX.Element | JSX.Element[]
}

export const GetValuesProvider = ({ children }: props) => {
  const [getValues, setGetValues] = useState<UseFormGetValues<FormTranslate> | null>(null);

  return (
    <GetValuesContext.Provider value={{ getValues, setGetValues }}> 
      {children}
    </GetValuesContext.Provider>
  );
};