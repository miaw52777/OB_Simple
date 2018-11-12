
<?
  function getLinkTitle($name_lang,$linkTitle)
  {
	if($linkTitle == "Home")
	{		
		return '<li class="breadcrumb-item"><a href="standard_product-structure-list.php?lang='.$name_lang.'"><i class="icon-home3"></i>'.getMapLanguage($name_lang, "Home").'</a> </li>';
	}		
    else if($linkTitle == "Products")
	{
		return '<li class="breadcrumb-item"><a href="standard_product-structure-list.php?lang='.$name_lang.'"><i class="icon-ios-folder"></i> '.getMapLanguage($name_lang, $linkTitle).'</a> </li>';		
	}
	else if($linkTitle == "Enquiry")
	{
		return '<li class="breadcrumb-item active"><a href="standard_form.php?lang='.$name_lang.'"><i class="icon-mail6"></i> '.getMapLanguage($name_lang, $linkTitle).'</a> </li>';		
	}		
  }

?>
				