var a=[16,13,-4,0,10,5,-7];
var b=a[0];
var c=a[0];
var d=a[0];
for(var i=1;i<a.length;i++)
{
	if(b<a[i])
	{
		b=a[i];
	}
}
if(c==b)
{
	c=a[1];
}
for(var i=1;i<a.length;i++)
{
	if(c<a[i]&&b!==a[i])
	{
		c=a[i];
	}
}
if(b==d||c==d)
{
	d=a[2];
}
for(var i=1;i<a.length;i++)
{
	if(d<a[i]&&b!==a[i]&&c!=a[i])
	{
		d=a[i];
	}
}
console.log(d);





