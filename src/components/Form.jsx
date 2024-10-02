import styles from "./Form.module.css";
import { useMortgage } from "../context/MortgageContext";

function Form() {
  const {
    amount,
    setAmount,
    term,
    setTerm,
    rate,
    setRate,
    type,
    setType,
    handleMortgage,
    handleClear,
    amountError,
    termError,
    rateError,
    typeError,
  } = useMortgage();

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>
        <h1>Mortgage Calculator</h1>
        <p onClick={handleClear}>Clear All</p>
      </div>

      <form className={styles.form} onSubmit={(e) => handleMortgage(e)}>
        <div className={styles.formInputs}>
          <div className={styles.grid}>
            <label htmlFor="amount">Mortgage Amount</label>
            <div
              className={`${styles.flex} ${styles.inputBox} ${
                styles.direction
              } ${amountError ? styles.inputBoxError : ""}`}
            >
              <p>₤</p>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              
            </div>
            {amountError && (
                <p className={styles.required}>This field is required</p>
              )}
          </div>

          <div className={styles.flexInputs}>
            <div className={styles.grid}>
              <label htmlFor="term">Mortgage Term</label>
              <div
                className={`${styles.flex} ${styles.inputBox} ${
                  termError ? styles.inputBoxError : ""
                } `}
              >
                <input
                  type="number"
                  id="term"
                  value={term}
                  onChange={(e) => {
                    setTerm(e.target.value);
                  }}
                />
                <p>years</p>
              </div>
              {termError && (
                <p className={styles.required}>This field is required</p>
              )}
            </div>

            <div className={styles.grid}>
              <label htmlFor="rate">Interest Rate</label>
              <div
                className={`${styles.flex} ${styles.inputBox} ${
                  rateError ? styles.inputBoxError : ""
                }`}
              >
                <input
                  type="number"
                  id="rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <p>%</p>
              </div>
              {rateError && (
                <p className={styles.required}>This field is required</p>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${styles.radioButtonsContainer} ${
            typeError ? styles.radioButtonsContainerError : ""
          }`}
        >
          <p>Mortgage Type</p>
          <input
            type="radio"
            id="repay"
            value="repayment"
            onChange={(e) => setType(e.target.value)}
            checked={type === "repayment"}
          />
          <label htmlFor="repay">Repayment</label>
          <input
            type="radio"
            id="interest"
            value="interest"
            onChange={(e) => setType(e.target.value)}
            checked={type === "interest"}
          />
          <label htmlFor="interest">Interest Only</label>
          {typeError && (
            <p className={styles.required}>This field is required</p>
          )}
        </div>

        <button type="submit">
          <img src="./images/icon-calculator.svg" alt="" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}

export default Form;
