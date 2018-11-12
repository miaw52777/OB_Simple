define("ace/snippets/css",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "snippet .\n\
	${1} {\n\
		${2}\n\
	}\n\
snippet !\n\
	 !important\n\
snippet bdi:m+\n\
	-moz-border-image: url(${1}) ${2:0} ${3:0} ${4:0} ${5:0} ${6:stretch} ${7:stretch};\n\
snippet bdi:m\n\
	-moz-border-image: ${1};\n\
snippet bdrz:m\n\
	-moz-border-radius: ${1};\n\
snippet bxsh:m+\n\
	-moz-box-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\n\
snippet bxsh:m\n\
	-moz-box-shadow: ${1};\n\
snippet bdi:w+\n\
	-webkit-border-image: url(${1}) ${2:0} ${3:0} ${4:0} ${5:0} ${6:stretch} ${7:stretch};\n\
snippet bdi:w\n\
	-webkit-border-image: ${1};\n\
snippet bdrz:w\n\
	-webkit-border-radius: ${1};\n\
snippet bxsh:w+\n\
	-webkit-box-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\n\
snippet bxsh:w\n\
	-webkit-box-shadow: ${1};\n\
snippet @f\n\
	@font-face {\n\
		font-family: ${1};\n\
		src: url(${2});\n\
	}\n\
snippet @i\n\
	@import url(${1});\n\
snippet @m\n\
	@media ${1:print} {\n\
		${2}\n\
	}\n\
snippet bg+\n\
	background: #${1:FFF} url(${2}) ${3:0} ${4:0} ${5:no-repeat};\n\
snippet bga\n\
	background-attachment: ${1};\n\
snippet bga:f\n\
	background-attachment: fixed;\n\
snippet bga:s\n\
	background-attachment: scroll;\n\
snippet bgbk\n\
	background-break: ${1};\n\
snippet bgbk:bb\n\
	background-break: bounding-box;\n\
snippet bgbk:c\n\
	background-break: continuous;\n\
snippet bgbk:eb\n\
	background-break: each-box;\n\
snippet bgcp\n\
	background-clip: ${1};\n\
snippet bgcp:bb\n\
	background-clip: border-box;\n\
snippet bgcp:cb\n\
	background-clip: content-box;\n\
snippet bgcp:nc\n\
	background-clip: no-clip;\n\
snippet bgcp:pb\n\
	background-clip: padding-box;\n\
snippet bgc\n\
	background-color: #${1:FFF};\n\
snippet bgc:t\n\
	background-color: transparent;\n\
snippet bgi\n\
	background-image: url(${1});\n\
snippet bgi:n\n\
	background-image: none;\n\
snippet bgo\n\
	background-origin: ${1};\n\
snippet bgo:bb\n\
	background-origin: border-box;\n\
snippet bgo:cb\n\
	background-origin: content-box;\n\
snippet bgo:pb\n\
	background-origin: padding-box;\n\
snippet bgpx\n\
	background-position-x: ${1};\n\
snippet bgpy\n\
	background-position-y: ${1};\n\
snippet bgp\n\
	background-position: ${1:0} ${2:0};\n\
snippet bgr\n\
	background-repeat: ${1};\n\
snippet bgr:n\n\
	background-repeat: no-repeat;\n\
snippet bgr:x\n\
	background-repeat: repeat-x;\n\
snippet bgr:y\n\
	background-repeat: repeat-y;\n\
snippet bgr:r\n\
	background-repeat: repeat;\n\
snippet bgz\n\
	background-size: ${1};\n\
snippet bgz:a\n\
	background-size: auto;\n\
snippet bgz:ct\n\
	background-size: contain;\n\
snippet bgz:cv\n\
	background-size: cover;\n\
snippet bg\n\
	background: ${1};\n\
snippet bg:ie\n\
	filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${1}',sizingMethod='${2:crop}');\n\
snippet bg:n\n\
	background: none;\n\
snippet bd+\n\
	border: ${1:1px} ${2:solid} #${3:000};\n\
snippet bdb+\n\
	border-bottom: ${1:1px} ${2:solid} #${3:000};\n\
snippet bdbc\n\
	border-bottom-color: #${1:000};\n\
snippet bdbi\n\
	border-bottom-image: url(${1});\n\
snippet bdbi:n\n\
	border-bottom-image: none;\n\
snippet bdbli\n\
	border-bottom-left-image: url(${1});\n\
snippet bdbli:c\n\
	border-bottom-left-image: continue;\n\
snippet bdbli:n\n\
	border-bottom-left-image: none;\n\
snippet bdblrz\n\
	border-bottom-left-radius: ${1};\n\
snippet bdbri\n\
	border-bottom-right-image: url(${1});\n\
snippet bdbri:c\n\
	border-bottom-right-image: continue;\n\
snippet bdbri:n\n\
	border-bottom-right-image: none;\n\
snippet bdbrrz\n\
	border-bottom-right-radius: ${1};\n\
snippet bdbs\n\
	border-bottom-style: ${1};\n\
snippet bdbs:n\n\
	border-bottom-style: none;\n\
snippet bdbw\n\
	border-bottom-width: ${1};\n\
snippet bdb\n\
	border-bottom: ${1};\n\
snippet bdb:n\n\
	border-bottom: none;\n\
snippet bdbk\n\
	border-break: ${1};\n\
snippet bdbk:c\n\
	border-break: close;\n\
snippet bdcl\n\
	border-collapse: ${1};\n\
snippet bdcl:c\n\
	border-collapse: collapse;\n\
snippet bdcl:s\n\
	border-collapse: separate;\n\
snippet bdc\n\
	border-color: #${1:000};\n\
snippet bdci\n\
	border-corner-image: url(${1});\n\
snippet bdci:c\n\
	border-corner-image: continue;\n\
snippet bdci:n\n\
	border-corner-image: none;\n\
snippet bdf\n\
	border-fit: ${1};\n\
snippet bdf:c\n\
	border-fit: clip;\n\
snippet bdf:of\n\
	border-fit: overwrite;\n\
snippet bdf:ow\n\
	border-fit: overwrite;\n\
snippet bdf:r\n\
	border-fit: repeat;\n\
snippet bdf:sc\n\
	border-fit: scale;\n\
snippet bdf:sp\n\
	border-fit: space;\n\
snippet bdf:st\n\
	border-fit: stretch;\n\
snippet bdi\n\
	border-image: url(${1}) ${2:0} ${3:0} ${4:0} ${5:0} ${6:stretch} ${7:stretch};\n\
snippet bdi:n\n\
	border-image: none;\n\
snippet bdl+\n\
	border-left: ${1:1px} ${2:solid} #${3:000};\n\
snippet bdlc\n\
	border-left-color: #${1:000};\n\
snippet bdli\n\
	border-left-image: url(${1});\n\
snippet bdli:n\n\
	border-left-image: none;\n\
snippet bdls\n\
	border-left-style: ${1};\n\
snippet bdls:n\n\
	border-left-style: none;\n\
snippet bdlw\n\
	border-left-width: ${1};\n\
snippet bdl\n\
	border-left: ${1};\n\
snippet bdl:n\n\
	border-left: none;\n\
snippet bdlt\n\
	border-length: ${1};\n\
snippet bdlt:a\n\
	border-length: auto;\n\
snippet bdrz\n\
	border-radius: ${1};\n\
snippet bdr+\n\
	border-right: ${1:1px} ${2:solid} #${3:000};\n\
snippet bdrc\n\
	border-right-color: #${1:000};\n\
snippet bdri\n\
	border-right-image: url(${1});\n\
snippet bdri:n\n\
	border-right-image: none;\n\
snippet bdrs\n\
	border-right-style: ${1};\n\
snippet bdrs:n\n\
	border-right-style: none;\n\
snippet bdrw\n\
	border-right-width: ${1};\n\
snippet bdr\n\
	border-right: ${1};\n\
snippet bdr:n\n\
	border-right: none;\n\
snippet bdsp\n\
	border-spacing: ${1};\n\
snippet bds\n\
	border-style: ${1};\n\
snippet bds:ds\n\
	border-style: dashed;\n\
snippet bds:dtds\n\
	border-style: dot-dash;\n\
snippet bds:dtdtds\n\
	border-style: dot-dot-dash;\n\
snippet bds:dt\n\
	border-style: dotted;\n\
snippet bds:db\n\
	border-style: double;\n\
snippet bds:g\n\
	border-style: groove;\n\
snippet bds:h\n\
	border-style: hidden;\n\
snippet bds:i\n\
	border-style: inset;\n\
snippet bds:n\n\
	border-style: none;\n\
snippet bds:o\n\
	border-style: outset;\n\
snippet bds:r\n\
	border-style: ridge;\n\
snippet bds:s\n\
	border-style: solid;\n\
snippet bds:w\n\
	border-style: wave;\n\
snippet bdt+\n\
	border-top: ${1:1px} ${2:solid} #${3:000};\n\
snippet bdtc\n\
	border-top-color: #${1:000};\n\
snippet bdti\n\
	border-top-image: url(${1});\n\
snippet bdti:n\n\
	border-top-image: none;\n\
snippet bdtli\n\
	border-top-left-image: url(${1});\n\
snippet bdtli:c\n\
	border-corner-image: continue;\n\
snippet bdtli:n\n\
	border-corner-image: none;\n\
snippet bdtlrz\n\
	border-top-left-radius: ${1};\n\
snippet bdtri\n\
	border-top-right-image: url(${1});\n\
snippet bdtri:c\n\
	border-top-right-image: continue;\n\
snippet bdtri:n\n\
	border-top-right-image: none;\n\
snippet bdtrrz\n\
	border-top-right-radius: ${1};\n\
snippet bdts\n\
	border-top-style: ${1};\n\
snippet bdts:n\n\
	border-top-style: none;\n\
snippet bdtw\n\
	border-top-width: ${1};\n\
snippet bdt\n\
	border-top: ${1};\n\
snippet bdt:n\n\
	border-top: none;\n\
snippet bdw\n\
	border-width: ${1};\n\
snippet bd\n\
	border: ${1};\n\
snippet bd:n\n\
	border: none;\n\
snippet b\n\
	bottom: ${1};\n\
snippet b:a\n\
	bottom: auto;\n\
snippet bxsh+\n\
	box-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\n\
snippet bxsh\n\
	box-shadow: ${1};\n\
snippet bxsh:n\n\
	box-shadow: none;\n\
snippet bxz\n\
	box-sizing: ${1};\n\
snippet bxz:bb\n\
	box-sizing: border-box;\n\
snippet bxz:cb\n\
	box-sizing: content-box;\n\
snippet cps\n\
	caption-side: ${1};\n\
snippet cps:b\n\
	caption-side: bottom;\n\
snippet cps:t\n\
	caption-side: top;\n\
snippet cl\n\
	clear: ${1};\n\
snippet cl:b\n\
	clear: both;\n\
snippet cl:l\n\
	clear: left;\n\
snippet cl:n\n\
	clear: none;\n\
snippet cl:r\n\
	clear: right;\n\
snippet cp\n\
	clip: ${1};\n\
snippet cp:a\n\
	clip: auto;\n\
snippet cp:r\n\
	clip: rect(${1:0} ${2:0} ${3:0} ${4:0});\n\
snippet c\n\
	color: #${1:000};\n\
snippet ct\n\
	content: ${1};\n\
snippet ct:a\n\
	content: attr(${1});\n\
snippet ct:cq\n\
	content: close-quote;\n\
snippet ct:c\n\
	content: counter(${1});\n\
snippet ct:cs\n\
	content: counters(${1});\n\
snippet ct:ncq\n\
	content: no-close-quote;\n\
snippet ct:noq\n\
	content: no-open-quote;\n\
snippet ct:n\n\
	content: normal;\n\
snippet ct:oq\n\
	content: open-quote;\n\
snippet coi\n\
	counter-increment: ${1};\n\
snippet cor\n\
	counter-reset: ${1};\n\
snippet cur\n\
	cursor: ${1};\n\
snippet cur:a\n\
	cursor: auto;\n\
snippet cur:c\n\
	cursor: crosshair;\n\
snippet cur:d\n\
	cursor: default;\n\
snippet cur:ha\n\
	cursor: hand;\n\
snippet cur:he\n\
	cursor: help;\n\
snippet cur:m\n\
	cursor: move;\n\
snippet cur:p\n\
	cursor: pointer;\n\
snippet cur:t\n\
	cursor: text;\n\
snippet d\n\
	display: ${1};\n\
snippet d:mib\n\
	display: -moz-inline-box;\n\
snippet d:mis\n\
	display: -moz-inline-stack;\n\
snippet d:b\n\
	display: block;\n\
snippet d:cp\n\
	display: compact;\n\
snippet d:ib\n\
	display: inline-block;\n\
snippet d:itb\n\
	display: inline-table;\n\
snippet d:i\n\
	display: inline;\n\
snippet d:li\n\
	display: list-item;\n\
snippet d:n\n\
	display: none;\n\
snippet d:ri\n\
	display: run-in;\n\
snippet d:tbcp\n\
	display: table-caption;\n\
snippet d:tbc\n\
	display: table-cell;\n\
snippet d:tbclg\n\
	display: table-column-group;\n\
snippet d:tbcl\n\
	display: table-column;\n\
snippet d:tbfg\n\
	display: table-footer-group;\n\
snippet d:tbhg\n\
	display: table-header-group;\n\
snippet d:tbrg\n\
	display: table-row-group;\n\
snippet d:tbr\n\
	display: table-row;\n\
snippet d:tb\n\
	display: table;\n\
snippet ec\n\
	empty-cells: ${1};\n\
snippet ec:h\n\
	empty-cells: hide;\n\
snippet ec:s\n\
	empty-cells: show;\n\
snippet exp\n\
	expression()\n\
snippet fl\n\
	float: ${1};\n\
snippet fl:l\n\
	float: left;\n\
snippet fl:n\n\
	float: none;\n\
snippet fl:r\n\
	float: right;\n\
snippet f+\n\
	font: ${1:1em} ${2:Arial},${3:sans-serif};\n\
snippet fef\n\
	font-effect: ${1};\n\
snippet fef:eb\n\
	font-effect: emboss;\n\
snippet fef:eg\n\
	font-effect: engrave;\n\
snippet fef:n\n\
	font-effect: none;\n\
snippet fef:o\n\
	font-effect: outline;\n\
snippet femp\n\
	font-emphasize-position: ${1};\n\
snippet femp:a\n\
	font-emphasize-position: after;\n\
snippet femp:b\n\
	font-emphasize-position: before;\n\
snippet fems\n\
	font-emphasize-style: ${1};\n\
snippet fems:ac\n\
	font-emphasize-style: accent;\n\
snippet fems:c\n\
	font-emphasize-style: circle;\n\
snippet fems:ds\n\
	font-emphasize-style: disc;\n\
snippet fems:dt\n\
	font-emphasize-style: dot;\n\
snippet fems:n\n\
	font-emphasize-style: none;\n\
snippet fem\n\
	font-emphasize: ${1};\n\
snippet ff\n\
	font-family: ${1};\n\
snippet ff:c\n\
	font-family: ${1:'Monotype Corsiva','Comic Sans MS'},cursive;\n\
snippet ff:f\n\
	font-family: ${1:Capitals,Impact},fantasy;\n\
snippet ff:m\n\
	font-family: ${1:Monaco,'Courier New'},monospace;\n\
snippet ff:ss\n\
	font-family: ${1:Helvetica,Arial},sans-serif;\n\
snippet ff:s\n\
	font-family: ${1:Georgia,'Times New Roman'},serif;\n\
snippet fza\n\
	font-size-adjust: ${1};\n\
snippet fza:n\n\
	font-size-adjust: none;\n\
snippet fz\n\
	font-size: ${1};\n\
snippet fsm\n\
	font-smooth: ${1};\n\
snippet fsm:aw\n\
	font-smooth: always;\n\
snippet fsm:a\n\
	font-smooth: auto;\n\
snippet fsm:n\n\
	font-smooth: never;\n\
snippet fst\n\
	font-stretch: ${1};\n\
snippet fst:c\n\
	font-stretch: condensed;\n\
snippet fst:e\n\
	font-stretch: expanded;\n\
snippet fst:ec\n\
	font-stretch: extra-condensed;\n\
snippet fst:ee\n\
	font-stretch: extra-expanded;\n\
snippet fst:n\n\
	font-stretch: normal;\n\
snippet fst:sc\n\
	font-stretch: semi-condensed;\n\
snippet fst:se\n\
	font-stretch: semi-expanded;\n\
snippet fst:uc\n\
	font-stretch: ultra-condensed;\n\
snippet fst:ue\n\
	font-stretch: ultra-expanded;\n\
snippet fs\n\
	font-style: ${1};\n\
snippet fs:i\n\
	font-style: italic;\n\
snippet fs:n\n\
	font-style: normal;\n\
snippet fs:o\n\
	font-style: oblique;\n\
snippet fv\n\
	font-variant: ${1};\n\
snippet fv:n\n\
	font-variant: normal;\n\
snippet fv:sc\n\
	font-variant: small-caps;\n\
snippet fw\n\
	font-weight: ${1};\n\
snippet fw:b\n\
	font-weight: bold;\n\
snippet fw:br\n\
	font-weight: bolder;\n\
snippet fw:lr\n\
	font-weight: lighter;\n\
snippet fw:n\n\
	font-weight: normal;\n\
snippet f\n\
	font: ${1};\n\
snippet h\n\
	height: ${1};\n\
snippet h:a\n\
	height: auto;\n\
snippet l\n\
	left: ${1};\n\
snippet l:a\n\
	left: auto;\n\
snippet lts\n\
	letter-spacing: ${1};\n\
snippet lh\n\
	line-height: ${1};\n\
snippet lisi\n\
	list-style-image: url(${1});\n\
snippet lisi:n\n\
	list-style-image: none;\n\
snippet lisp\n\
	list-style-position: ${1};\n\
snippet lisp:i\n\
	list-style-position: inside;\n\
snippet lisp:o\n\
	list-style-position: outside;\n\
snippet list\n\
	list-style-type: ${1};\n\
snippet list:c\n\
	list-style-type: circle;\n\
snippet list:dclz\n\
	list-style-type: decimal-leading-zero;\n\
snippet list:dc\n\
	list-style-type: decimal;\n\
snippet list:d\n\
	list-style-type: disc;\n\
snippet list:lr\n\
	list-style-type: lower-roman;\n\
snippet list:n\n\
	list-style-type: none;\n\
snippet list:s\n\
	list-style-type: square;\n\
snippet list:ur\n\
	list-style-type: upper-roman;\n\
snippet lis\n\
	list-style: ${1};\n\
snippet lis:n\n\
	list-style: none;\n\
snippet mb\n\
	margin-bottom: ${1};\n\
snippet mb:a\n\
	margin-bottom: auto;\n\
snippet ml\n\
	margin-left: ${1};\n\
snippet ml:a\n\
	margin-left: auto;\n\
snippet mr\n\
	margin-right: ${1};\n\
snippet mr:a\n\
	margin-right: auto;\n\
snippet mt\n\
	margin-top: ${1};\n\
snippet mt:a\n\
	margin-top: auto;\n\
snippet m\n\
	margin: ${1};\n\
snippet m:4\n\
	margin: ${1:0} ${2:0} ${3:0} ${4:0};\n\
snippet m:3\n\
	margin: ${1:0} ${2:0} ${3:0};\n\
snippet m:2\n\
	margin: ${1:0} ${2:0};\n\
snippet m:0\n\
	margin: 0;\n\
snippet m:a\n\
	margin: auto;\n\
snippet mah\n\
	max-height: ${1};\n\
snippet mah:n\n\
	max-height: none;\n\
snippet maw\n\
	max-width: ${1};\n\
snippet maw:n\n\
	max-width: none;\n\
snippet mih\n\
	min-height: ${1};\n\
snippet miw\n\
	min-width: ${1};\n\
snippet op\n\
	opacity: ${1};\n\
snippet op:ie\n\
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=${1:100});\n\
snippet op:ms\n\
	-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=${1:100})';\n\
snippet orp\n\
	orphans: ${1};\n\
snippet o+\n\
	outline: ${1:1px} ${2:solid} #${3:000};\n\
snippet oc\n\
	outline-color: ${1:#000};\n\
snippet oc:i\n\
	outline-color: invert;\n\
snippet oo\n\
	outline-offset: ${1};\n\
snippet os\n\
	outline-style: ${1};\n\
snippet ow\n\
	outline-width: ${1};\n\
snippet o\n\
	outline: ${1};\n\
snippet o:n\n\
	outline: none;\n\
snippet ovs\n\
	overflow-style: ${1};\n\
snippet ovs:a\n\
	overflow-style: auto;\n\
snippet ovs:mq\n\
	overflow-style: marquee;\n\
snippet ovs:mv\n\
	overflow-style: move;\n\
snippet ovs:p\n\
	overflow-style: panner;\n\
snippet ovs:s\n\
	overflow-style: scrollbar;\n\
snippet ovx\n\
	overflow-x: ${1};\n\
snippet ovx:a\n\
	overflow-x: auto;\n\
snippet ovx:h\n\
	overflow-x: hidden;\n\
snippet ovx:s\n\
	overflow-x: scroll;\n\
snippet ovx:v\n\
	overflow-x: visible;\n\
snippet ovy\n\
	overflow-y: ${1};\n\
snippet ovy:a\n\
	overflow-y: auto;\n\
snippet ovy:h\n\
	overflow-y: hidden;\n\
snippet ovy:s\n\
	overflow-y: scroll;\n\
snippet ovy:v\n\
	overflow-y: visible;\n\
snippet ov\n\
	overflow: ${1};\n\
snippet ov:a\n\
	overflow: auto;\n\
snippet ov:h\n\
	overflow: hidden;\n\
snippet ov:s\n\
	overflow: scroll;\n\
snippet ov:v\n\
	overflow: visible;\n\
snippet pb\n\
	padding-bottom: ${1};\n\
snippet pl\n\
	padding-left: ${1};\n\
snippet pr\n\
	padding-right: ${1};\n\
snippet pt\n\
	padding-top: ${1};\n\
snippet p\n\
	padding: ${1};\n\
snippet p:4\n\
	padding: ${1:0} ${2:0} ${3:0} ${4:0};\n\
snippet p:3\n\
	padding: ${1:0} ${2:0} ${3:0};\n\
snippet p:2\n\
	padding: ${1:0} ${2:0};\n\
snippet p:0\n\
	padding: 0;\n\
snippet pgba\n\
	page-break-after: ${1};\n\
snippet pgba:aw\n\
	page-break-after: always;\n\
snippet pgba:a\n\
	page-break-after: auto;\n\
snippet pgba:l\n\
	page-break-after: left;\n\
snippet pgba:r\n\
	page-break-after: right;\n\
snippet pgbb\n\
	page-break-before: ${1};\n\
snippet pgbb:aw\n\
	page-break-before: always;\n\
snippet pgbb:a\n\
	page-break-before: auto;\n\
snippet pgbb:l\n\
	page-break-before: left;\n\
snippet pgbb:r\n\
	page-break-before: right;\n\
snippet pgbi\n\
	page-break-inside: ${1};\n\
snippet pgbi:a\n\
	page-break-inside: auto;\n\
snippet pgbi:av\n\
	page-break-inside: avoid;\n\
snippet pos\n\
	position: ${1};\n\
snippet pos:a\n\
	position: absolute;\n\
snippet pos:f\n\
	position: fixed;\n\
snippet pos:r\n\
	position: relative;\n\
snippet pos:s\n\
	position: static;\n\
snippet q\n\
	quotes: ${1};\n\
snippet q:en\n\
	quotes: '\\201C' '\\201D' '\\2018' '\\2019';\n\
snippet q:n\n\
	quotes: none;\n\
snippet q:ru\n\
	quotes: '\\00AB' '\\00BB' '\\201E' '\\201C';\n\
snippet rz\n\
	resize: ${1};\n\
snippet rz:b\n\
	resize: both;\n\
snippet rz:h\n\
	resize: horizontal;\n\
snippet rz:n\n\
	resize: none;\n\
snippet rz:v\n\
	resize: vertical;\n\
snippet r\n\
	right: ${1};\n\
snippet r:a\n\
	right: auto;\n\
snippet tbl\n\
	table-layout: ${1};\n\
snippet tbl:a\n\
	table-layout: auto;\n\
snippet tbl:f\n\
	table-layout: fixed;\n\
snippet tal\n\
	text-align-last: ${1};\n\
snippet tal:a\n\
	text-align-last: auto;\n\
snippet tal:c\n\
	text-align-last: center;\n\
snippet tal:l\n\
	text-align-last: left;\n\
snippet tal:r\n\
	text-align-last: right;\n\
snippet ta\n\
	text-align: ${1};\n\
snippet ta:c\n\
	text-align: center;\n\
snippet ta:l\n\
	text-align: left;\n\
snippet ta:r\n\
	text-align: right;\n\
snippet td\n\
	text-decoration: ${1};\n\
snippet td:l\n\
	text-decoration: line-through;\n\
snippet td:n\n\
	text-decoration: none;\n\
snippet td:o\n\
	text-decoration: overline;\n\
snippet td:u\n\
	text-decoration: underline;\n\
snippet te\n\
	text-emphasis: ${1};\n\
snippet te:ac\n\
	text-emphasis: accent;\n\
snippet te:a\n\
	text-emphasis: after;\n\
snippet te:b\n\
	text-emphasis: before;\n\
snippet te:c\n\
	text-emphasis: circle;\n\
snippet te:ds\n\
	text-emphasis: disc;\n\
snippet te:dt\n\
	text-emphasis: dot;\n\
snippet te:n\n\
	text-emphasis: none;\n\
snippet th\n\
	text-height: ${1};\n\
snippet th:a\n\
	text-height: auto;\n\
snippet th:f\n\
	text-height: font-size;\n\
snippet th:m\n\
	text-height: max-size;\n\
snippet th:t\n\
	text-height: text-size;\n\
snippet ti\n\
	text-indent: ${1};\n\
snippet ti:-\n\
	text-indent: -9999px;\n\
snippet tj\n\
	text-justify: ${1};\n\
snippet tj:a\n\
	text-justify: auto;\n\
snippet tj:d\n\
	text-justify: distribute;\n\
snippet tj:ic\n\
	text-justify: inter-cluster;\n\
snippet tj:ii\n\
	text-justify: inter-ideograph;\n\
snippet tj:iw\n\
	text-justify: inter-word;\n\
snippet tj:k\n\
	text-justify: kashida;\n\
snippet tj:t\n\
	text-justify: tibetan;\n\
snippet to+\n\
	text-outline: ${1:0} ${2:0} #${3:000};\n\
snippet to\n\
	text-outline: ${1};\n\
snippet to:n\n\
	text-outline: none;\n\
snippet tr\n\
	text-replace: ${1};\n\
snippet tr:n\n\
	text-replace: none;\n\
snippet tsh+\n\
	text-shadow: ${1:0} ${2:0} ${3:0} #${4:000};\n\
snippet tsh\n\
	text-shadow: ${1};\n\
snippet tsh:n\n\
	text-shadow: none;\n\
snippet tt\n\
	text-transform: ${1};\n\
snippet tt:c\n\
	text-transform: capitalize;\n\
snippet tt:l\n\
	text-transform: lowercase;\n\
snippet tt:n\n\
	text-transform: none;\n\
snippet tt:u\n\
	text-transform: uppercase;\n\
snippet tw\n\
	text-wrap: ${1};\n\
snippet tw:no\n\
	text-wrap: none;\n\
snippet tw:n\n\
	text-wrap: normal;\n\
snippet tw:s\n\
	text-wrap: suppress;\n\
snippet tw:u\n\
	text-wrap: unrestricted;\n\
snippet t\n\
	top: ${1};\n\
snippet t:a\n\
	top: auto;\n\
snippet va\n\
	vertical-align: ${1};\n\
snippet va:bl\n\
	vertical-align: baseline;\n\
snippet va:b\n\
	vertical-align: bottom;\n\
snippet va:m\n\
	vertical-align: middle;\n\
snippet va:sub\n\
	vertical-align: sub;\n\
snippet va:sup\n\
	vertical-align: super;\n\
snippet va:tb\n\
	vertical-align: text-bottom;\n\
snippet va:tt\n\
	vertical-align: text-top;\n\
snippet va:t\n\
	vertical-align: top;\n\
snippet v\n\
	visibility: ${1};\n\
snippet v:c\n\
	visibility: collapse;\n\
snippet v:h\n\
	visibility: hidden;\n\
snippet v:v\n\
	visibility: visible;\n\
snippet whsc\n\
	white-space-collapse: ${1};\n\
snippet whsc:ba\n\
	white-space-collapse: break-all;\n\
snippet whsc:bs\n\
	white-space-collapse: break-strict;\n\
snippet whsc:k\n\
	white-space-collapse: keep-all;\n\
snippet whsc:l\n\
	white-space-collapse: loose;\n\
snippet whsc:n\n\
	white-space-collapse: normal;\n\
snippet whs\n\
	white-space: ${1};\n\
snippet whs:n\n\
	white-space: normal;\n\
snippet whs:nw\n\
	white-space: nowrap;\n\
snippet whs:pl\n\
	white-space: pre-line;\n\
snippet whs:pw\n\
	white-space: pre-wrap;\n\
snippet whs:p\n\
	white-space: pre;\n\
snippet wid\n\
	widows: ${1};\n\
snippet w\n\
	width: ${1};\n\
snippet w:a\n\
	width: auto;\n\
snippet wob\n\
	word-break: ${1};\n\
snippet wob:ba\n\
	word-break: break-all;\n\
snippet wob:bs\n\
	word-break: break-strict;\n\
snippet wob:k\n\
	word-break: keep-all;\n\
snippet wob:l\n\
	word-break: loose;\n\
snippet wob:n\n\
	word-break: normal;\n\
snippet wos\n\
	word-spacing: ${1};\n\
snippet wow\n\
	word-wrap: ${1};\n\
snippet wow:no\n\
	word-wrap: none;\n\
snippet wow:n\n\
	word-wrap: normal;\n\
snippet wow:s\n\
	word-wrap: suppress;\n\
snippet wow:u\n\
	word-wrap: unrestricted;\n\
snippet z\n\
	z-index: ${1};\n\
snippet z:a\n\
	z-index: auto;\n\
snippet zoo\n\
	zoom: 1;\n\
";
exports.scope = "css";

});
