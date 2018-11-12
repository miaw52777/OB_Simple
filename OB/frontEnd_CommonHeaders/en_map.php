<?php 

/* input mother language : English, return the language which you selected.*/
function getMapLanguage($lang,$key)
{
	
	if($lang == "China")
	{
		$Dictionary = array("Home" => "首页",
							"Products" => "产品",
						    "Enquiry" => "查询",
							"Full Show Of Our 3D Assets" => "显示所有的3D产品",
							"Company" => "公司"
						    );		
	}
	else if($lang == "Taiwan")
	{
		$Dictionary = array("Home" => "首頁",
							"Products" => "產品",
						    "Enquiry" => "查詢",
							"Full Show Of Our 3D Assets" => "顯示所有3D產品"
						    );		
	}
	
	$result = $Dictionary[$key];
	
	if($result == "")
	{
		// default print English
		$result = $key;		
	}
	// extend your language dictionary here.
	
	return $result;
	
}

function setDefaultLanguage($lang)
{		
	if($lang == "") { $lang = "English"; }
	return $lang;
}
 

?>