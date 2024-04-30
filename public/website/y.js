
var w = window.screen.width;
var h = window.screen.height;
if (w > h) {
    document.getElementById("box").style.width = w / 2;
}
//date differece
function dateDiff( str1, str2 ) {
    var diff = str2 - str1+(23*86400000); 
    var r = {};
    r.y = Math.floor( diff / (86400000*365));
    diff = diff - r.y*365*86400000;
    r.d = Math.floor( diff / 86400000);
    return r;
    return isNaN( diff ) ? NaN : {
        diff : diff,
        ms : Math.floor( diff            % 1000 ),
        s  : Math.floor( diff /     1000 %   60 ),
        m  : Math.floor( diff /    60000 %   60 ),
        h  : Math.floor( diff /  3600000 %   24 ),
        d  : Math.floor( diff / 86400000        )        
    };
}

var speed = 10;
var diff = dateDiff(new Date(1994,7,20),Date.now());
var iam = 'Hi, I am Yadu(nandan).. '+diff.y+" years "+" and "+diff.d+" days old";
var iami = 0;

var desc = "A software engineer, I like to design things mostly by code, Dart, Golang, Java, JavaScript & TypeScript are the languages I speak, always looking for better opportunities where I could play with noSQL DBs as well as relational DBs, I will containerize your apps and I'll maintain Linux <3 VM instances for you.";
var desci = 0;
var mailto = 'mailto:iamyadunandan@gmail.com';
var mailto_visible = 'Mail me';
var website = 'http://www.yadunandan.xyz';
var website_visible = 'My Website';
var linked_in = 'https://in.linkedin.com/in/yadu';
var linked_in_visible = 'My Linkedin';
var github = 'https://github.com/ondbyte';
var github_visible = 'My Github';
var so = 'https://stackoverflow.com/users/12341099/yadu';
var so_visible = 'My StackOverflow';
var blog = "https://medium.com/@yadunandan.xyz";
var blog_visible = "My Medium blog";
var contact = '<a href="' + mailto + '" target="_blank" rel="noopener"><i class="fa fa-envelope" style="font-size:inherit"></i> ' + mailto_visible + '</a><br><a href="' + website + '" target="_blank" rel="noopener"><i class="fa fa-snowflake-o" style="font-size:inherit"></i> ' + website_visible + '</a><br><a href="' + linked_in + '" target="_blank" rel="noopener"><i class="fa fa-linkedin" style="font-size:inherit"></i> ' + linked_in_visible + '</a><br><a href="' + github + '" target="_blank" rel="noopener"><i class="fa fa-github" style="font-size:inherit"></i> ' + github_visible + '</a><br><a href="' + so + '" target="_blank" rel="noopener"><i class="fa fa-stack-overflow" style="font-size:inherit"></i> ' + so_visible + '</a><br><a href="' + blog + '" target="_blank" rel="noopener"><i class="fa fa-wordpress" style="font-size:inherit"></i> ' + blog_visible + '</a>';
var commandLine = 'yadu@127.0.0.1$ ';
var inputHtml = '<input type="text" id="input" name="input">';
var br = "<br>";
var allText = "";
var arti = 0;
//var art2 = 'COMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMIC\nCOMIC      OMIC       MICC      MICCOM       COMICCOMICCOMIC\nCOM     ICCOMIC   I   MICC  I     CCOM   OMICCOMICCOMICCOMIC\nCOM     ICCOMIC   I   MICC  IC     COM       COMICCOMICCOMIC\nCOM     ICCOMIC   I   MICC  I     CCOM   OMICCOMICCOMICCOMIC\n\COMIC      OMIC       MICC      MICCOM       COMICCOMICCOMIC\nCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMI        MIC\nCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMICCOMIC'.split('\n');
var dict = `<p><strong>ond&nbsp;</strong><em>/wʌn-dh/&nbsp;</em>ಒಂದ್<em> /wʌn-dhu/&nbsp;</em><span lang="kn">ಒಂದು&nbsp;<em>n&nbsp; <br /></em><strong>1</strong></span><span lang="kn">.&nbsp;&nbsp;the lowest cardinal number syllable/s in one of the worlds oldest language 'kannada';<br /><strong>2</strong>.&nbsp;&nbsp;half of two in the same language as this 'ಠ ͜&nbsp; &nbsp;ಠ'.<br /></span><strong>byte&nbsp;</strong><em>/bʌɪt/</em><span lang="kn">&nbsp;<em>n<br /></em></span><span lang="kn"><strong>1</strong>.&nbsp;a byte considered as a unit of memory size.</span></p>`;
var a1 = `
                          __  __                    __               
                         /  |/  |                  /  |              
  ______   _______    ____$$ |$$ |____   __    __  _$$ |_     ______  
 /      \\ /       \\  /    $$ |$$      \\ /  |  /  |/ $$   |   /      \\ 
/$$$$$$  |$$$$$$$  |/$$$$$$$ |$$$$$$$  |$$ |  $$ |$$$$$$/   /$$$$$$  |
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |  $$ | __ $$    $$ |
$$ \\__$$ |$$ |  $$ |$$ \\__$$ |$$ |__$$ |$$ \\__$$ |  $$ |/  |$$$$$$$$/ 
$$    $$/ $$ |  $$ |$$    $$ |$$    $$/ $$    $$ |  $$  $$/ $$       |
 $$$$$$/  $$/   $$/  $$$$$$$/ $$$$$$$/   $$$$$$$ |   $$$$/   $$$$$$$/ 
                                        /  \\__$$ |                    
                                        $$    $$/                     
                                         $$$$$$/`;

