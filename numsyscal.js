var hidenext=null;
var Num="";
var conf="";
function Show(_show,_hide)
{
    conf=_show;
    if(hidenext===null)
    {
        hidenext=_hide;
    }
    if(hidenext!==_show)
    {
    Num="";
    document.getElementById(_show).style.display="block";
    document.getElementById(hidenext).style.display="none";
    document.getElementById("Output").innerHTML=_show;
    }
    hidenext=_show;
}

function EnterNum(x)
{
    if(conf==="NumPad")
        Num=Num+x;
    else{
        Num=x+Num;
    }
    document.getElementById("Output").innerHTML=Num;
}
function Clear()
{
    Num="";
    document.getElementById("Output").innerHTML=Num;
}

function Convert(ConvertTo)
{
    if(Num.indexOf("+")==-1 && Num.indexOf("*")==-1 && Num.indexOf("-")==-1)
    {
    if(conf==="BinPad")
    {   
        if(ConvertTo==="Bin")
        {
            document.getElementById("Output").innerHTML="already in Bin";
            Num="";
        }
        if(ConvertTo==="Dec")
        {
            const result=parseInt(Num,2);
            Num="";
            document.getElementById("Output").innerHTML=result;
        }
        if(ConvertTo==="Hex")
        {
            const result = parseInt(Num,2).toString(16).toUpperCase();
            Num="";
            document.getElementById("Output").innerHTML=result;
        }
        if(ConvertTo==="Oct")
        {
            const result=parseInt(Num,2).toString(8);
            Num="";
            document.getElementById("Output").innerHTML=result;
    
        }
}
if(conf==="NumPad")
    {
        if(ConvertTo==="Bin")
        {
            const result=parseInt(Num).toString(2);
            Num="";
            document.getElementById("Output").innerHTML=result;
        }
        if(ConvertTo==="Dec")
        {
            document.getElementById("Output").innerHTML="already in Decimal";
            Num="";
        }
        if(ConvertTo==="Hex")
        {
            const result = parseInt(Num).toString(16).toUpperCase();
            Num="";
            document.getElementById("Output").innerHTML=result;
        }
        if(ConvertTo==="Oct")
        {
            const result=parseInt(Num).toString(8);
            Num="";
            document.getElementById("Output").innerHTML=result;
    
        }
}
if(conf==="Hexpad")
    {
        if(ConvertTo==="Bin")
        {
            const result=parseInt(Num,16).toString(2);
            Num="";
            document.getElementById("Output").innerHTML=result;
        }
        if(ConvertTo==="Hex")
        {
            document.getElementById("Output").innerHTML="already in HexaDecimal";
            Num="";
        }
        if(ConvertTo==="Dec")
        {
            const result = parseInt(Num,16);
            Num="";
            document.getElementById("Output").innerHTML=result;
        }
        if(ConvertTo==="Oct")
        {
            const result=parseInt(Num,16).toString(8);
            Num="";
            document.getElementById("Output").innerHTML=result;
    
        }
}
if(conf==="OctPad")
{
    if(ConvertTo==="Bin")
    {
        const result=parseInt(Num,8).toString(2);
        Num="";
        document.getElementById("Output").innerHTML=result;

    }
    if(ConvertTo==="Dec")
    {
        const result=parseInt(Num,8);
        Num="";
        document.getElementById("Output").innerHTML=result;

    }
    if(ConvertTo==="Hex")
    {
        const result=parseInt(Num,8).toString(16).toUpperCase();
        Num="";
        document.getElementById("Output").innerHTML=result;

    }
    if(ConvertTo==="Oct")
    {
        Num="";
        document.getElementById("Output").innerHTML="already in Octal";

    }
}
}
else{
    document.getElementById("Output").innerHTML="invalid Number";
}
}

function Arithemaics()
{
         if(conf==="BinPad")
        {
            var r=parseInt(Operations(2)).toString(2);
            document.getElementById("Output").innerHTML=r;
           
        } 
        if(conf==="NumPad")
        {
            var r=Operations(0).toString();
            document.getElementById("Output").innerHTML=r;
           
        }
        if(conf==="Hexpad")
        {
            var r=parseInt(Operations(16)).toString(16).toUpperCase();
            document.getElementById("Output").innerHTML=r;
           
        }
        if(conf==="OctPad")
        {
            var r=parseInt(Operations(8)).toString(8).toUpperCase();
            document.getElementById("Output").innerHTML=r;
           
        }
}

function Operations(b)
{
    if(Num.indexOf("+")!=-1)
    {
        var numbers=Num.split("+");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x+y;
    }
    if(Num.indexOf("*")!=-1)
    {
        var numbers=Num.split("*");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x*y;
    }
    if(Num.indexOf("-")!=-1)
    {
        var numbers=Num.split("-");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x-y;
    }
    if(Num.indexOf("/")!=-1)
    {
        var numbers=Num.split("/");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x/y;
    }
}

function del()
{
    Num=Num.slice(0,-1);
    document.getElementById("Output").innerHTML=Num;
}