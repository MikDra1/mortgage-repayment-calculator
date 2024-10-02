import { useMortgage } from "../context/MortgageContext";
import styles from "./Results.module.css";

function Results() {
  const { monthlyPayment, totalValue, interestOnlyValue, type, formatNumber } = useMortgage();
  console.log(monthlyPayment)

  return (
    <>
      {monthlyPayment ? <div className={styles.results}>
        <h2>Your results</h2>
        <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click &ldquo;calculate repayments&rdquo; again.</p>

        <div>
            <div className={styles.resultsBox}>
            <p>Your monthly repayments</p>
            <h3>₤{(formatNumber(monthlyPayment))}</h3>
            </div>

            <div className={styles.resultsSmallBox}>
                <p>{type === 'interest' ? "Total amount of interest you'll pay over the term": "Total you'll over the term"}</p>
                <h4>₤{type === 'repayment' ? (formatNumber(totalValue)) : (formatNumber(interestOnlyValue))}</h4>
            </div>
        </div>
      </div> : (
        <div className={styles.resultsHero}>
          <img src="./images/illustration-empty.svg" alt="" />
          <h2>Results shown here</h2>
          <p>
            Complete the form and click &ldquo;calculate repayments&rdquo; to
            see what your monthly repayments would be.
          </p>
        </div>
      ) 
      }
    </>
  );
}

export default Results;