var a2 = `
                           __  __                    __               
                          |  \\|  \\                  |  \\              
  ______   _______    ____| $$| $$____   __    __  _| $$_     ______  
 /      \\ |       \\  /      $$| $$    \\ |  \\  |  \\|   $$ \\   /      \\ 
|  $$$$$$\\| $$$$$$$\\|  $$$$$$$| $$$$$$$\\| $$  | $$ \\$$$$$$  |  $$$$$$\\
| $$  | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ __ | $$    $$
| $$__/ $$| $$  | $$| $$__| $$| $$__/ $$| $$__/ $$  | $$|  \\| $$$$$$$$
 \\$$    $$| $$  | $$ \\$$    $$| $$    $$ \\$$    $$   \\$$  $$ \\$$     \\
  \\$$$$$$  \\$$   \\$$  \\$$$$$$$ \\$$$$$$$  _\\$$$$$$$    \\$$$$   \\$$$$$$$
                                        |  \\__| $$                    
                                         \\$$    $$                    
                                          \\$$$$$$`;

var a3 = `
                           /$$ /$$                   /$$              
                          | $$| $$                  | $$              
  /$$$$$$  /$$$$$$$   /$$$$$$$| $$$$$$$  /$$   /$$ /$$$$$$    /$$$$$$ 
 /$$__  $$| $$__  $$ /$$__  $$| $$__  $$| $$  | $$|_  $$_/   /$$__  $$
| $$  \\ $$| $$  \\ $$| $$  | $$| $$  \\ $$| $$  | $$  | $$    | $$$$$$$$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$| $$_____/
|  $$$$$$/| $$  | $$|  $$$$$$$| $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
 \\______/ |__/  |__/ \\_______/|_______/  \\____  $$   \\___/   \\_______/
                                         /$$  | $$                    
                                        |  $$$$$$/                    
                                         \\______/`;
var a4 = `
                          $$\\ $$\\                   $$\\               
                          $$ |$$ |                  $$ |              
 $$$$$$\\  $$$$$$$\\   $$$$$$$ |$$$$$$$\\  $$\\   $$\\ $$$$$$\\    $$$$$$\\  
$$  __$$\\ $$  __$$\\ $$  __$$ |$$  __$$\\ $$ |  $$ |\\_$$  _|  $$  __$$\\ 
$$ /  $$ |$$ |  $$ |$$ /  $$ |$$ |  $$ |$$ |  $$ |  $$ |    $$$$$$$$ |
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |  $$ |$$\\ $$   ____|
\\$$$$$$  |$$ |  $$ |\\$$$$$$$ |$$$$$$$  |\\$$$$$$$ |  \\$$$$  |\\$$$$$$$\\ 
 \\______/ \\__|  \\__| \\_______|\\_______/  \\____$$ |   \\____/  \\_______|
                                        $$\\   $$ |                    
                                         \\$$$$$$ |                    
                                          \\______/`;
function replace(str, char) {
    var xStr = str.substring(0, str.length - 2);
    return xStr + char;
}





function saySomethingAboutMe() {
    if (desci < desc.length) {
        describe = desc.substring(0, desci).split("\n").join("<br>");
        document.getElementById("one-text").innerHTML = allText + describe;
        desci++;
        setTimeout(saySomethingAboutMe, speed);
    } else {
        allText += (desc);
        breakLine();
        allText+=`<a href="./resume/YaduCV5.pdf">Here you can download my cv</a>`
        breakLine();
        breakLine();
        allText += "run command 'contact' to print my contact details to std-out (requires root)";
        breakLine();
        allText += commandLine;
        document.getElementById("one-text").innerHTML = allText;
        getInput(initYadunandanXyz);
    }
}
var iamText = "";
function introduce() {
    if (iami < iam.length) {
        iamText += iam.charAt(iami);
        document.getElementById("one-text").innerHTML = allText + "<h2>" + iamText + "</h2>";
        iami++;
        setTimeout(introduce, speed);
    } else {
        allText += "<h2>" + iamText + "</h2>";
        document.getElementById("one-text").innerHTML = allText;
        //breakLine();
        saySomethingAboutMe();
    }
}

