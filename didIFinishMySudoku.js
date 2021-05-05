function doneOrNot(board){
    let count0=0
    let count1=0
    let count2=0
    let count3=0
    let count4=0
    let count5=0
    let count6=0
    let count7=0
    let count8=0
    let count9=0
    for (let i=0;i<board.length;i++){
        count0+=board[i][0]
        count1+=board[i][1]
        count2+=board[i][2]
        count3+=board[i][3]
        count4+=board[i][4]
        count5+=board[i][5]
        count6+=board[i][6]
        count7+=board[i][7]
        count8+=board[i][8]
    }
    return (count0===45)&&(count1===45)&&(count2===45)&&(count3===45)&&(count4===45)&&
           (count5===45)&&(count6===45)&&(count7===45)&&(count8===45)&&(board[7][8]!=board[8][7])
            ?'Finished!':'Try again!'
}