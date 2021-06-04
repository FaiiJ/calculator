import React, { useContext, useState } from 'react'

export const CalculatorContext = React.createContext()
export const useCalculate = () => useContext(CalculatorContext)
export const CalculatorController = ({ children }) => {

    const [value, setValue] = useState("0")
    const [nextNumber, setNextNumber] = useState("")
    const [operation, setOperation] = useState("")

    const resultant = () => {  
        switch (operation) {
            case '+':
                setValue((+value) + (+nextNumber))
                setNextNumber()
                break;
            case '-':
                setValue(+nextNumber - +value)
                setNextNumber()
                break;
            case 'x':
                setValue((+value) * (+nextNumber))
                setNextNumber()
                break;
            case '/':
                setValue((+nextNumber) / (+value))
                setNextNumber()
                break;
        }
    }

    const onClickNumber = (number) => {
        switch (number) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (value.toString().startsWith("0") || 
                !value.toString().startsWith("0.") )  {
                    setValue(number)
                } else {
                    setValue(value + number)
                }
                break;
            case '+':
                setNextNumber(value)
                setValue("")
                setOperation('+')
                break;
            case '-':
                setNextNumber(value)
                setValue("")
                setOperation("-")
                break;
            case 'x':
                setNextNumber(value)
                setValue("")
                setOperation("x")
                break;
            case '/':
                setNextNumber(value)
                setValue("")
                setOperation("/")
                break;
            case "=":
                setValue("")
                if (resultant())
                setNextNumber("")
                break;
            case "C":
                setValue("0")
                break;
            case "AC":
                setValue("0")
                setNextNumber("")
                break;
            case "-/+":
                setValue(value * -1)
                break;
            case ".":
                setValue(value + ".")
                if (value.toString().includes(".")) {
                    setValue("0."  + value)
                }else {
                    setValue( value + ".")
                }
                break;
        }
    }

    return (
        <CalculatorContext.Provider value={{
            value, setValue, onClickNumber, resultant, nextNumber
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}