/** 
* function to get the total price ($) of all products
* @param {Array} products cartProducts: Array of objects
* @returns {number} Total price
*/
const totalPrice = (products) => {
    
    let total = 0;

    products.forEach(product => {
        // sum each product price
        total+=product.price;
    })

    // limit decimal in only two
    return total.toFixed(2);
}

function formatDate(date) {
    // Get the date components
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero based
    const year = date.getFullYear();

    // Construct the formatted date string
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

const hasUserAnAccount = (account) => {
  // to verify if exists an account in local storage and local state
  const existsAccountInLocalStorage = JSON.parse(localStorage.getItem('account')) ? Object.keys(JSON.parse(localStorage.getItem('account'))).length > 0 : false;
  const existsAccountInLocalState = account ? Object.keys(account).length > 0 : false;
  const hasUserAnAccount = existsAccountInLocalStorage || existsAccountInLocalState;

  return hasUserAnAccount;
}

export {
    totalPrice,
    formatDate,
    hasUserAnAccount,
}