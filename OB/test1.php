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



include("class.phpmailer.php"); //�פJPHPMailer���O



 







/*

$Name=$_POST['name'];



$Email=$_POST['email'];





$Phone=$_POST['phone'];



$Content=$_POST['comment'];*/







$Name = 'miaw';



$Email = 'miawcodetest@gmail.com';



$Phone = 'x';





$Content = 'test ʨ';

 

date_default_timezone_set("Asia/Taipei"); 





$mail= new PHPMailer(); //�إ߷s����

//$mail->IsMAIL();

$mail->CharSet = "UTF-8"; //�l��s�X

   // �����w�]�s�X�אּUTF-8

//$mail->Encoding = "base64";
 

$mail->IsHTML(true); //�l�󤺮e��html ( true || false)

$mail->From = "obamwvvq@premium4.web-hosting.com";
$mail->FromName = "obambooq";
$mail->AddAddress($Email,$Name); //����̶l��ΦW��

  
$mail->Subject = mb_convert_encoding("ob3DHost - �W���ɮ׳q��","big5","utf-8");;  //�l����D


$mail->Body = $Content; //�l�󤺮e


/*

$mail->AddBCC("anita_test_one@obamboo.com"); //�]�w �K��ƥ������





$mail->AddBCC("obtrader@gmail.com"); //�]�w �K��ƥ������

*/

 





if(!$mail->Send()) 

{



	

	echo "<br>Send Error " . $mail->ErrorInfo;





} 

else {



	

	echo "<div align=center>�ɮ׳B�z�� ...</div>";





}





?>



<!--

<body onLoad="MM_goToURL('self','login.php');

return document.MM_returnValue">



</body>

-->