function fact(x){
  if (x>1) return x*fact(x-1);
  else return 1;
}
fact(5)
fact(4)