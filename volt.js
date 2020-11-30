var global = 0;
var angle, type, value;
var svg = document.getElementById("svg");
console.log(svg);
var bool = false;
var amp = false;
var val, c = 0;

function turnAngle(angle, type, value){
    //console.log(angle);
    var e = document.getElementById("l").setAttribute("transform", 'rotate(' + angle + ',200, 300)');
    var display = document.getElementById("display");
    var title = document.getElementById("title");
    //var div = document.getElementById("desc");
    document.getElementById("warning").style.display = "none";
    display.innerHTML = "000";
    document.getElementById("a20").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("type").innerHTML = "";
    document.getElementById("mu").innerHTML = "";
    let text1 = document.getElementById("a-text");
    let text2 = document.getElementById("a20-text");
    document.getElementById("ac1").style.display = "none";
    document.getElementById("ohm").style.display = "none";

    //Bisognerà fare tutti i casi
    if(angle != 0)
        display.style.display = "block";
    else   
        display.style.display = "none";

    if(type == "DC"){
        title.innerHTML = "DC Voltage Measuring";
        document.getElementById("img").setAttribute("href", "svg/dc.svg");
        document.getElementById("a").style.display = "none";
        document.getElementById("dc").style.display = "block";
        document.getElementById("type").innerHTML = "<tspan>The voltmeter is connected</tspan><tspan dy='30' x='1050'>in parallel with the circuit</tspan>";
        document.getElementById("mu").innerHTML = "The display shows the measurement in volts";
        
        if(value == 600)
        {
           let text = document.getElementById("dc-text");
           text.innerHTML = "<tspan>It’s the highest range.</tspan><tspan dy='30' x='40'>It should be used before measuring an unknown voltage to get an idea of the value of the measurement.</tspan><tspan dy='30' x='40'>In this example, we learn that the voltage across the light bulb terminals is about 4 V.</tspan><tspan dy='30' x='40'>So we learn that the best choice of range is 20 V.</tspan><tspan dy='30' x='40'>Down the ranges by observing the accuracy of the displayed measurement.</tspan>";
            display.innerHTML = "004";
            
        }
        else if(value == 200)
        {
            let text = document.getElementById("dc-text");
            text.innerHTML = "<tspan>With this range, we can measure up to 200 V.</tspan><tspan dy='30' x='40'>The measurement is more accurate than 600 V (2 significant digits* instead of one for the example)</tspan><tspan dy='30' x='40'>* Significant digits are the known digits we are certain of plus the first digit which is uncertain.</tspan>";
            display.innerHTML = "04.2";
            
        } else if(value == 20)
        {
            let text = document.getElementById("dc-text");
            text.innerHTML = "<tspan>With this range, we can measure up to 20 V.</tspan><tspan dy='30' x='40'>This is the range that gives the best accuracy for the example (3 significant digits).</tspan><tspan dy='30' x='40'>Here we read : U = 4.27 V</tspan><tspan dy='30' x='40'>The 7 is chosen rather than 6 as it appears longer ...</tspan>";
            display.innerHTML = "4.27";
            
        } else if(value == 2)
        {
            let text = document.getElementById("dc-text");
            text.innerHTML = "<tspan> With this range, we can measure up to 2 V.</tspan><tspan dy='30' x='40'>In this example, we see 1 at left of the display. This means that the measured voltage exceeds 2 V.</tspan><tspan dy='30' x='40'>Rapidly changing range : even if the voltmeter is quite strong, it's a very bad habit to use a </tspan><tspan dy='30' x='40'>range on the ammeter that is too small, it will make the range unusable !</tspan>";
            display.innerHTML = "1.";
            document.getElementById("warning").style.display = "block";
            document.getElementById("mu").innerHTML = "The display indicates a problem";
        }
    } else if(type == "AC"){
        title.innerHTML = "Measure the RMS (effective) value of ALTERNATING VOLTAGES";
        document.getElementById("a").style.display = "none";
        document.getElementById("dc").style.display = "none";
        document.getElementById("img").setAttribute("href", "");

        if(value == 600){
            document.getElementById("img").setAttribute("href", "svg/ac.svg");
            document.getElementById("ac1").style.display = "block";
            display.innerHTML = "230";
        }
        
    } else if(type == "OHM"){
        title.innerHTML = "RESISTANCE measuring";
        document.getElementById("a").style.display = "none";
        document.getElementById("dc").style.display = "none";
        document.getElementById("img").setAttribute("href", "");
        document.getElementById("img").setAttribute("href", "svg/ohm.svg");
        document.getElementById("ohm").style.display = "block";
        let text3 = document.getElementById("ohm-text");

        if(value == "2M"){
            text3.innerHTML = "<tspan>With this range, we can measure up to 2MΩ.</tspan><tspan dy='30' x='40'>(M for mega = million)</tspan><tspan dy='30' x='40'>Display shows zero but it does not mean that the measured resistance is zero. If the value is</tspan><tspan dy='30' x='40'>lower than 1kΩ, it will not appear here.</tspan>";
            display.innerHTML = ".000";
            document.getElementById("mu").innerHTML = "The display shows the measurement in megohms (MΩ)";
        } else if(value == "200k"){
            text3.innerHTML = "<tspan>With this range, we can measure up to 200kΩ.</tspan><tspan dy='30' x='40'>Display shows zero but it does not mean that the measured resistance is zero. If the value is</tspan><tspan dy='30' x='40'>lower than 0.1kΩ, it will not appear here.</tspan>";
            display.innerHTML = "00.0";
            document.getElementById("mu").innerHTML = "The display shows the measurement in kilohms (kΩ)";
        }else if(value == "20k"){
            text3.innerHTML = "<tspan>With this range, we can measure up to 20kΩ.</tspan><tspan dy='30' x='40'>Here we learn that the measured resistance is around 30 Ω</tspan>";
            display.innerHTML = "0.03";
            document.getElementById("mu").innerHTML = "The display shows the measurement in kilohms (kΩ)";
        } else if(value == "2k"){
            text3.innerHTML = "<tspan>With this range, we can measure up to 2kΩ.</tspan><tspan dy='30' x='40'>We see here 39Ω, but the range 200Ω will add a significant digit.</tspan>";
            display.innerHTML = ".039";
            document.getElementById("mu").innerHTML = "The display shows the measurement in kilohms (kΩ)";
        } else if(value == "200"){
            text3.innerHTML = "<tspan>With this range, we can measure up to 200Ω.</tspan><tspan dy='30' x='40'>The multimeter will display the most accurate measurement.</tspan><tspan dy='30' x='40'>Here, zero is a significant digit: note that R = 39Ω.</tspan>";
            display.innerHTML = "39.0";
            document.getElementById("mu").innerHTML = "The display shows the measurement in ohms (Ω)";
        }
        
    } else if(type == "AMP"){
        title.innerHTML = "CURRENT measuring";
        document.getElementById("a").style.display = "block";
        document.getElementById("img").setAttribute("href", "svg/a-before.svg");
        document.getElementById("dc").style.display = "none";
        document.getElementById("type").innerHTML = "<tspan>The voltmeter is connected</tspan><tspan dy='30' x='1050'>in series with the circuit</tspan>";
        document.getElementById("mu").innerHTML = "The display shows the measurement in milliamperes";
        //bool2 = false;
        bool = false;
        //alert(value);
        if(value == 20){
            val = 20;
            document.getElementById("a").style.display = "none";
            document.getElementById("img").setAttribute("href", "");
            document.getElementById("buttons").style.display = "block";
            display.innerHTML = "";
            document.getElementById("mu").innerHTML = "";
        } else if(value == 2){
            val = 2;
            display.innerHTML = ".000";
            text1.innerHTML = "<tspan> With this range, we can measure current up to 2 mA.</tspan><tspan dy='30' x='40'>If the intensity is higher, the AMMETER MAY BE DAMAGED !</tspan><tspan dy='30' x='40'>We must begin the highest range (10 A) to get an idea of the value of the measurement.</tspan>";
        } else if(value == 200){
            val = 200;
            display.innerHTML = "00.0";
            text1.innerHTML = "<tspan> With this range, we can measure current up to 200 mA.</tspan><tspan dy='30' x='40'>If the intensity is higher, the AMMETER MAY BE DAMAGED !</tspan><tspan dy='30' x='40'>We must begin the highest range (10 A) to get an idea of the value of the measurement.</tspan>";
        }
        /*if((value == 2 || value == 200) && !amp){
            alert("DEvi prima usare quello da 10 A");
        }*/
        
    } else {
        title.innerHTML = "MULTIMETER";
        document.getElementById("img").setAttribute("href", "");
        document.getElementById("a").style.display = "none";
        document.getElementById("dc").style.display = "none";
        
    }
}

