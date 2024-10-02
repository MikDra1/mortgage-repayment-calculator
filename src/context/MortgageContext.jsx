/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const MortgageContext = createContext();

function MortageProvider({ children }) {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [amountError, setAmountError] = useState(false);
  const [termError, setTermError] = useState(false);
  const [rateError, setRateError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  let monthlyInterestRate = null;
  let numberOfPayments = null;

  let totalValue = monthlyPayment * 12 * Number(term);
  let interestOnlyValue = monthlyPayment * 12 * Number(term) - Number(amount);

  function handleMortgage(e) {
    e.preventDefault();

    setAmountError(amount ? false : true);
    setTermError(term ? false : true);
    setRateError(rate ? false : true);
    setTypeError(type ? false : true);
  
    if(!type) return;

  

    monthlyInterestRate = rate / 100 / 12;
    numberOfPayments = term * 12;
    setMonthlyPayment(
      (amount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    );
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("en", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  function handleClear() {
    setAmount("");
    setTerm("");
    setRate("");
    setType("");
    setMonthlyPayment(null);
    setAmountError(false);
    setTermError(false);
    setRateError(false);
    setTypeError(false);
  }

  return (
    <MortgageContext.Provider
      value={{
        amount,
        setAmount,
        term,
        setTerm,
        rate,
        setRate,
        type,
        setType,
        monthlyPayment,
        handleMortgage,
        interestOnlyValue,
        totalValue,
        formatNumber,
        handleClear,
        amountError,
        termError,
        rateError,
        typeError,
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
}

function useMortgage() {
  const context = useContext(MortgageContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { MortageProvider, useMortgage };
