const initialValue = document.querySelector("#initial-price");
const currentValue = document.querySelector("#current-price")
const amountStocks = document.querySelector("#quantity-stocks")
const checkBtn = document.querySelector("#submit-btn")
const output = document.querySelector("#output")

checkBtn.addEventListener("click",submitClickHandler)


function submitClickHandler(e){

    e.preventDefault();
    var initP = Number(initialValue.value);
    var currP = Number(currentValue.value);
    var amt = Number(amountStocks.value);

    calculateProfitLoss(initP,currP,amt);
}

function calculateProfitLoss(initialPrice,currentPrice,amount){

    if (initialPrice > currentPrice) {
        
        document.body.style.backgroundColor="orange";
        var loss = (initialPrice - currentPrice) * amount;
        var lossPercentage = (loss / initialPrice) * 100;
    
        showMessage(
          `Sorry 😞, the loss is ${loss} and the loss percent is ${lossPercentage}%`
        );
      } else if (currentPrice > initialPrice) {
       
        document.body.style.backgroundColor="green";
        var profit = (currentPrice - initialPrice) * amount;
        var profitPercentage = (profit / initialPrice) * 100;
    
        showMessage(
          `Congrats 😀 !!, the profit is ${profit} and the profit percent is ${profitPercentage}%`
        );
      } else {
        showMessage(`No change`);
      }
}

function showMessage(msg){
    output.innerText = msg;
}