function change(){
    let text1 = document.getElementById("a-text");
    let text2 = document.getElementById("a20-text");
    document.getElementById("warning").style.display = "none";
    if((val == 2 || val == 200) && !amp && c!=1)
    {
        alert("You MUST use the 10A range first!");
    } else if(val == 20 && !amp && c==0){
        amp = true;
        if(!bool)
        {
            document.getElementById("img").setAttribute("href", "svg/a.svg");
            bool = !bool;
        } else {
            document.getElementById("img").setAttribute("href", "svg/a-before.svg");
            bool = !bool;
        }
        
    } else if(val == 20 && c == 2 && !amp){
        alert("You MUST use the 10A range first!");
    } else
    {
        amp = true;
        if(!bool)
        {
            
            if(val == 20 && c==1){
                display.innerHTML = "0.18";
                document.getElementById("img").setAttribute("href", "svg/a.svg");
                bool = !bool;
            }
            else if(val == 2){
                display.innerHTML = "1.";
                document.getElementById("warning").style.display = "block";
                document.getElementById("mu").innerHTML = "The display indicates a problem!";
            }
            else if(val == 200){
                display.innerHTML = "184.7";
                document.getElementById("img").setAttribute("href", "svg/a.svg");
                bool = !bool;
            }else if(val == 20 && c==2){
                display.innerHTML = "1.";
                document.getElementById("warning").style.display = "block";
                document.getElementById("mu").innerHTML = "The display indicates a problem!";
            }
        } else {
            document.getElementById("img").setAttribute("href", "svg/a-before.svg");
            bool = !bool;
            if(val == 20 && c==1){
                display.innerHTML = "0.00";
                
            }else if(val == 2){
                display.innerHTML = ".000";
                
            }else if(val == 200){
                display.innerHTML = "00.0";

            }else if(val == 20 && c==2){
                display.innerHTML = ".000";
            }
        }

        
    
    } 
}

function button1(){
    document.getElementById("buttons").style.display = "none";
    document.getElementById("a20").style.display = "block";
    document.getElementById("img").setAttribute("href", "svg/a-before.svg");
    c = 1;
    display.innerHTML = "0.00";
    document.getElementById("mu").innerHTML = "The display shows the measurement in amperes";
}

function button2(){
    document.getElementById("buttons").style.display = "none";
    document.getElementById("a").style.display = "block";
    document.getElementById("img").setAttribute("href", "svg/a-before.svg");
    display.innerHTML = ".000";
    c = 2;
    document.getElementById("mu").innerHTML = "The display shows the measurement in milliamperes";
}

console.log(window.screen.width, window.screen.height);