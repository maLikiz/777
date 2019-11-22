function login(){ $.ajax({
type: 'POST',
url: '/core/login/',
data:{ js: 1,
log_log: $('#log_log').val(),
log_pas: $('#log_pas').val()},
cache: false,
error: function(){
alert('Ошибка!');},
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#log_error').html('');
$('#'+data['where']).html(data['text']);
}else{ location.replace('/'); }
} catch (e){ alert('Ошибка!'); } } }); }
function signup(){ $.ajax({
type: 'POST',
url: '/core/signup/',
data:{ js: 1,
reg_log: $('#reg_log').val(),
reg_pas: $('#reg_pas').val(),
reg_rul: $('#check').val(),
reg_ema: $('#reg_ema').val(),
reg_cur: $('#reg_cur').val()},
cache: false,
error: function(){
alert('Ошибка!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#reg_error').html('');
$('#'+data['where']).html(data['text']);
}else{ location.replace('/'); } }
catch (e){ alert('Ошибка!'); } } }); }
function recovery(){ $.ajax({
type: 'POST',
url: '/core/recovery/',
data:{ js: 1,
rec_log: $('#rec_log').val()},
cache: false,
error: function(){
alert('Ошибка!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#rec_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Ошибка!'); } } }); }
function jackpot(){ $('#jackpot-total').load('/core/jackpot/'); }
function withdraw(){ $.ajax({
type: 'POST',
url: '/core/withdraw/',
data:{ js: 1,
wit_sys: $('#wit_sys').val(),
wit_acc: $('#wit_acc').val(),
wit_sum: $('#wit_sum').val()},
cache: false,
error: function(){
alert('Ошибка!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#wit_error').html('');
$('#'+data['where']).html(data['text']); } }
catch (e){ alert('Ошибка!'); } } }); }
function points(){
$.ajax({
type: 'POST',
url: '/core/points/',
data:{ js: 1,
cp_sum: $('#cp_sum').val()},
cache: false,
error: function(){
alert('Ошибка!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#cp_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Ошибка!'); } } }); }
function profile(){
$.ajax({
type: 'POST',
url: '/core/profile/',
data:{ js: 1,
pr_ema: $('#pr_ema').val(),
pr_pho: $('#pr_pho').val(),
pr_ful: $('#pr_ful').val(),
pr_bhd: $('#pr_bhd').val(),
pr_bhm: $('#pr_bhm').val(),
pr_bhy: $('#pr_bhy').val(),
pr_cou: $('#pr_cou').val(),
pr_cit: $('#pr_cit').val(),
pr_adr: $('#pr_adr').val(),
pr_zip: $('#pr_zip').val()},
cache: false,
error: function(){
alert('Ошибка!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#pr_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Ошибка!'); } } }); }
function settings(){
$.ajax({
type: 'POST',
url: '/core/settings/',
data:{ js: 1,
set_pas: $('#set_pas').val(),
set_new: $('#set_new').val(),
set_bon: $('#set_bon').val(),
set_nws: $('#set_nws').val()},
cache: false,
error: function(){
alert('Ошибка!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
$('#st_error').html('');
$('#'+data['where']).html(data['text']); }
} catch (e){ alert('Ошибка!'); } } }); }
function cancel(n){ $.ajax({
type: 'POST',
url: '/core/cancel/',
data:{ js: 1,
cancel: n},
cache: false,
error: function(){
alert('Ошибка!'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){ }else{
$('.cancelbut').hide();
$('.cancelbut2').hide(); } }
catch(e){ alert('Ошибка!'); } } }); }
function phone(){ $.ajax({
type: 'POST',
url: '/core/phone/',
data:{ js: 1,
ph_cod: $('#ph_cod').val()},
cache: false,
error: function(){
alert('Ошибка'); },
success: function(data){
try{ data=JSON.parse(data);
if(data['text']){
if(data['text']==1){
$('#step2activate').hide();
$('#ph_error').text('Подтверждение завершено!');
}else{ $('#ph_error').html('');
$('#'+data['where']).html(data['text']); } }
} catch (e){ alert('Ошибка'); } } }); }
$(document).ready(function(){
setInterval(jackpot,1000);
$('.bottom-info-block-opener').on('keyup click', function(){ $('html, body').animate({ scrollTop: 0 }, 600); });
$('.forget, .history').on('keyup click', function(){ $('#pop-up, #pop-up2').hide();$('#pop-up3').show(); });
$('.login, .kassa').on('keyup click', function(){ $('#pop-up2, #pop-up3').hide();$('#pop-up').show(); });
$('.close-btn').on('keyup click', function(){ $('#pop-up, #pop-up2, #pop-up3').hide(); });
$('#or-register, .profil, .signup').on('keyup click', function(){ $('#pop-up, #pop-up3').hide();$('#pop-up2').show(); });
$('#form1sub').on('keyup click', function(){ $('#form1').submit(); });
$('#form2sub').on('keyup click', function(){ $('#form2').submit(); });
$('#form3sub').on('keyup click', function(){ $('#form3').submit(); });
$('#check').on('keyup input change click', function(){
if($('#check').attr('checked')!=='checked'){$('#check').attr('value','0');}else{$('#check').attr('value','1');} });
$(window).scroll(function(){if($(this).scrollTop()>100){
$('.scrollup').fadeIn();}else{$('.scrollup').fadeOut();} });
$('.scrollup').on('keyup click', function(){ $('html, body').animate({ scrollTop: 0 }, 600); return false; });
$('.bitcoinbutton').on('keyup click', function(){ $('#depositform').hide(); $('#bitcoin').show(); });
$('.depway img').on('keyup click', function(){ depway=$(this).attr('data-depositway'); $('#depositway').attr('value',depway); });
$('.depway').on('keyup click', function(){ $('#phonemobile').hide(); $('#phoneqiwi').hide();
$('.depway').removeClass('active'); $(this).addClass('active');
document.getElementById('phoneqiwi').value=''; document.getElementById('phonemobile').value=''; });
$('#phoneqiwi, #pr_pho, #phonemobile').on('change keyup input click', function(){ if(this.value.match(/[^0-9]/g)){ this.value=this.value.replace(/[^0-9]/g,''); }});
$('.depway.phonemobile').on('keyup click', function(){ $('#phoneqiwi').hide(); $('#phonemobile').show(); });
$('.depway.phoneqiwi').on('keyup click', function(){ $('#phonemobile').hide(); $('#phoneqiwi').show(); });
$('#depamount').on('keyup change input click', function(){ mindep=Number(min);
mindepbtc=Number(minbtc); depwaybtc=$('#depositway').val();
if(depwaybtc=='btc_usd'){ mindep=mindepbtc; }
if(depwaybtc=='eth_usd'){ mindep=mindepbtc; }
deperr='<b>Минимальная сумма '+znak+mindep+'!</b>';
deperr2='Пополнить счет';
deperr3='<b>Неверный формат, пример: 79876543210!</b>';
deperr4='<b>Неверный формат, пример: 9876543210!</b>';
deperr5='<b>Система временно недоступна!</b>';
deperr6='<b>Некорректная сумма!</b>';
deperr7='<span>Вам отправлено SMS с инструкциями</span>';
if(this.value.match(/[^0-9.]/g)){
this.value=this.value.replace(/[^0-9.]/g, '');}
amount=Number($('#depamount').val()); if(mindep>amount){
$('#submitdeposit').attr('disabled',true).css({'opacity':'0.7'});
$('#dep_error').html(deperr);return false;}else{ $('#dep_error').html(deperr2);
$('#submitdeposit').attr('disabled',false).css({'opacity':'1'});}});
$('#submitdeposit').click(function(){
deway=$('#depositway').val();
desum=$('#depamount').val();
phone=$('#phonemobile').val();
if(phone==''){ phone=$('#phoneqiwi').val(); }
if((deway=='qiwi_rub') || (deway=='qiwi_usd') || (deway=='qiwi_eur')){
if(phone.length<11){ $('#dep_error').html(deperr3); return; } }
if((deway=='mts_rub') || (deway=='beeline_rub') || (deway=='tele2_rub') || (deway=='megafon_rub')){
if(phone.length<10){ $('#dep_error').html(deperr4); return; } }
if(phone==''){ $('.depositwindow').load('/deposit/pay/?payway='+deway+'&amount='+desum);
errrr=$('.depositwindow').text();
if(errrr==1){ $('#dep_error').html(deperr4); }
if(errrr==2){ $('#dep_error').html(deperr3); }
if(errrr==3){ $('#dep_error').html(deperr6); }
if(errrr==4){ $('#dep_error').html(deperr5); } }else{
$('.depositwindow').load('/deposit/pay/?payway='+deway+'&amount='+desum+'&phone='+phone);
errrr=$('.depositwindow').text();
if((deway=='mts_rub') || (deway=='beeline_rub') || (deway=='tele2_rub') || (deway=='megafon_rub')){
$('#dep_error').html(deperr7);
if(errrr==5){ $('#dep_error').html(deperr7); } }
if(errrr==1){ $('#dep_error').html(deperr3); }
if(errrr==2){ $('#dep_error').html(deperr4); }
if(errrr==3){ $('#dep_error').html(deperr6); }
if(errrr==4){ $('#dep_error').html(deperr5); } } return false; });
$('#set_nws').click(function(){ if($('#set_nws').is(':checked')){
$('#set_nws').val('1'); }else{ $('#set_nws').val('0'); } });
$('#set_bon').click(function(){ if($('#set_bon').is(':checked')){
$('#set_bon').val('1'); }else{ $('#set_bon').val('0'); } });
$('.activatebutton').on('keyup click', function(){
$.get('/core/send/?type=email');
$('#step1activate').hide(); $('#step1success').show(); });
$('.activatebutton2').on('keyup click', function(){
$.get('/core/send/?type=sms');
$('#step1activate').hide(); $('#step1success').show(); });
$('.activatebutton3').on('keyup click', function(){ phone(); });




$('.cancelbut').on('keyup click', function(){ cancel(1); });
$('.cancelbut2').on('keyup click', function(){ cancel(2); });






$('.outway img').on('keyup click', function(){ outway=$(this).attr('data-payoutway'); $('#wit_sys').attr('value',outway); });
$('.outway').on('keyup click', function(){ $('.outway').removeClass('active'); $(this).addClass('active'); });



var $sidebar = $('.sidebar');


$('.hamburger').on('keyup click', function() {
  var $this = $(this);
  var backgroundImage = '';

  if ($this.hasClass('active')) {
    $this.removeClass('active');
    $sidebar.removeClass('active');
  } else {
    backgroundImage = 'url("/img/burgerclose.png")';

    $this.addClass('active');
    $sidebar.addClass('active');
  }

  $this.css({
    backgroundImage: backgroundImage
  });
});


$('.searchlink').on('keyup click', function() {
  var $searchblock = $('.searchblock');

  if ($searchblock.hasClass('active')) {
    $searchblock.removeClass('active');
$searchblock.hide();
  } else {
    $searchblock.addClass('active'); $searchblock.show();
  }


});

$(function() {
  $('#gamesearch').on('change keyup input click',
    function() {
      if (this.value.length >= 2) {
        $.ajax({
          type: 'post', url: '/core/search/',
          data: {'gamesearch': this.value},
          cache: false,
          success: function(html) {
            $('#games').html(html);
          },
        });
      }
    });
});

function winners(){
$.ajax({ type: 'POST',
url: '/core/winners/',
data: {js: 1},
cache: false,
success: function(html){
$('#winners').html(html); } }); }

winners(); setInterval(winners,5000);

});