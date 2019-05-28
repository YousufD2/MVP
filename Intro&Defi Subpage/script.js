$(document).ready(function () {

    $('.js--section-style').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });




    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);

    });



});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function find() {
    var oBox = document.getElementById("find_page");
    var oContent = oBox.innerHTML;
    var testTxt = document.getElementById("search_input");
    var oBtn = document.getElementById("btn");
    var val = testTxt.value;
    var findText = oContent.split(val);
    if (val){
        oBox.innerHTML = findText.join('<span style="color:red;">' + val + '</span> ');
    }
    else {}
}
