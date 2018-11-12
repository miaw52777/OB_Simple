<?

include_once("./dbAccess/Langage_Func.php");
include_once("./dbAccess/CommFunc.php");

?> 
<nav class="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-light navbar-hide-on-scroll navbar-border navbar-shadow navbar-brand-center">

    <div class="navbar-wrapper">

      <div class="navbar-header">

        <ul class="nav navbar-nav">

          <li class="nav-item mobile-menu hidden-md-up float-xs-left"><a class="nav-link nav-menu-main menu-toggle hidden-xs"><i class="icon-menu5 font-large-1"></i></a></li>

          <li class="nav-item"><a href="standard_product-structure-list.php?lang=<? echo $name_lang; ?>" class="navbar-brand nav-link"><img alt="3DHost" src="app-assets/images/logo/3dhost-logo-light.png" class="brand-logo"></a></li>

          <li class="nav-item hidden-md-up float-xs-right"><a data-toggle="collapse" data-target="#navbar-mobile" class="nav-link open-navbar-container"><i class="icon-ellipsis pe-2x icon-icon-rotate-right-right"></i></a></li>

        </ul>

      </div>

	  <div class="navbar-container content container-fluid">

        <div id="navbar-mobile" class="collapse navbar-toggleable-sm">

          <ul class="nav navbar-nav">

            <li class="nav-item hidden-sm-down"><a class="nav-link nav-menu-main menu-toggle hidden-xs"><i class="icon-menu5"></i></a></li>

            <li class="nav-item hidden-sm-down"><a href="#" class="nav-link nav-link-expand"><i class="ficon icon-expand2"></i></a></li>

          </ul>

          <ul class="nav navbar-nav float-xs-right">
<?
				$url = $_SERVER['REQUEST_URI'];
				
				
				if ( (strpos($url, '?') !== FALSE)) /* has param */
				{	

					$url_root = substr($url,0,strpos($url,'?'));				
					
					$url_param = substr($url,strpos($url,'?'));
				
					$url_param_list = explode('&',str_replace('?','',$url_param));				
					
					$url_param_str='';
					
					for($i=0;$i<count($url_param_list);$i++)
					{
						
						if ( (strpos($url_param_list[$i], 'lang=') !== FALSE))				
						{
								
						}
						else 
						{
							$url_param_str .= '&'.$url_param_list[$i]; 
						}
					}
				}
				else $url_param_str=''; 
			
				$result = getLangListInfo();
				
				$dataArr = convertToAssocArray($result['DATA']);
				$filter_array = array("lang_name" => $name_lang);
				$sel_lang = CompareArrayByFilter($dataArr,$filter_array);
				 
				
				 echo '<li class="dropdown dropdown-language nav-item"><a id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link"><i class="flag-icon flag-icon-'.$sel_lang[0]['front_lang_class'].'"></i><span class="selected-language">'.$name_lang.'</span></a>

                <div aria-labelledby="dropdown-flag" class="dropdown-menu"> ';
			  
			    mysql_data_seek($result['DATA'],0);
			
			 

				
				while($itemrow = mysql_fetch_assoc($result['DATA']))																	

  			    {																				

					$lang_name = $itemrow['lang_name'];																		

					$class_name = $itemrow['front_lang_class'];
						
					if($url_param_str != '')
					{						
						echo '<a href="'.$url_root.'?lang='.$lang_name.$url_param_str.'"  class="dropdown-item"><i class="flag-icon flag-icon-'.$class_name.'"></i> '.$lang_name.'</a> ';	
					}
					else
					{
						echo '<a href="?lang='.$lang_name.'"  class="dropdown-item"><i class="flag-icon flag-icon-'.$class_name.'"></i> '.$lang_name.'</a> ';							
					}
					
				}
			  
			  ?>
				
			</div>

            </li>

          </ul>

        </div>

      </div>
      

    </div>

  </nav> 