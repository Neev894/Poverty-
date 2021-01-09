var a="";
var sentences = [
  ". Create jobs - The best pathway out of poverty is a well-paying job ",
  ".  Raise the minimum wage - In the late 1960s, a full-time worker earning the minimum wage could lift a family of three out of poverty. Had the minimum wage back then been indexed to inflation, it would be $10.86 per hour today, compared to the current federal minimum wage of $7.25 per hour. Raising the minimum wage to $10.10 per hour and indexing it to inflation—as President Barack Obama and several members of Congress have called for—would lift more than 4 million Americans out of poverty ",
  ". Increase the Earned Income Tax Credit for childless workers. - One of our nation’s most effective anti-poverty tools, the Earned Income Tax Credit, or EITC, helped more than 6.5 million Americans—including 3.3 million children—avoid poverty in 2012. ",  
  " . Support pay equity - With female full-time workers earning just 78 cents for every $1 earned by men, action must be taken to ensure equal pay for equal work. Closing the gender wage gap would cut poverty in half for working women and their families .",
  "  .  Provide paid leave and paid sick days -Paid leave is an important anti-poverty policy, as having a child is one of the leading causes of economic hardship. Additionally, nearly 4 in 10 private-sector workers—and 7 in 10 low-wage workers—do not have a single paid sick day,."
];
for (var i=1;i<sentences.length;i++){
a+=i+sentences[i]+ "<br>";
}
document.getElementById("h2").innerHTML=a;

document.getElementById("h2").style.fontFamily = 'Fira Sans Extra Condensed', sans-serif;

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("h2").innerHTML = text;