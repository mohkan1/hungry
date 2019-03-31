$(document).ready(function() {
    $('img').hide();
    $('main').hide();
    $('aside').hide();
    $('article').hide();

    function myFunction() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("myImg").className = "slideUp";
            document.getElementById("myImg2").className = "slideUp2";
            document.getElementById("myImg").setAttribute("style", "display:visible");
            document.getElementById("myImg2").setAttribute("style", "display:visible");
        }
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            document.getElementById("myImg3").className = "slideUp3";
            document.getElementById("myImg3").setAttribute("style", "display:visible");
        }
        if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
            document.getElementById("myImg4").className = "slideUp3";
            document.getElementById("myImg4").setAttribute("style", "display:visible");
        }
    }
    window.onscroll = function() {
        myFunction();
    };
    $('.dropdown').show();
    $('.map').show();
    $('#top').show();
    $("#menu").click(function() {
        $('html,body').animate({
            scrollTop: $(".element1").offset().top
        }, 2000);
    });
    $("#who").click(function() {
        $('html,body').animate({
            scrollTop: $(".element2").offset().top
        }, 2000);
    });
    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".container").offset().top
        }, 2000);
    });
    $("#top").click(function() {
        $('html,body').animate({
            scrollTop: $("#getup").offset().top
        }, 2000);
    });
    $("#map").click(function() {
        $('html,body').animate({
            scrollTop: $(".map").offset().top
        }, 2000);
    });
    $("#home").click(function() {
        $('html,body').animate({
            scrollTop: $(".parallax").offset().top
        }, 2000);
    });

    function testInfo(input, re, textsvar) {
        var OK = re.exec(input);
        if (!OK) $(textsvar).text("fel");
        else $(textsvar).text("ok");
    }
    $("#number").keyup(function() {
        var re = /^[0]{1}[0-9]{6,15}$/;
        testInfo($('#number').val(), re, ".answerN");
    });
    $("#fname").keyup(function() {
        var re = /^[A-Za-z]+$/;
        testInfo($('#fname').val(), re, ".answerF");
    });
    $("#lname").keyup(function() {
        var re = /^[A-Za-z]+$/;
        testInfo($('#lname').val(), re, ".answerL");
    });
    $("#gmail").keyup(function() {
        var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        testInfo($('#gmail').val(), re, ".answerG");
    });
    var i = 0;
    var txt = 'Welcome to Hungry';
    var speed = 100;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});
