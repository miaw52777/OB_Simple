<?php

// attachement file
$filename = 'fv-320.jpg';
$path = './uploadfiles/';
$file = $path.$filename;
$content = file_get_contents( $file);
$content = chunk_split(base64_encode($content));
$uid = md5(uniqid(time()));
$name = basename($file);;


// send mail info
// $mailcc = "anita_test_one@obamboo.com, obtrader@gmail.com"; //設定 密件副本收件者
$mailto = 'miawcodetest@gmail.com';
$mailsubject = 'ob3DHost - 上傳檔案通知';
$message = "Line 1\r\nLine 2\r\nLine 3"; // The Content
$message = wordwrap($message, 70, "\r\n");
$mailcc = "miaw52777@gmail.com,miawcodetestdddd@gmail.com";



// header
//$headers = "From: ".$from_name." <".$from_mail.">\r\n";
$headers .= "Reply-To: ".$replyto."\r\n";
$headers .= "Cc: ".$mailcc."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";

// message & attachment
$body = "--".$uid."\r\n";
$body .= "Content-type:text/plain; charset=iso-8859-1\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $message."\r\n\r\n";
$body .= "--".$uid."\r\n";
if($filename != '')
{
	$body .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n";
	$body .= "Content-Transfer-Encoding: base64\r\n";
	$body .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
	$body .= $content."\r\n\r\n";
	$body .= "--".$uid."--";
}

// Send
$success = mail($mailto, $mailsubject, $body, $headers);

if (!$success) {
    $errorMessage = error_get_last()['message'];
	echo "<br>Send Error " .$errorMessage;
}
else
{
	echo 'send mail ok~';
	//echo "<div align=center>檔案處理中 ...</div>";
	
}

?>