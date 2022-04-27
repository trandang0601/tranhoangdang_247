$(document).ready(function(){
    
    
    
     var i =1;
    $("#btndtn").click(function(){
        $("#myModal").modal('show');
    });

    function ktmasv(){
        
        let mauKT=/^[1-9]{1}[0-9]{9}$/;
        if($("#masv").val()==""){
            $("#tnmasv").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#masv").val()))
        {
            $("#tnmasv").html("Mã sinh viên có 10 số");
            return false;

        }
        else{
            $("#tnmasv").html("*");
            return true;
        }
    }
    $("#masv").blur(ktmasv);

    

    function kthoten(){
        
        let mauKT=/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        
        if($("#hoten").val()==""){
            $("#tnhoten").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#hoten").val()))
        {
            $("#tnhoten").html("Phải viết hoa chữ cái đầu tiên");
            return false;

        }
        else{
            $("#tnhoten").html("*");
            return true;
        }
    }
    $("#hoten").blur(kthoten);

    function ktntt(){
                
        var today =new Date();
        var ntt= new Date($("ngaytaptrung").val());
        today = today.setDate(today.getDate()+7);
        
        
        if($("#ngaytaptrung").val()==""){
            $("#tnNgaytaptrung").html("Không được rỗng");
            return false;
        }
        if(today<ntt)
        {
            $("#tnNgaytaptrung").html("Phải sau ngày hiện tại 7 ngày");
            return false;

        }
        $("#tnNgaytaptrung").html("*");
        return true
    }
    $("#ngaytaptrung").blur(ktntt);
    function ktemail(){
        
        if($("#email").val()==""){
            $("#tnemail").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#email").val()))
        {
            $("#tnemail").html("bắt buộc phải nhập");
            return false;

        }
        else{
            $("#tnemail").html("*");
            return true;
        }

    
    }
    $("#email").blur(ktemail);

    function ktsdt(){
        
        let mauKT=/^[0-9]{1}[0-9]{9}$/;
        if($("#sdt").val()==""){
            $("#tnsdt").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#sdt").val()))
        {
            $("#tnsdt").html("Số điện thoại có 10 số");
            return false;

        }
        else{
            $("#tnsdt").html("*");
            return true;
        }
    }
    $("#sdt").blur(ktsdt);

    $("#save").click(function(){
        
        var chk= $('#chkboi:checked').val();
       
        var masv = $("#masv").val();
        var hoten = $("#hoten").val();
        var email = $("#email").val();
        //alert(tp+" ");
        var ntt = $("#ngaytaptrung").val();
        var nk = $("#sdt").val();
        
        var dong = '<tr><td>'+(i++)+'<td>'+masv+'</td>'+'<td>'+hoten+'</td>'+'<td>'+ntt+'</td>'+'<td>'+email+'</td>'+'<td>'+nk+'</td>'+'</td></tr>';
        $("#danhsach").append(dong);
        $("#myModal").modal("hide");
    }); 
});