var arts = [a1, a2, a3, a4, a1, a2, a3, a4];

qmHtml = '<i id="qm" class="fa fa-question-circle" onclick=qmClicked><div id="dict"></div></i>';

function qmClicked(){
    document.getElementById("qm").onclick = function () {
        document.getElementById("qm").innerHTML = dict;
    }
}

function getArt(artString){
    const isMobile = screen.availHeight>screen.availWidth;
    if(isMobile){
        return  "<pre id='art'>" + artString + "</pre>";
    }
    return "<pre>" + artString + "</pre>";
}
function artItOut() {
    if (arti < arts.length) {
        document.getElementById("one-text").innerHTML = allText + getArt(arts[arti]);
        arti++;
        setTimeout(artItOut, speed * 40)
    } else {
        allText = allText + getArt(arts[arti-1]);
        document.getElementById("one-text").innerHTML = allText;        
        breakLine();
        breakLine();
        introduce();
    }
}

/* document.getElementById("box").onclick = function f() {
    //document.getElementById("cursor").remove();
    document.getElementById('one-text').innerHTML = commandLine + 'processing..';
    document.getElementById("box").onclick = null;
    writeArt2();
} */


function processYesNo(event) {
    if (event.key != "Enter") {
        return;
    }
    var text = document.getElementById("input").value.toLocaleLowerCase().trim();
    allText += text;
    breakLine();
    document.getElementById('one-text').innerHTML = allText;
    if (text == "yes") {
        artItOut();
    } else if (text == "no") {
        allText += "aborting initialization of yadunandan.xyz, run command 'init' again to re initialize the website"+br+commandLine;
        getInput(initYadunandanXyz);
    } else {
        askYesOrNo(processYesNo);
    }
}

function getInput(fun) {
    document.getElementById('one-text').innerHTML = allText + inputHtml;
    document.getElementById("input").select();
    document.getElementById("input").scrollIntoView();
    document.getElementById("input").addEventListener('keypress', fun);
}
var lastCommand = "";
document.onkeydown = function (event) {
    if (event.key == "ArrowUp") {
        console.log("Up key")
        element = document.getElementById("input");
        if (element) {
            element.value = lastCommand
        }
    }
}

function askYesOrNo(fun) {
    allText += "continue? enter YES/no";
    breakLine();
    getInput(fun);
}

function breakLine() {
    allText += br;
}

function initYadunandanXyz(event) {
    if (event.key == "Enter") {
        var element = document.getElementById("input");
        var command = element != null ? element.value.toLocaleLowerCase().trim() : "init";
        lastCommand = command;
        if (command == "contact") {
            allText += command + br + "(13: Permission denied) <br>    E: Unable to lock the contact directory (/my/awesome/contact/), are you root?" + br + commandLine;
            getInput(initYadunandanXyz);
            //document.getElementById("four-text").innerHTML = ph + "contact <br>     (13: Permission denied) <br>    E: Unable to lock the contact directory (/my/awesome/contact/), are you root? <br>" + commandLine + inputHtml;
            //document.getElementById("input").addEventListener('input', processKeyWord);
            //document.getElementById("input").focus();
        } else if (command == 'sudocontact' || command == 'sudo contact') {
            //document.getElementById("input").removeEventListener('input', processKeyWord);
            allText += command + br + "showing contact details" + br + contact + br+commandLine;
            document.getElementById("one-text").innerHTML = allText;
            getInput(initYadunandanXyz);
        } else if (command == "init") {
            allText += command + br + "initializing yadunandan.xyz"
            document.getElementById('one-text').innerHTML = allText;
            breakLine();
            askYesOrNo(processYesNo);
        } else if (command == "clear") {
            allText = commandLine;
            document.getElementById('one-text').innerHTML = allText;
            getInput(initYadunandanXyz);
        } else {
            allText += command + br + "ysh: command not found: " + command + br + commandLine;
            getInput(initYadunandanXyz);
        }
    }
}


function init(){
    allText = commandLine;
    initYadunandanXyz({ key: "Enter" });
}

init();

/*
*/
