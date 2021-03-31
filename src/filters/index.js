const filters = {
  formatId(card, flag) {
    console.log(`card`, card);
    let strcard = "";
    if (!flag) {
      strcard = card ? card.replace(/^(.{4})(?:\d+)(.{4})$/, "$1******$2") : "";
    } else {
      strcard = card;
    }
    return strcard;
  },
  formatTelehpone(card, flag) {
    let strcard = "";
    if (!flag) {
      strcard = card ? card.replace(/^(.{3})(?:\d+)(.{4})$/, "$1******$2") : "";
    } else {
      strcard = card;
    }
    return strcard;
  }
};
export default Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  });
};
