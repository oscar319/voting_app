
let voteCount = "vote Count: "
let votefor = 0;
let OSCAR = 20;
let voteagainst = 0;
//document.write(vote(1));
//if else if and else statements
if(OSCAR>30) {
    document.write("VICTOR lost the presidential election")
}else{
    document.write("OSCAR wins the presidential election")
}

//function for vote for
function votef(){
votefor = votefor +1
document.getElementById("count1").innerText = voteCount + votefor
}
//function for vote against
function voteA(){
    voteagainst = voteagainst +1
    document.getElementById("count2").innerText = voteCount + voteagainst
    }
    //function for total votes
    function total(){
        let reading = "Total Vote Cast: "
        voteTotal = votefor + voteagainst
        document.getElementById("count5").innerText = reading + voteTotal
    }
    //function for percentage of votes for
    function voteperfor(){
        let read1 = "Vote Count%: "
        votepercentage = votefor / voteTotal * 100
        document.getElementById("count3").innerText = read1 + votepercentage + "%"

    }
    //function for percentage of votes against
    function voteperagainst(){
        let read1 = "Vote Count%: "
        votepercentage = voteagainst / voteTotal * 100
        document.getElementById("count4").innerText = read1 + votepercentage + "%"
    }
    