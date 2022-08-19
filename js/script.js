const quoteId = document.querySelector('#quoteId');
const quote = document.querySelector('#quote');
const dice = document.querySelector('#dice');

const getQuote = async () => {
  dice.classList.add('loading');
  try {
    let response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    });
    if (response.status === 200) {
      const data = await response.json();
      const { id, advice } = data.slip;
      quoteId.innerText = `#${id}`;
      quote.innerText = `“${advice}”`;
    } else {
      throw 'Error fetching advise';
    }
  } catch (error) {
    console.log(error);
  }
  dice.classList.remove('loading');
};

dice.addEventListener('click', getQuote);
