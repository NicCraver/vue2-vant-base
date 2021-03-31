const filters = {
  formatId(card, flag) {
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
  },
  formatPeople(num) {
    // let num = 51548;
    if (num > 10000) {
      num = parseInt(num / 10000) + "万";
    }
    console.log("num", num);
    return num + "人";
  },
  formatPeople2(num) {
    // let num = 51548;
    if (num > 10000) {
      num = parseInt(num / 10000) + "万";
    }
    console.log("num", num);
    return num;
  },
  formatPeople3(num) {
    // let num = 51548;
    if (num > 10000) {
      num = parseInt(num / 10000) + "万";
    } else {
      num = num + "人";
    }
    return num;
  },
  formatRatio(ratio, num) {
    // console.group("formatRatio");
    // console.log("ratio", ratio);
    // console.log("num", num);
    let temp = ratio;
    if (ratio == 0 && num !== 0) {
      temp = 0.01;
    }
    // console.log("temp", temp);
    // console.groupEnd();
    return temp;
  }
};
export default Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  });
};
