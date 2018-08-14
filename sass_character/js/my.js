$(document).ready(function () {
    
    var gender, name, surname;
    
    $(".submit").click(function(){
        if($(".male").hasClass("active")) gender = "male";
        else if($(".female").hasClass("active")) gender = "female";
        else gender = "none";
        
        $(".s-gender span").html(gender);
        $(".s-name span").html(name);
        $(".s-surname span").html(surname);
        
        $(".summary").fadeIn();
    });
    function switch_btn($btn_1, $btn_2) {
        $($btn_1).click(function() {
            $state = 1;
            if ($(this).hasClass("active")){
                $(this).removeClass("active");
            }
            else {
                $(this).addClass("active");
                if ($($btn_2).hasClass("active")){
                    $($btn_2).removeClass("active");
                }
            }
        });
        
        $($btn_2).click(function() {
        if ($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
            if ($($btn_1).hasClass("active")){
                $($btn_1).removeClass("active");
            }
        }
        });
    }
    switch_btn(".male", ".female");

    $(".name button").click(function(){
        var names = new Array();
        $.get('names.txt', function(data){
            names = data.split('\n');
            var rNum = Math.abs((Math.random() * names.length).toFixed(0)-1);
            //console.log(names);
            //console.log(rNum+' '+names[rNum]);
            $(".name input").val(names[rNum]);
            name = $(".name input").val();
        });
    });

    $(".surname button").click(function(){
        var surnames = new Array();
        $.get('surnames.txt', function(data){
            surnames = data.split('\n');
            var rNum = Math.abs((Math.random() * surnames.length).toFixed(0)-1);
            console.log(surnames);
            console.log(rNum+' '+surnames[rNum]);
            $(".surname input").val(surnames[rNum]);
            surname = $(".surname input").val();
            
        });
    });    

});