 <div class="main-menu menu-static menu-light menu-accordion menu-shadow">

        <div class="main-menu-content">

          <ul id="main-menu-navigation" data-menu="menu-navigation" class="navigation navigation-main">

		     
            <li class="nav-item"><a href="standard_product-structure-list.php?lang=<? echo $name_lang; ?>"><i class="icon-home3"></i><span data-i18n="nav.category.support" class="menu-title"><? echo getMapLanguage($name_lang, "Home"); ?> </span></a> </li>

          <li class="nav-item"><a href="standard_product-structure-list.php?lang=<? echo $name_lang; ?>"><i class="icon-ios-folder"></i><span data-i18n="nav.dash.main" class="menu-title"><? echo getMapLanguage($name_lang, "Products"); ?></span> 

              <!--<span class="tag tag tag-primary tag-pill float-xs-right mr-2">5</span>--> 

              </a>

              <? 

			 

				// 印左邊選單

  			    $rule = get_Products_Category_Select_Rule('PARENT_ID','NULL');	

				$rule = $rule.' '.get_Products_Category_Select_Rule('VALID','T');	

				$queryResult = get_Products_Category_List($rule);

				

				echo '<ul class="menu-content">';

				while($temp = mysql_fetch_assoc($queryResult))

				{	

					// root : leve1 1			
					if(leve1 != "final")
					{
						

						if($id == $temp['id'])

						{

						  $strActive = 'active';

						}			  

						else 

						{

						   $strActive = '';

						}

						echo '<li class="'.$strActive.'"><a href="standard_product-structure-list.php?lang='.$name_lang.'" class="menu-item">'.stringWrap($temp['Product_Name']).'</a>';

						$level_cnt = 1;					

						

						category_tree($name_lang, $temp['id'], $level, $level_cnt,false,$prod_id,$strActive,$id);		
					}
					else
					{
						echo '<li class="active"><a href="standard_product-structure-list.php?lang='.$name_lang.'" class="menu-item">'.stringWrap($temp['Product_Name']).'</a>';

						$level_cnt = 1;			

						category_tree($name_lang,$temp['id'], $level, $level_cnt,true,$prod_id);		
						
					}

			     } 				 

				 echo '</li></ul>';			

			?>

            </li>
			
			 <li class="nav-item"><a href="standard_form.php?lang=<? echo $name_lang; ?>"><i class="icon-mail6"></i><span class="menu-title"><? echo getMapLanguage($name_lang, "Enquiry"); ?></span></a> </li>

          <li class="nav-item"><a href="standard_about.php?lang=<? echo $name_lang; ?>"><i class="icon-office"></i><span class="menu-title"><? echo getMapLanguage($name_lang, "About"); ?></span></a> </li>

          <li class="nav-item"><a href="standard_exhibition.php?lang=<? echo $name_lang; ?>"><i class="icon-android-globe"></i><span class="menu-title"><? echo getMapLanguage($name_lang, "Exhibition"); ?></span></a> </li>

          <li class="nav-item"><a href="standard_video.php?lang=<? echo $name_lang; ?>"><i class="icon-android-film"></i><span class="menu-title"><? echo getMapLanguage($name_lang, "Video"); ?></span></a> </li>

            <li class=" nav-item"><a href="http://www.obamboo.com/3DHost/contact.html"><i class="icon-support"></i><span data-i18n="nav.category.support" class="menu-title"><? echo getMapLanguage($name_lang, "Support"); ?></span></a> </li>

          </ul>

        </div>

      </div>