let oceni = [73,67,38,33]

function roundgrades (oceni) {
    for (let i = 0; i<oceni.lenght; i++) {
        if ((oceni[i] >=38) && ((oceni[i] %5)==3) || ((oceni[i])%5) ==4) {
            oceni [i] = oceni [i] + (5-(oceni[i] % 5)) //63 => 63+ (5-(63%5))
        }
        
    }
    
    console.log (oceni)
}