let board=[];
let data="";
for (let i = 0; i < 8; i++) {
    board[i]=['..', '..' ,'..', '..', '..','..','..','..']
}
for (let i = 0; i < 8; i++) {
    data+="<br>";
    for (let j = 0; j < 8; j++) {
        data+=board[i][j]+"&ensp;&ensp;"
    }
}
data += "<br/><br/><input type='button' value='userX' onclick='changeX()'>"+
    "<br/><br/><input type='button' value='userO' onclick='changeO()'>"
document.getElementById("carogame").innerHTML=data;
function changeX() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 8; i++) {
        data += "<br/>";
        for (let j = 0; j < 8; j++) {
            data += board[i][j] + "&ensp;&ensp;";
        }
    }if (checkWin2()){
        alert("X win")
    }
    data += "<br/><br/><input type='button' value='userX' onclick='changeX()'>"+
        "<br/><br/><input type='button' value='userO' onclick='changeO()'>"
    document.getElementById("carogame").innerHTML=data;
}
function changeO() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "O";
    for (let i = 0; i < 8; i++) {
        data += "<br/>";
        for (let j = 0; j < 8; j++) {
            data += board[i][j] + "&ensp;&ensp;";
        }
    }if (checkWin()){
        alert(" o win")
    }
    data += "<br/><br/><input type='button' value='userX' onclick='changeX()'>"+
        "<br/><br/><input type='button' value='userO' onclick='changeO()'>"
    document.getElementById("carogame").innerHTML=data;
}
function checkWin() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if(board[i][j]=='O'&&board[i][j+1]=='O'&&board[i][j+2]=='O') {
                return true;
            }
            else{
                if(board[i][j]=='O'&&board[i+1][j]=='O'&&board[i+2][j]=='O'){
                    return true;
                }
                else{
                    if(board[i][j]=='O'&&board[i+1][j+1]=='O'&&board[i+2][j+2]=='O'){
                        return true;
                    }
                    else{
                        if(board[i][j+2]=='O'&&board[i+1][j+1]=='O'&&board[i+2][j]=='O'){
                            return true
                        }
                    }
                }
            }
        }
    }

}
function checkWin2() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if(board[i][j]=='X'&&board[i][j+1]=='X'&&board[i][j+2]=='X') {
                return true;
            }
            else{
                if(board[i][j]=='X'&&board[i+1][j]=='X'&&board[i+2][j]=='X'){
                    return true;
                }
                else{
                    if(board[i][j]=='X'&&board[i+1][j+1]=='X'&&board[i+2][j+2]=='X'){
                        return true;
                    }
                    else{
                        if(board[i][j+2]=='X'&&board[i+1][j+1]=='X'&&board[i+2][j]=='X'){
                            return true
                        }
                    }
                }
            }
        }
    }

}