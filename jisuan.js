// 加法 add
function add(num1, num2) {
  var num1Len = num1.toString().split('.')?.[1]?.length || 0;
  var num2Len = num2.toString().split('.')?.[1]?.length || 0;
  var baseLen = Math.pow(10, Math.max(num1Len, num2Len));

  var result = (num1 * baseLen + num2 * baseLen) / baseLen;
  return result;
}
// 减法 subtract
function sub(num1, num2) {
  var num1Len = num1.toString().split('.')?.[1]?.length || 0;
  var num2Len = num2.toString().split('.')?.[1]?.length || 0;
  var baseLen = Math.pow(10, Math.max(num1Len, num2Len));
  var result = (num1 * baseLen - num2 * baseLen) / baseLen;
  return result;
}
// 乘法  multiply
function mul(num1, num2) {
  var num1Len = num1.toString().split('.')?.[1]?.length || 0;
  var num2Len = num2.toString().split('.')?.[1]?.length || 0;
  var baseLen = Math.pow(10, Math.max(num1Len, num2Len));
  var result = (num1 * baseLen * num2 * baseLen) / baseLen / baseLen;
  return result;
}

// 除法 divide
function div(num1, num2) {
  var num1Len = num1.toString().split('.')?.[1]?.length || 0;
  var num2Len = num2.toString().split('.')?.[1]?.length || 0;

  var r1 = Number(num1.toString().replace('.', ''));
  var r2 = Number(num2.toString().replace('.', ''));

  var result = (r1 / r2) * Math.pow(10, num2Len - num1Len);
  return result;
}
