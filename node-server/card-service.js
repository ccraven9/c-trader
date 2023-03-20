const cardData = require("./mock-cards");

class CardService {

    async getCards() {
        return new Promise((resolve, _) => resolve(cardData));
    }
}

module.exports = CardService;
