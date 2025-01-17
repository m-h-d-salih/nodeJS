var countMatches = function(items, ruleKey, ruleValue) {
    let key;
  if(ruleKey==='color')
  key=1;
  else if(ruleKey==='type')
  key=0;
  else if(ruleKey==='name')
  key=2;
  const finded=items.filter(item=>item[key]===ruleValue)
  return finded.length;
};
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver"))