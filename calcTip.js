
module.exports.totalAmount=(total, tip) => {
    let totalTip = (total*(tip/100));
  
    return totalTip;
};
