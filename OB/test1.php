<script type="text/javascript">





<!--





function MM_goToURL() 

{ //v3.0



  

var i, args=MM_goToURL.arguments; document.MM_returnValue = false;



  

for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");





}



//-->



</script>



<?php



include("class.phpmailer.php"); //匯入PHPMailer類別



 







/*

$Name=$_POST['name'];



$Email=$_POST['email'];





$Phone=$_POST['phone'];



$Content=$_POST['comment'];*/







$Name = 'miaw';



$Email = 'miawcodetest@gmail.com';



$Phone = 'x';





$Content = 'test 囧';

 

date_default_timezone_set("Asia/Taipei"); 





$mail= new PHPMailer(); //建立新物件

//$mail->IsMAIL();

$mail->CharSet = "UTF-8"; //郵件編碼

   // 內部預設編碼改為UTF-8

//$mail->Encoding = "base64";
 

$mail->IsHTML(true); //郵件內容為html ( true || false)

$mail->From = "obamwvvq@premium4.web-hosting.com";
$mail->FromName = "obambooq";
$mail->AddAddress($Email,$Name); //收件者郵件及名稱

  
$mail->Subject = mb_convert_encoding("ob3DHost - 上傳檔案通知","big5","utf-8");;  //郵件標題


$mail->Body = $Content; //郵件內容


/*

$mail->AddBCC("anita_test_one@obamboo.com"); //設定 密件副本收件者





$mail->AddBCC("obtrader@gmail.com"); //設定 密件副本收件者

*/

 





if(!$mail->Send()) 

{



	

	echo "<br>Send Error " . $mail->ErrorInfo;





} 

else {



	

	echo "<div align=center>檔案處理中 ...</div>";





}





?>



<!--

<body onLoad="MM_goToURL('self','login.php');

return document.MM_returnValue">



</body>

-->