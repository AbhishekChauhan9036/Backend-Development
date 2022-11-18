function convertToRs( ourCoolForm ){
    ourCoolForm.Rs.value = ourCoolForm.Dlr.value * 80
}

function convertTo$( ourCoolForm ){
    ourCoolForm.Dlr.value= ourCoolForm.Rs.value / 80
}