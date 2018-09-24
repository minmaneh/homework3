const f1=function(a,b,c){
	 return(a+b+c)
};

const f2=function(){
	 return('empty')
};

const f3=function(x,y){
	 console.log(x+y)
};

const f4 = function(a,b,c) {
	if(a.length >= b.length && a.length >= c.length)
		return a;
	else if(b.length >= a.length && b.length >= c.length)
		return b;
	else
		return c;
};

const f5 = function(a,b){
	if(a == b)
		return 0;

	if(a > b)
		return 1;

	return -1;
};

const multiply= function(m,n){
	return m*n;
};

const divide= function(m,n){
	return(m/n);
};

const triangleArea8= function(base, height){
	return divide(multiply(base,height),2);
};

const numLength= function(number){
	return (number+"").length;
};

const f9= function(string1,string2,number){
      const st=string1+string2;
     if(st.length>number)
     	return 1;
     else 
     	return -1;
};

const runStuff = function(a,b,st){
	if(st === "rectangle")
		return a * b;
	if(st === "triangle")
		return triangleArea8(a,b);
	return -1;
};









